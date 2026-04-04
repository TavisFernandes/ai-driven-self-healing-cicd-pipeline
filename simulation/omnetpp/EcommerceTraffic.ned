// Minimal OMNeT++ network — import into an OMNeT++ project and build with opp_makemake
package ecommerce;

simple TrafficGen {
    parameters:
        volatile double interval @unit(s) = default(0.15s);
}

network EcommerceTrafficNet {
    submodules:
        gen: TrafficGen;
    connections allowunconnected:
}
