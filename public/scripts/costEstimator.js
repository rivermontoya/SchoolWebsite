//design inspired by the cost estimator by Oracle here: https://www.oracle.com/cloud/costestimator.html

"use strict";
/*    
      JavaScript for inserting Cost Estimator table
      Author: Elisabeth Ryder
      Date:   3/5/23

      Filename: costEstimator.js
*/

/*------- COST ESTIMATOR IMPLEMENTATION -------*/
//on window load, run loadMenu function
window.onload = function loadCostEstTable() {
    //get the ul element by its id
    var CostEst = document.getElementById("addCostEstTable");
    //add the header row
    CostEst.innerHTML = "<table><tr><th>Service Name</th><th>Description</th><th>Notes</th><th>Cost</th></tr></table>";
    //add and manipulate the form...?

}
//NOTE: If used, the " character must be escaped for the innerHTML script to work properly.