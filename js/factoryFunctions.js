/*
==========================================
FACTORY FUNCTIONS
------------------------------------------
This file contains Factory Functions used
to create factory machine objects.
==========================================
*/

function createMachine(
    id,
    name,
    type,
    status,
    runningHours,
    maxRunningHours
) {

    return {

        // Properties
        id,
        name,
        type,
        status,
        runningHours,
        maxRunningHours,

        // Live Timer
        hours: 0,
        minutes: 0,
        seconds: 0,

        timer: null,

        // Start Machine
        start() {

            if (this.status === "Running") return;

            this.status = "Running";

            this.startTimer();

        },

        // Stop Machine
        stop() {

            this.status = "Stopped";

            this.stopTimer();

        },

        // Reset Machine
        reset() {

            this.stopTimer();

            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;

        },

        // Start Live Timer
        startTimer() {

            if (this.timer) return;

            this.timer = setInterval(() => {

                this.seconds++;

                // Every 60 seconds = 1 minute
                if (this.seconds >= 60) {

                    this.seconds = 0;
                    this.minutes++;

                    // Simulation:
                    // Every minute equals one running hour
                    this.runningHours++;

                }

                // Every 60 minutes = 1 hour
                if (this.minutes >= 60) {

                    this.minutes = 0;
                    this.hours++;

                }

                // Stop machine if it reaches maximum hours
                if (this.runningHours >= this.maxRunningHours) {

                    this.status = "Maintenance Required";

                    this.stopTimer();

                    alert(`${this.name} requires maintenance!`);

                }

            }, 1000);

        },

        // Stop Timer
        stopTimer() {

            clearInterval(this.timer);

            this.timer = null;

        },

        // Format Time
        getFormattedTime() {

            const h = String(this.hours).padStart(2, "0");
            const m = String(this.minutes).padStart(2, "0");
            const s = String(this.seconds).padStart(2, "0");

            return `${h}:${m}:${s}`;

        },

        // Calculate Health
        getHealthPercentage() {

            return Math.round(
                ((this.maxRunningHours - this.runningHours)
                / this.maxRunningHours) * 100
            );

        }

    };

}