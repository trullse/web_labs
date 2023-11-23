// Functional style

function Medicine(name, price) {
    this.name = name;
    this.price = price;
}

Medicine.prototype.getPrice = function() {
    return this.price;
}

Medicine.prototype.setPrice = function(newPrice) {
    this.price = newPrice;
}

function DrugMedicine(name, price, allowance, drugContentMg) {
    Medicine.call(this, name, price);
    this.allowance = allowance;
    this.drugContentMg = drugContentMg;
}

DrugMedicine.prototype = Object.create(Medicine.prototype);
DrugMedicine.prototype.constructor = Medicine;

DrugMedicine.prototype.showAllowance = function() {
    return 'Sale allowed when recipe was given: ' + this.allowance;
}

DrugMedicine.prototype.setAllowance = function(newAllowance) {
    this.allowance = newAllowance;
}

DrugMedicine.prototype.isHighDrugContent = function() {
    if (this.drugContentMg > 100) {
        return true;
    }
    return false;
}

DrugMedicine.prototype.getDrugContentMg = function() {
    return this.drugContentMg;
}

DrugMedicine.prototype.setDrugContentMg = function(newContent) {
    this.drugContentMg = newContent;
}

// Using class

class Medicine2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(newPrice) {
        this.price = newPrice;
    }
}

function useWarning(target, key, descriptor) {
    const originalGetter = descriptor.get;

    descriptor.get = function () {
        return(`Sale of ${this.name} is allowed when recipe was given: ${originalGetter.call(this)}`);
    };
    return descriptor;
}

class DrugMedicine2 extends Medicine2 {
    constructor(name, price, allowance, drugContentMg) {
        super(name, price);
        this.allowance = allowance;
        this.drugContentMg = drugContentMg;
    }

    get getDrugContentMg() {
        return this.drugContentMg;
    }

    set setDrugContentMg(newContent) {
        this.drugContentMg = newContent;
    }

    //@useWarning
    get getAllowance() {
        return this.allowance;
    }

    set setAllowance(newAllowance) {
        this.allowance = newAllowance;
    }

    isHighDrugContent() {
        if (this.drugContentMg > 100) {
            return true;
        }
        return false;
    }
}

// Initialization 

let sinupret = new DrugMedicine('Sinupret', 100, 'everyone', 0);
let antibiotik = new DrugMedicine2('antibiotik', 500, 'very ill people', 100);

function changeAllowance1() {
    let allowanceInput = document.getElementById('allowanceInput1').value;
    sinupret.setAllowance(allowanceInput);
}

function changeAllowance2() {
    let allowanceInput = document.getElementById('allowanceInput2').value;
    antibiotik.setAllowance = allowanceInput;
}

function showAllowance1() {
    let out = document.getElementById('classes-output');
    let div = document.createElement('div');
    div.textContent = sinupret.showAllowance();
    out.appendChild(div);
}

function showAllowance2() {
    let out = document.getElementById('classes-output');
    let div = document.createElement('div');
    div.textContent = antibiotik.getAllowance;
    out.appendChild(div);
}