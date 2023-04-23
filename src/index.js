import { loadHomePage } from "./load-home-page.js";
import loadMenuPage from "./load-menu-page.js";
import loadContactPage from "./load-contact-page.js";

const content = document.querySelector("#content");
const list = document.querySelector("#navbar");

function cleanPage() {
  console.log("cleaning up");
  content.innerHTML = "";
}

function loadFooter() {
  // Create footer
  const footer = document.querySelector("#footer");
  const footerText = document.createElement("p");
  footerText.innerHTML =
    "&copy; 2023 The Best Restaurant in Town. All rights reserved.";
  footer.appendChild(footerText);
}

function loadNav() {
  const tabs = ["Home", "Menu", "Contact"];
  const functions = {
    loadHomePage,
    loadMenuPage,
    loadContactPage,
  };

  // Loop through the array and create a new p element for each item
  for (let i = 0; i < tabs.length; i++) {
    // Create a new p element
    const liElement = document.createElement("li");

    // Add text content to the p element
    const textNode = document.createTextNode(tabs[i]);
    liElement.appendChild(textNode);
    liElement.setAttribute("id", tabs[i].toLowerCase());
    const functionName = `load${tabs[i]}Page`;

    liElement.addEventListener("click", () => {
      cleanPage();
      // Load the function dynamically based on the string using bracket notation
      const fn = functions[functionName];
      if (typeof fn === "function") {
        fn();
      } else {
        console.error(`Function ${functionName} not found`);
      }
    });

    // Add the p element to the document
    list.appendChild(liElement);
  }
}

loadNav();
loadHomePage();
loadFooter();
