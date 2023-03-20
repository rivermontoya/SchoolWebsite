"use strict";
/*    
      JavaScript for menu and footer
      Author: Elisabeth Ryder
      Date:   2/5/23

      Filename: imports.js
*/

/*------- NAV BAR IMPLEMENTATION -------*/
//on window load, run loadMenu function
window.onload = function loadMenu() {
//get the ul element by its id
var Menu = document.getElementById("addMenuLinks");
//add all links to site as needed
Menu.innerHTML = "<a href=\"index.html\">Home</a>";
Menu.innerHTML += "<a href=\"services.html\">Services</a>";
Menu.innerHTML += "<a href=\"about.html\">About</a>";
Menu.innerHTML += "<a href=\"costestimator.html\">Cost Estimator</a>";
Menu.innerHTML += "<a href=\"contact.html\">Contact</a>";
Menu.innerHTML += "<button class=\"topnav-right\" onclick=\"openForm()\">Login</button>";

var LoginForm = document.getElementById("addLoginForm");
LoginForm.innerHTML += "<div class=\"form-popup\" id=\"myForm\"><form action=\"/action_page.php\" class=\"form-container\"><h1>Login</h1><label for=\"email\"><b>Email</b></label><input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required><label for=\"psw\"><b>Password</b></label><input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required><button type=\"submit\" class=\"btn\">Login</button><button type=\"button\" class=\"btn cancel\" onclick=\"closeForm()\">Close</button></form>";
/*------- FOOTER IMPLEMENTATION -------*/
//get p element by id for footer
var Footer = document.getElementById("addFooter");

//working on centering footer better... styled with footer img
//in main.css
Footer.innerHTML = "<a href=\"index.html\"><img src=\"images/favicon.svg\" alt=\"favicon\"></a>";
Footer.innerHTML += "<p>WebDevs</p>";
Footer.innerHTML += "<p id=\"footDetails\">Developed by Team 1</p>";
Footer.innerHTML += "<p><a href=\"contact.html\">Contact Us for a free Quote</a></p>";
}
//NOTE: The " character must be escaped for the script to work properly.