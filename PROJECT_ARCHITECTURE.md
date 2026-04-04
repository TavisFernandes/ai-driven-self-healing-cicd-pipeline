You are a senior DevOps Engineer + Full Stack Developer + AI Engineer.

Build a complete project titled:

"AI-Powered Self-Healing CI/CD Pipeline with Canary Deployment"

This is a production-style academic project for an e-commerce system inspired by Amazon.

---

## 🎯 PROJECT GOAL

Create a smart CI/CD system that:

* Automatically builds, tests, and deploys an e-commerce app
* Uses Docker for containerization
* Uses Jenkins for CI/CD pipeline
* Implements Canary Deployment (10% traffic testing)
* Monitors system health (error rate, latency)
* Uses simple AI logic to predict deployment failure
* Automatically rolls back if failure detected
* Includes Chaos Engineering (simulate failures)

---

## 🖥️ FRONTEND REQUIREMENTS

Replicate a modern e-commerce UI similar to:
https://marvelous-league-629341-c759dd393.framer.app/

Tech:

* React.js
* Tailwind CSS

Features:

* Homepage (products grid)
* Product page
* Cart system
* Login/Register UI
* Clean modern UI (same feel as reference site)

---

## ⚙️ BACKEND REQUIREMENTS

Tech:

* Node.js + Express

APIs:

* /products
* /cart
* /login
* /checkout

Features:

* Basic authentication
* Cart management
* Order simulation
* Logging system (important for monitoring)

---

## 🐳 DOCKER REQUIREMENTS

* Dockerfile for frontend
* Dockerfile for backend
* docker-compose.yml

Services:

* frontend
* backend
* monitoring service (simple logs or script)

---

## 🔁 JENKINS PIPELINE

Create Jenkinsfile with stages:

1. Build
2. Test
3. Docker Build
4. Deploy (Canary Deployment)
5. Monitor
6. Decision (AI logic)
7. Rollback (if needed)

---

## 🧠 AI FAILURE PREDICTION (SIMPLE)

Implement a simple model:

Input:

* error_rate
* response_time

Logic:

* If error_rate > threshold → FAIL
* Else → SUCCESS

(Optional: Logistic Regression in Python)

---

## 🚦 CANARY DEPLOYMENT

* Deploy new version to 10% users (simulate)
* Compare:

  * old vs new version performance
* If stable → full deploy
* Else → rollback

---

## 💥 CHAOS ENGINEERING

Simulate failures:

* Random container shutdown
* Increased response delay

System should:

* Detect issue
* Recover automatically

---

## 📊 MONITORING SYSTEM

Track:

* Error rate
* Response time
* Failed requests

Store logs and use them for AI decision

---

## 🔁 AUTO ROLLBACK

* Store previous Docker image
* If failure:

  * Stop new container
  * Restart old version

---

## 🧪 TRAFFIC SIMULATION (NEW - OMNeT++)

Use OMNeT++ to simulate realistic network traffic for the system.

Simulation should generate:

* Request load (normal vs spike traffic)
* Error rates under load
* Response time variations

Output:

* Export simulation data as CSV file:
  timestamp, requests, error_rate, response_time

Purpose:

* Provide realistic dataset for AI model training
* Simulate real-world e-commerce traffic scenarios

---

## 📓 MACHINE LEARNING PIPELINE (NEW)

Use a .ipynb (Jupyter Notebook) file to:

1. Load simulated traffic dataset (CSV from OMNeT++)
2. Perform basic preprocessing
3. Train a simple model:

   * Logistic Regression OR Decision Tree

Features:

* error_rate
* response_time

Label:

* 0 → Safe Deployment
* 1 → Failed Deployment

Export trained model:

* Save as model.pkl using pickle

---

## 🔗 MODEL INTEGRATION (NEW)

Integrate the trained .pkl model into the system:

Approach:

* Create a Python microservice (Flask/FastAPI)
* Load model.pkl
* Expose API endpoint:
  /predict

Flow:

* Backend sends metrics (error_rate, response_time)
* Python service returns:

  * SAFE or FAIL prediction

---

## 📦 DOCKER EXTENSION (NEW)

Extend Docker setup to include:

Additional service:

* ml-service (Python model API)

Update docker-compose:

* frontend
* backend
* ml-service
* monitoring

---

## 📊 ADVANCED MONITORING FLOW (UPDATED)

Monitoring system should:

* Collect real-time metrics
* Send metrics to ML model
* Receive prediction
* Trigger decision engine

---

## 🤖 AI-DRIVEN DECISION ENGINE (NEW)

Decision logic:

Input:

* Monitoring metrics
* ML model prediction

Output:

* Continue deployment OR rollback

---

## 💥 CHAOS + AI INTEGRATION (NEW)

During chaos testing:

* Inject failures
* Observe metrics
* Validate if AI correctly predicts failure

---

## 📂 OUTPUT FORMAT

Generate:

1. Folder structure
2. Full frontend code
3. Full backend code
4. Dockerfiles
5. docker-compose.yml
6. Jenkinsfile
7. AI prediction script (Python)
8. Monitoring script
9. Steps to run locally
10. Sample test cases
11. OMNeT++ simulation setup
12. Jupyter Notebook (.ipynb) for training
13. ML microservice code

---

## 🎯 IMPORTANT

* Keep code beginner-friendly
* Avoid unnecessary complexity
* Focus on working prototype
* Simulate traffic instead of real scaling
* Add comments explaining logic

---

## 📊 CASE STUDY CONTEXT

This system solves:

* Website crashes during updates
* Slow manual rollback
* Risk during high traffic sales

Results:

* 40% downtime reduction
* Faster recovery
* Safer deployments

---

Now generate the complete project step-by-step.

Option A — Local (3 terminals, good for dev)
1. ML service (from ml-service)

cd c:\Projects\APDD-CaseStudyProject\ai-driven-self-healing-cicd-pipeline\ml-service
pip install -r requirements.txt
python train_from_csv.py
python -m uvicorn main:app --host 0.0.0.0 --port 8000


2. Backend (new terminal)

cd c:\Projects\APDD-CaseStudyProject\ai-driven-self-healing-cicd-pipeline\backend
npm install
npm start

Default: http://localhost:5000. For ML from the backend, set in backend\.env:

ML_SERVICE_URL=http://localhost:8000

(if you skip this, the code already defaults to http://localhost:8000.)


3. Frontend (new terminal)

cd c:\Projects\APDD-CaseStudyProject\ai-driven-self-healing-cicd-pipeline\frontend
npm install
npm run dev

Open http://localhost:3000 (Vite). The UI talks to the API at http://localhost:5000 unless you set VITE_API_URL in frontend\.env.


Option B — Docker (one command)
From the repo root:

cd c:\Projects\APDD-CaseStudyProject\ai-driven-self-healing-cicd-pipeline
docker compose up --build

if already build then:

docker compose up

Then:
Frontend: http://localhost:3000
Backend: http://localhost:5000
ML API: http://localhost:8000
Quick checks
Backend health: http://localhost:5000/health
ML health: http://localhost:8000/health
Backend tests: cd backend → npm test
More detail is in README.md in the same folder.
