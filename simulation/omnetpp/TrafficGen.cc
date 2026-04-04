#include <omnetpp.h>
#include <fstream>
#include <cmath>

using namespace omnetpp;

/**
 * Simple discrete-time traffic generator.
 * Writes CSV: timestamp,requests,error_rate,response_time
 * (Beginner demo — build inside an OMNeT++ project.)
 */
class TrafficGen : public cSimpleModule {
  protected:
    cMessage *timer = nullptr;
    std::ofstream csv;
    long tick = 0;

    void openCsv() {
        csv.open("results/traffic_omnet.csv", std::ios::out | std::ios::trunc);
        csv << "timestamp,requests,error_rate,response_time\n";
    }

    void initialize() override {
        openCsv();
        timer = new cMessage("tick");
        scheduleAfter(par("interval"), timer);
    }

    void handleMessage(cMessage *msg) override {
        if (msg != timer)
            return;

        double t = simTime().dbl();
        int phase = tick / 80; // align with Python phases (~)
        int requests = 0;
        double err = 0.02;
        if (phase == 0) {
            requests = intuniform(40, 90);
            err = uniform(0.005, 0.03);
        } else if (phase == 1) {
            requests = intuniform(150, 280);
            err = uniform(0.04, 0.12);
        } else {
            requests = intuniform(100, 220);
            err = uniform(0.12, 0.35);
        }

        double rt = 25 + requests * 0.15 + err * 800 + uniform(-5, 25);
        if (rt < 10)
            rt = 10;

        csv << t << "," << requests << "," << err << "," << rt << "\n";
        csv.flush();

        tick++;
        scheduleAfter(par("interval"), timer);
    }

    void finish() override {
        cancelAndDelete(timer);
        csv.close();
    }
};

Define_Module(TrafficGen);
