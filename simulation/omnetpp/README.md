# OMNeT++ traffic simulation (optional)

This repo ships a **Python traffic generator** (`../generate_traffic_csv.py`) that produces the same CSV columns you would export from a network simulation: `timestamp`, `requests`, `error_rate`, `response_time`. Run it if you do not have OMNeT++ installed.

## If you use OMNeT++ (6.x)

1. Install [OMNeT++](https://omnetpp.org/) and open the IDE.
2. Create a new empty project, then copy `EcommerceTraffic.ned` and `TrafficGen.cc` from this folder into the project's `src/` (or merge into your own structure).
3. In the project directory, generate a Makefile:  
   `opp_makemake -f --deep`
4. Build and run; ensure `results/` exists (or change the path in `TrafficGen.cc`). The module appends rows to `results/traffic_omnet.csv` with the same headers as the Python script.

The C++ module is intentionally small: timed ticks simulate request volume, error rate under load, and latency—mirroring the Python phases for coursework demos.
