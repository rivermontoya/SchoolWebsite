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

//get p element by id for footer
var Footer = document.getElementById("addFooter");

//working on centering footer better... styled with footer img
//in main.css
Footer.innerHTML = "<img src=\"images/favicon.svg\" alt=\"favicon\">";
Footer.innerHTML += "<p>WebDevs</p>";
}
//NOTE: The " character must be escaped for the script to work properly.