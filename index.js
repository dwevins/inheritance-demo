// Vehicle class
// generic class defining basic data/methods for any type of vehicle

class Vehicle {
    constructor(vMake = 'no make set', vModel = 'no model set', vPrice = 'no price set') {
        this.make = vMake;
        this.model = vModel;
        this.price = vPrice;
    }

    getMake() {
        return this.make;
    }

    getModel() {
        return this.model;
    }

    getPrice() {
        return this.price;
    }

    getMakeAndModel() {
        return this.make && this.model ? `${this.make} ${this.model}` : '';
    }

    getFormattedPrice() {
        return `$${this.price ? '$' : ''}${this.price}`;
    }

}

// Car class
// defines data and methods specific to a car
// extends (inherits from) Vehicle class
class Car extends Vehicle {
    constructor(cMake, cModel, cPrice, cNumCylinders, cDrivetrain, cEnginePlacement) {
        super(cMake, cModel, cPrice);
        this.numCylinders = cNumCylinders;
        this.drivetrain = cDrivetrain;
        this.enginePlacement = cEnginePlacement;
    }

    getNumCylinders() {
        return this.numCylinders;
    }

    getDrivetrain() {
        return this.drivetrain;
    }

    getEngineDisplacement() {
        return this.enginePlacement;
    }
}

// Boat class
// defines data and methods specific to a boat
// extends (inherits from) Vehicle class
class Boat extends Vehicle {
    constructor(bMake, bModel, bPrice, bIsInboard, bDeckLength) {
        super(bMake, bModel, bPrice);
        this.isInboard = bIsInboard;
        this.deckLength = bDeckLength;
    }

    isInboard() {
        return this.isInboard;
    }

    deckLnegth() {
        return this.deckLength;
    }
}

// Main Program
// Ude this block to explore classes and inheritance!
function run() {
    // Vehicle class instance
    const justVehicle = new Vehicle('ferd', 'fteen thousand', 1000);

    // Car class instance
    const actualCar = new Car('Audi', 'R8', 140000, 10, 'awd', 'rear-mid');

    // Boat class instance
    const actualBoat = new Boat('Sun Tracker', 'Bass Buggy', 13000, true, 85);

    // TODO:
    // log vehicle class instance
    // log car class instance
    // log boat class instance
    // call car methods on car
    // call boat methods on boat
    // call vehicle methods on each instance
    // call car method on boat
    // call boat method on car
    
}

// When DOM loads, run program
window.onload = () => run();