"""
Train several classifiers on simulation CSV, pick the best by macro-F1, save model.pkl.
Features: error_rate, response_time
Label: 1 = FAIL if error_rate > 0.08 or response_time > 250
"""
from __future__ import annotations

import csv
import pickle
from pathlib import Path

import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, f1_score, classification_report
from sklearn.model_selection import train_test_split

ROOT = Path(__file__).resolve().parent
CSV_PATH = ROOT / "data" / "traffic_simulation.csv"
MODEL_PATH = ROOT / "model.pkl"


def load_xy():
    rows = []
    with CSV_PATH.open(newline="", encoding="utf-8") as f:
        r = csv.DictReader(f)
        for row in r:
            er = float(row["error_rate"])
            rt = float(row["response_time"])
            fail = 1 if (er > 0.08 or rt > 250) else 0
            rows.append(([er, rt], fail))
    X = np.array([a for a, _ in rows], dtype=float)
    y = np.array([b for _, b in rows], dtype=int)
    return X, y


def main() -> None:
    if not CSV_PATH.exists():
        raise SystemExit(f"Missing dataset: {CSV_PATH}")

    X, y = load_xy()
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    candidates = {
        "logistic_regression": LogisticRegression(max_iter=500),
        "decision_tree": DecisionTreeClassifier(max_depth=4, random_state=42),
        "random_forest": RandomForestClassifier(
            n_estimators=80, max_depth=6, random_state=42
        ),
        "gradient_boosting": GradientBoostingClassifier(
            n_estimators=80, max_depth=3, learning_rate=0.1, random_state=42
        ),
    }

    results = []
    for name, clf in candidates.items():
        clf.fit(X_train, y_train)
        pred = clf.predict(X_test)
        acc = accuracy_score(y_test, pred)
        f1 = f1_score(y_test, pred, average="macro", zero_division=0)
        results.append((name, clf, acc, f1))
        print(f"{name:22}  acc={acc:.3f}  macro_f1={f1:.3f}")

    best_name, best_model, _, best_f1 = max(results, key=lambda r: r[3])
    print(f"\nBest by macro-F1: {best_name} (macro_f1={best_f1:.3f})")

    pred = best_model.predict(X_test)
    print(classification_report(y_test, pred, target_names=["Safe", "Fail"], zero_division=0))

    with MODEL_PATH.open("wb") as f:
        pickle.dump(best_model, f)
    print(f"Saved {MODEL_PATH}")


if __name__ == "__main__":
    main()
