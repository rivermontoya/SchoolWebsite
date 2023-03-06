"use strict";
//design inspired by the cost estimator by Oracle here: https://www.oracle.com/cloud/costestimator.html

let table = document.getElementById("costTable");

// Define prices here

function addRow() {
    // Get values from form
    const item = document.getElementById("formService");
    const quantity = document.getElementById("formQuantity");
    const price = getPrice(quantity, 350);
    //Use constructor
    ServiceItem(item, quantity, price);
}

function getPrice(quantity, itemPrice) {
    return quantity * itemPrice;
}

// Constructor for service items
function ServiceItem(item, quantity, price) {
    this.item = item;
    this.quantity = quantity;
    this.price = price;
}