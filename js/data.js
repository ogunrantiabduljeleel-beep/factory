/*
==========================================
FACTORY DATA
------------------------------------------
This file creates machine objects using
the Factory Function.
==========================================
*/

// Create Factory Machines

const conveyor = createMachine(
    1,
    "Conveyor Belt",
    "Material Handling",
    "Running",
    12500,
    30000
);

const gearbox = createMachine(
    2,
    "Gearbox",
    "Power Transmission",
    "Running",
    40000,
    50000
);

const motor = createMachine(
    3,
    "Electric Motor",
    "Drive System",
    "Stopped",
    15000,
    40000
);

const bearing = createMachine(
    4,
    "Bearing",
    "Rotating Component",
    "Running",
    8000,
    25000
);

// Store all machines in an array

const machines = [
    conveyor,
    gearbox,
    motor,
    bearing
];