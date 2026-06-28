/*
==========================================
ES6 CLASSES
------------------------------------------
This file contains the ES6 classes used
in the Smart Factory Management System.
==========================================
*/

// Employee Class

class Employee {

    constructor(id, name, department, position) {

        this.id = id;
        this.name = name;
        this.department = department;
        this.position = position;

    }

    displayInfo() {

        return `
            Employee ID: ${this.id}
            Name: ${this.name}
            Department: ${this.department}
            Position: ${this.position}
        `;

    }

}


// Maintenance Record Class

class MaintenanceRecord {

    constructor(machineName, date, technician, status) {

        this.machineName = machineName;
        this.date = date;
        this.technician = technician;
        this.status = status;

    }

    maintenanceInfo() {

        return `
            Machine: ${this.machineName}
            Date: ${this.date}
            Technician: ${this.technician}
            Status: ${this.status}
        `;

    }

}