/*
==========================================
APPLICATION LOGIC
------------------------------------------
This file displays machine data on the
webpage and handles user interactions.
==========================================
*/

// Get HTML elements
const machineContainer = document.getElementById("machineContainer");
const maintenanceTable = document.getElementById("maintenanceTable");
const loadMachinesBtn = document.getElementById("loadMachinesBtn");

/*
==========================================
APPLICATION LOGIC
==========================================
*/
// Display all machines
function displayMachines() {

    machineContainer.innerHTML = "";

    machines.forEach(machine => {

        const card = document.createElement("div");
        card.classList.add("machine-card");

        card.innerHTML = `

            <h2>${machine.name}</h2>

            <p><strong>Type:</strong> ${machine.type}</p>

            <p>
                <strong>Status:</strong>
                <span class="status">${machine.status}</span>
            </p>

            <p>
                <strong>Runtime:</strong>
                <span class="runtime">
                    ${machine.getFormattedTime()}
                </span>
            </p>

            <p>
                <strong>Running Hours:</strong>
                <span class="hours">
                    ${machine.runningHours}
                </span> /
                ${machine.maxRunningHours} hrs
            </p>

            <p>
                <strong>Health:</strong>
                <span class="health">
                    ${machine.getHealthPercentage()}%
                </span>
            </p>

            <progress
                class="progress"
                value="${machine.runningHours}"
                max="${machine.maxRunningHours}">
            </progress>

            <br><br>

            <button class="start-btn">Start</button>

            <button class="stop-btn">Stop</button>

            <button class="reset-btn">Reset</button>

        `;

        // Select Elements
        const status = card.querySelector(".status");
        const runtime = card.querySelector(".runtime");
        const hours = card.querySelector(".hours");
        const health = card.querySelector(".health");
        const progress = card.querySelector(".progress");

        const startBtn = card.querySelector(".start-btn");
        const stopBtn = card.querySelector(".stop-btn");
        const resetBtn = card.querySelector(".reset-btn");

        // Refresh card every second
        function updateCard() {

            status.textContent = machine.status;

            runtime.textContent = machine.getFormattedTime();

            hours.textContent = machine.runningHours;

            health.textContent =
                machine.getHealthPercentage() + "%";

            progress.value = machine.runningHours;

        }

        // Start
        startBtn.addEventListener("click", () => {

            machine.start();

            updateCard();

        });

        // Stop
        stopBtn.addEventListener("click", () => {

            machine.stop();

            updateCard();

        });

        // Reset
        resetBtn.addEventListener("click", () => {

            machine.reset();

            updateCard();

        });

        // Live Update
        setInterval(updateCard, 1000);

        machineContainer.appendChild(card);

    });

}


// Load machines when button is clicked
loadMachinesBtn.addEventListener("click", displayMachines);