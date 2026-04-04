"""
Generate e-commerce-style traffic metrics as CSV (beginner-friendly).

Phases: normal load, spike, and failures under load — no OMNeT++ required to run.
Output: timestamp, requests, error_rate, response_time

For OMNeT++-style workflow, see simulation/omnetpp/README.md
"""
from __future__ import annotations

import csv
import random
from datetime import datetime, timedelta
from pathlib import Path

OUT = Path(__file__).resolve().parent / "data" / "traffic_simulation.csv"


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    random.seed(42)
    base = datetime(2026, 1, 1, 8, 0, 0)
    rows: list[tuple] = []

    for i in range(240):
        t = base + timedelta(seconds=i * 15)
        phase = i // 80  # 0 normal, 1 spike, 2 degraded

        if phase == 0:
            requests = random.randint(40, 90)
            err = random.uniform(0.005, 0.03)
        elif phase == 1:
            requests = random.randint(150, 280)
            err = random.uniform(0.04, 0.12)
        else:
            requests = random.randint(100, 220)
            err = random.uniform(0.12, 0.35)

        # Latency grows with load and errors
        rt = 25 + requests * 0.15 + err * 800 + random.uniform(-5, 25)
        rt = max(10, rt)

        rows.append(
            (
                t.isoformat(timespec="seconds"),
                requests,
                round(err, 4),
                round(rt, 2),
            )
        )

    with OUT.open("w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["timestamp", "requests", "error_rate", "response_time"])
        w.writerows(rows)

    print(f"Wrote {len(rows)} rows to {OUT}")


if __name__ == "__main__":
    main()
