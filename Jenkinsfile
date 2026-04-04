pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = 'shopai'
    BACKEND_URL = 'http://localhost:5000'
    ML_URL = 'http://localhost:8000'
  }

  stages {
    stage('Build') {
      steps {
        echo '--- Build: install frontend & backend deps ---'
        sh '''
          cd frontend && npm ci || npm install
          cd ../backend && npm ci || npm install
        '''
      }
    }

    stage('Test') {
      steps {
        echo '--- Test: Jest backend ---'
        sh 'cd backend && npm test'
      }
    }

    stage('Docker Build') {
      steps {
        echo '--- Docker Build: all services ---'
        sh 'docker compose build'
      }
    }

    stage('Deploy (Canary 10%)') {
      steps {
        echo '--- Simulated canary: route 10% traffic to new revision ---'
        sh '''
          echo "canary_percent=10" > deploy_state.env
          echo "stable_revision=1 new_revision=2" >> deploy_state.env
          docker compose up -d --remove-orphans
          sleep 8
        '''
      }
    }

    stage('Monitor') {
      steps {
        echo '--- Monitor: sample health + metrics ---'
        sh '''
          curl -sf ${BACKEND_URL}/health || exit 1
          curl -sf ${BACKEND_URL}/metrics/summary || true
        '''
      }
    }

    stage('ML Decision') {
      steps {
        echo '--- Call ML API via backend proxy ---'
        sh '''
          curl -sf -X POST ${BACKEND_URL}/metrics/ml-evaluate \
            -H "Content-Type: application/json" \
            -d "{}" > ml_out.json
          node -e "const j=require('./ml_out.json'); require('fs').writeFileSync('ml_decision.txt', j.prediction)"
          echo "ML prediction: $(cat ml_decision.txt)"
        '''
      }
    }

    stage('Rollback if failure') {
      steps {
        echo '--- Rollback on FAIL ---'
        sh '''
          if grep -q FAIL ml_decision.txt 2>/dev/null; then
            echo "FAIL detected — simulated rollback (restart stable stack)"
            docker compose restart backend || true
            exit 1
          else
            echo "SAFE — continue"
          fi
        '''
      }
    }
  }

  post {
    always {
      echo 'Pipeline finished.'
    }
  }
}
