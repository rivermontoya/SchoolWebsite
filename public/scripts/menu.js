"use strict";
/*    
      JavaScript for menu
      Author: Elisabeth Ryder
      Date:   2/5/23

      Filename: menu.js
*/

/*------- NAV BAR IMPLEMENTATION -------*/
//on window load, run loadMenu function
window.onload = function loadMenu() {
//get the ul element by its id
var Menu = document.getElementById("addMenuLinks");
//add all links to site as needed
Menu.innerHTML = "<a href=\"index.html\">Home</a>";
Menu.innerHTML += "<a href=\"services.html\">Services</a>";
Menu.innerHTML += "<a href=\"contact.html\">Contact</a>";
}
    //NOTE: The " character must be escaped for the script to work properly.