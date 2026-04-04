"""
ML microservice: loads model.pkl, exposes POST /predict.
"""
from __future__ import annotations

import os
import pickle
from pathlib import Path

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

ROOT = Path(__file__).resolve().parent
MODEL_PATH = ROOT / "model.pkl"

app = FastAPI(title="Deployment Safety Classifier", version="1.0.0")
_model = None


class PredictRequest(BaseModel):
    error_rate: float = Field(..., ge=0, le=1)
    response_time: float = Field(..., ge=0)


def load_model():
    global _model
    if not MODEL_PATH.exists():
        raise RuntimeError(
            f"model.pkl not found at {MODEL_PATH}. Run: python train_from_csv.py"
        )
    with MODEL_PATH.open("rb") as f:
        _model = pickle.load(f)


@app.on_event("startup")
def startup():
    load_model()


@app.get("/health")
def health():
    return {"status": "ok", "model_loaded": _model is not None}


@app.post("/predict")
def predict(body: PredictRequest):
    if _model is None:
        raise HTTPException(status_code=503, detail="Model not loaded")
    X = [[body.error_rate, body.response_time]]
    cls = int(_model.predict(X)[0])
    proba = None
    if hasattr(_model, "predict_proba"):
        proba = _model.predict_proba(X)[0].tolist()
    label = "FAIL" if cls == 1 else "SAFE"
    return {"prediction": label, "class": cls, "proba": proba}


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("PORT", "8000"))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
