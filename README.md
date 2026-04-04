# AI-Powered Self-Healing CI/CD Pipeline (e-commerce demo)

End-to-end demo: **AURUM** React storefront (Three.js backdrop, ₹ pricing), Node API, FastAPI ML classifier, Docker Compose, Jenkins stages (build → test → deploy → monitor → ML decision → rollback), plus traffic simulation and optional OMNeT++ sources.

## Prerequisites

- Node.js 18+
- Python 3.11+ (for ML service / training / simulation CSV)
- Docker Desktop (optional, for Compose)
- Jenkins (optional, for `Jenkinsfile`)

## Quick start (local, no Docker)

### 1. Traffic CSV (optional refresh)

```powershell
cd simulation
python generate_traffic_csv.py
```

Copy to ML data if needed:

```powershell
Copy-Item -Force data\traffic_simulation.csv ..\ml-service\data\
```

### 2. Train `model.pkl`

```powershell
cd ml-service
pip install -r requirements.txt
python train_from_csv.py
```

### 3. ML service

```powershell
python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

### 4. Backend

```powershell
cd backend
npm install
npm start
```

Set `ML_SERVICE_URL=http://localhost:8000` in `.env` if the ML service is not the default.

### 5. Frontend

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`. API defaults to `http://localhost:5000` via `VITE_API_URL`.

## Docker Compose

From the repository root (`ai-driven-self-healing-cicd-pipeline`):

```powershell
docker compose up --build
```

**Storefront (AURUM UI):** open **`http://localhost:3000`** — this is the React site.  
If you open **`http://localhost:5000`** or **`http://localhost:8000`**, you will only see JSON from the API (for example `/health`), not the shop.

- Frontend (website): `http://localhost:3000`
- Backend API: `http://localhost:5000`
- ML API: `http://localhost:8000` (`POST /predict`, `GET /health`)

## Useful endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /health` | Backend liveness |
| `GET /metrics/summary` | Rolling `error_rate`, `response_time_ms` |
| `POST /metrics/ml-evaluate` | Proxy current metrics to ML service |
| `POST /predict` (ML) | Body: `{ "error_rate", "response_time" }` → `SAFE` / `FAIL` |

## Scripts

- `node scripts/monitor.mjs` — sample metrics + call ML; exits `1` on `FAIL`.
- `bash scripts/chaos-compose.sh` or `.\scripts\chaos-compose.ps1` — random service restart (with Compose running).

## Jupyter

Open `notebooks/train_deployment_model.ipynb` (install `pandas`, `numpy`, and `scikit-learn` in the kernel). It compares several classifiers, saves the best to `ml-service/model.pkl`, and includes a small **Q-learning** traffic-policy demo.

## Jenkins

Use the `Jenkinsfile` at the repo root. Point the job at this repository; stages use `docker compose` and `curl` against `localhost` (suitable for a single-node agent with Docker).

## Tests

```powershell
cd backend
npm test
```
