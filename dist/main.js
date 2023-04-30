/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/load-contact-page.js":
/*!**********************************!*\
  !*** ./src/load-contact-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContactPage)
/* harmony export */ });
function createContactPage() {
  const content = document.querySelector("#content");

  // Create main section
  const main = document.createElement("main");
  content.appendChild(main);

  // Create heading
  const heading = document.createElement("h2");
  heading.textContent = "Contact Us";
  main.appendChild(heading);

  // Create paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent =
    "Fill out the form below to get in touch with us. We'll get back to you as soon as possible.";
  main.appendChild(paragraph);

  // Create form
  const form = document.createElement("form");
  main.appendChild(form);

  // Create name input field
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "Name:";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("required", "");
  form.appendChild(nameInput);

  // Create email input field
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.textContent = "Email:";
  form.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("required", "");
  form.appendChild(emailInput);

  // Create phone input field
  const phoneLabel = document.createElement("label");
  phoneLabel.setAttribute("for", "phone");
  phoneLabel.textContent = "Phone:";
  form.appendChild(phoneLabel);

  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "tel");
  phoneInput.setAttribute("id", "phone");
  phoneInput.setAttribute("name", "phone");
  form.appendChild(phoneInput);

  // Create message textarea
  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Message:";
  form.appendChild(messageLabel);

  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("id", "message");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("required", "");
  form.appendChild(messageInput);

  // Create submit button
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Send";
  form.appendChild(submitButton);
}


/***/ }),

/***/ "./src/load-home-page.js":
/*!*******************************!*\
  !*** ./src/load-home-page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
function loadHomePage() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");

  content.appendChild(header);

  const headerImage = document.createElement("img");
  headerImage.setAttribute("src", "restaurant-image.jpg");
  headerImage.setAttribute("alt", "Restaurant Image");

  const headerH1 = document.createElement("h1");
  const textNode = document.createTextNode(
    "Welcome to The Best Restaurant in Town"
  );
  headerH1.appendChild(textNode);

  header.appendChild(headerImage);
  header.appendChild(headerH1);

  const main = document.createElement("main");

  content.appendChild(main);

  const paragraphText = [
    "Our restaurant is known for its delicious food, excellent service, and inviting atmosphere. We use only the freshest ingredients and our chefs create mouth-watering dishes that will leave you wanting more.",
    "Our extensive menu features a variety of options, from classic favorites to exciting new dishes that are sure to please. Whether you're in the mood for a hearty steak or a light salad, we have something for everyone.",
    "Join us for lunch or dinner and experience the best that our restaurant has to offer. We look forward to serving you!.",
  ];

  // Loop through the array and create a new p element for each item
  for (let i = 0; i < paragraphText.length; i++) {
    // Create a new p element
    const pElement = document.createElement("p");

    // Add text content to the p element
    const textNode = document.createTextNode(paragraphText[i]);
    pElement.appendChild(textNode);

    // Add the p element to the document
    main.appendChild(pElement);
  }
}


/***/ }),

/***/ "./src/load-menu-page.js":
/*!*******************************!*\
  !*** ./src/load-menu-page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
const content = document.querySelector("#content");

const menu = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Crispy Calamari",
        description: "Fried calamari with marinara sauce",
        price: "$9.99",
      },
      {
        name: "Garlic Bread",
        description: "Toasted Italian bread with garlic butter",
        price: "$4.99",
      },
      {
        name: "Bruschetta",
        description:
          "Toasted bread topped with diced tomatoes, garlic, and basil",
        price: "$6.99",
      },
      {
        name: "Matabak",
        description: "Matabak is heel lekker en Yvoine wil dit graag",
        price: "$200",
      },
    ],
  },
  {
    category: "Entrees",
    items: [
      {
        name: "Spaghetti Carbonara",
        description: "Spaghetti with bacon, egg, and Parmesan cheese",
        price: "$12.99",
      },
      {
        name: "Chicken Alfredo",
        description: "Grilled chicken with fettuccine and Alfredo sauce",
        price: "$14.99",
      },
      {
        name: "Lasagna",
        description:
          "Layers of pasta with ground beef, ricotta, and mozzarella",
        price: "$13.99",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description: "Layers of coffee-soaked ladyfingers and mascarpone cream",
        price: "$7.99",
      },
      {
        name: "Cheesecake",
        description:
          "Classic New York-style cheesecake with graham cracker crust",
        price: "$6.99",
      },
      {
        name: "Chocolate Cake",
        description:
          "Rich chocolate cake with layers of chocolate ganache and whipped cream",
        price: "$8.99",
      },
    ],
  },
];

function createMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menu.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryHeader = document.createElement("h3");
    categoryHeader.textContent = category.category;

    const itemList = document.createElement("ul");
    itemList.classList.add("item-list");

    category.items.forEach((item) => {
      const itemContainer = document.createElement("li");
      itemContainer.classList.add("item-container");

      const itemName = document.createElement("div");
      itemName.classList.add("dish-name");
      itemName.textContent = item.name;

      const itemDescription = document.createElement("div");
      itemDescription.classList.add("dish-description");
      itemDescription.textContent = item.description;

      const itemPrice = document.createElement("div");
      itemPrice.classList.add("dish-price");
      itemPrice.textContent = item.price;

      itemContainer.appendChild(itemName);
      itemContainer.appendChild(itemDescription);
      itemContainer.appendChild(itemPrice);
      itemList.appendChild(itemContainer);
    });

    categoryContainer.appendChild(categoryHeader);
    categoryContainer.appendChild(itemList);
    menuContainer.appendChild(categoryContainer);
  });

  content.appendChild(menuContainer);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-home-page.js */ "./src/load-home-page.js");
/* harmony import */ var _load_menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-menu-page.js */ "./src/load-menu-page.js");
/* harmony import */ var _load_contact_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-contact-page.js */ "./src/load-contact-page.js");




const content = document.querySelector("#content");
const list = document.querySelector("#navbar");

function cleanPage() {
  content.innerHTML = "";
}

function loadFooter() {
  const footer = document.querySelector("#footer");
  const footerText = document.createElement("p");
  footerText.innerHTML =
    "&copy; 2023 The Best Restaurant in Town. All rights reserved.";
  footer.appendChild(footerText);
}

function loadNav() {
  const tabs = ["Home", "Menu", "Contact"];
  const functions = {
    loadHomePage: _load_home_page_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage,
    loadMenuPage: _load_menu_page_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    loadContactPage: _load_contact_page_js__WEBPACK_IMPORTED_MODULE_2__["default"],
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
(0,_load_home_page_js__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();
loadFooter();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsZ0VBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9sb2FkLWNvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbG9hZC1ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2xvYWQtbWVudS1wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDb250YWN0UGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgbWFpbiBzZWN0aW9uXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyBDcmVhdGUgaGVhZGluZ1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgLy8gQ3JlYXRlIHBhcmFncmFwaFxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID1cbiAgICBcIkZpbGwgb3V0IHRoZSBmb3JtIGJlbG93IHRvIGdldCBpbiB0b3VjaCB3aXRoIHVzLiBXZSdsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS5cIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG4gIC8vIENyZWF0ZSBmb3JtXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAvLyBDcmVhdGUgbmFtZSBpbnB1dCBmaWVsZFxuICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWU6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZVwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuYW1lXCIpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAvLyBDcmVhdGUgZW1haWwgaW5wdXQgZmllbGRcbiAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRW1haWw6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIHBob25lIGlucHV0IGZpZWxkXG4gIGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHBob25lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicGhvbmVcIik7XG4gIHBob25lTGFiZWwudGV4dENvbnRlbnQgPSBcIlBob25lOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHBob25lTGFiZWwpO1xuXG4gIGNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHBob25lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRlbFwiKTtcbiAgcGhvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBob25lXCIpO1xuICBwaG9uZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwaG9uZVwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZUlucHV0KTtcblxuICAvLyBDcmVhdGUgbWVzc2FnZSB0ZXh0YXJlYVxuICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG1lc3NhZ2VMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJtZXNzYWdlXCIpO1xuICBtZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lc3NhZ2U6XCI7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobWVzc2FnZUxhYmVsKTtcblxuICBjb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lc3NhZ2VcIik7XG4gIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibWVzc2FnZVwiKTtcbiAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIHN1Ym1pdCBidXR0b25cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU2VuZFwiO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCBoZWFkZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGhlYWRlckltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcInJlc3RhdXJhbnQtaW1hZ2UuanBnXCIpO1xuICBoZWFkZXJJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJSZXN0YXVyYW50IEltYWdlXCIpO1xuXG4gIGNvbnN0IGhlYWRlckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgIFwiV2VsY29tZSB0byBUaGUgQmVzdCBSZXN0YXVyYW50IGluIFRvd25cIlxuICApO1xuICBoZWFkZXJIMS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckltYWdlKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckgxKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICBjb25zdCBwYXJhZ3JhcGhUZXh0ID0gW1xuICAgIFwiT3VyIHJlc3RhdXJhbnQgaXMga25vd24gZm9yIGl0cyBkZWxpY2lvdXMgZm9vZCwgZXhjZWxsZW50IHNlcnZpY2UsIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlLiBXZSB1c2Ugb25seSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgYW5kIG91ciBjaGVmcyBjcmVhdGUgbW91dGgtd2F0ZXJpbmcgZGlzaGVzIHRoYXQgd2lsbCBsZWF2ZSB5b3Ugd2FudGluZyBtb3JlLlwiLFxuICAgIFwiT3VyIGV4dGVuc2l2ZSBtZW51IGZlYXR1cmVzIGEgdmFyaWV0eSBvZiBvcHRpb25zLCBmcm9tIGNsYXNzaWMgZmF2b3JpdGVzIHRvIGV4Y2l0aW5nIG5ldyBkaXNoZXMgdGhhdCBhcmUgc3VyZSB0byBwbGVhc2UuIFdoZXRoZXIgeW91J3JlIGluIHRoZSBtb29kIGZvciBhIGhlYXJ0eSBzdGVhayBvciBhIGxpZ2h0IHNhbGFkLCB3ZSBoYXZlIHNvbWV0aGluZyBmb3IgZXZlcnlvbmUuXCIsXG4gICAgXCJKb2luIHVzIGZvciBsdW5jaCBvciBkaW5uZXIgYW5kIGV4cGVyaWVuY2UgdGhlIGJlc3QgdGhhdCBvdXIgcmVzdGF1cmFudCBoYXMgdG8gb2ZmZXIuIFdlIGxvb2sgZm9yd2FyZCB0byBzZXJ2aW5nIHlvdSEuXCIsXG4gIF07XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBhcnJheSBhbmQgY3JlYXRlIGEgbmV3IHAgZWxlbWVudCBmb3IgZWFjaCBpdGVtXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYWdyYXBoVGV4dC5sZW5ndGg7IGkrKykge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBwIGVsZW1lbnRcbiAgICBjb25zdCBwRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgLy8gQWRkIHRleHQgY29udGVudCB0byB0aGUgcCBlbGVtZW50XG4gICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXJhZ3JhcGhUZXh0W2ldKTtcbiAgICBwRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG5cbiAgICAvLyBBZGQgdGhlIHAgZWxlbWVudCB0byB0aGUgZG9jdW1lbnRcbiAgICBtYWluLmFwcGVuZENoaWxkKHBFbGVtZW50KTtcbiAgfVxufVxuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbWVudSA9IFtcbiAge1xuICAgIGNhdGVnb3J5OiBcIkFwcGV0aXplcnNcIixcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNyaXNweSBDYWxhbWFyaVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcmllZCBjYWxhbWFyaSB3aXRoIG1hcmluYXJhIHNhdWNlXCIsXG4gICAgICAgIHByaWNlOiBcIiQ5Ljk5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkdhcmxpYyBCcmVhZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUb2FzdGVkIEl0YWxpYW4gYnJlYWQgd2l0aCBnYXJsaWMgYnV0dGVyXCIsXG4gICAgICAgIHByaWNlOiBcIiQ0Ljk5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkJydXNjaGV0dGFcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUb2FzdGVkIGJyZWFkIHRvcHBlZCB3aXRoIGRpY2VkIHRvbWF0b2VzLCBnYXJsaWMsIGFuZCBiYXNpbFwiLFxuICAgICAgICBwcmljZTogXCIkNi45OVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJNYXRhYmFrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk1hdGFiYWsgaXMgaGVlbCBsZWtrZXIgZW4gWXZvaW5lIHdpbCBkaXQgZ3JhYWdcIixcbiAgICAgICAgcHJpY2U6IFwiJDIwMFwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgY2F0ZWdvcnk6IFwiRW50cmVlc1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiU3BhZ2hldHRpIENhcmJvbmFyYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTcGFnaGV0dGkgd2l0aCBiYWNvbiwgZWdnLCBhbmQgUGFybWVzYW4gY2hlZXNlXCIsXG4gICAgICAgIHByaWNlOiBcIiQxMi45OVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDaGlja2VuIEFsZnJlZG9cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR3JpbGxlZCBjaGlja2VuIHdpdGggZmV0dHVjY2luZSBhbmQgQWxmcmVkbyBzYXVjZVwiLFxuICAgICAgICBwcmljZTogXCIkMTQuOTlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiTGFzYWduYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkxheWVycyBvZiBwYXN0YSB3aXRoIGdyb3VuZCBiZWVmLCByaWNvdHRhLCBhbmQgbW96emFyZWxsYVwiLFxuICAgICAgICBwcmljZTogXCIkMTMuOTlcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkRlc3NlcnRzXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJUaXJhbWlzdVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMYXllcnMgb2YgY29mZmVlLXNvYWtlZCBsYWR5ZmluZ2VycyBhbmQgbWFzY2FycG9uZSBjcmVhbVwiLFxuICAgICAgICBwcmljZTogXCIkNy45OVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDaGVlc2VjYWtlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiQ2xhc3NpYyBOZXcgWW9yay1zdHlsZSBjaGVlc2VjYWtlIHdpdGggZ3JhaGFtIGNyYWNrZXIgY3J1c3RcIixcbiAgICAgICAgcHJpY2U6IFwiJDYuOTlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2hvY29sYXRlIENha2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJSaWNoIGNob2NvbGF0ZSBjYWtlIHdpdGggbGF5ZXJzIG9mIGNob2NvbGF0ZSBnYW5hY2hlIGFuZCB3aGlwcGVkIGNyZWFtXCIsXG4gICAgICAgIHByaWNlOiBcIiQ4Ljk5XCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG5cbiAgbWVudS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY2F0ZWdvcnlIZWFkZXIudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5jYXRlZ29yeTtcblxuICAgIGNvbnN0IGl0ZW1MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGl0ZW1MaXN0LmNsYXNzTGlzdC5hZGQoXCJpdGVtLWxpc3RcIik7XG5cbiAgICBjYXRlZ29yeS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbS1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoXCJkaXNoLW5hbWVcIik7XG4gICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcblxuICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGlzaC1kZXNjcmlwdGlvblwiKTtcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG5cbiAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZChcImRpc2gtcHJpY2VcIik7XG4gICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICAgIGl0ZW1MaXN0LmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlIZWFkZXIpO1xuICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1MaXN0KTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5Q29udGFpbmVyKTtcbiAgfSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZEhvbWVQYWdlIH0gZnJvbSBcIi4vbG9hZC1ob21lLXBhZ2UuanNcIjtcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSBcIi4vbG9hZC1tZW51LXBhZ2UuanNcIjtcbmltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSBcIi4vbG9hZC1jb250YWN0LXBhZ2UuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmJhclwiKTtcblxuZnVuY3Rpb24gY2xlYW5QYWdlKCkge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb3RlclRleHQuaW5uZXJIVE1MID1cbiAgICBcIiZjb3B5OyAyMDIzIFRoZSBCZXN0IFJlc3RhdXJhbnQgaW4gVG93bi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xufVxuXG5mdW5jdGlvbiBsb2FkTmF2KCkge1xuICBjb25zdCB0YWJzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICBjb25zdCBmdW5jdGlvbnMgPSB7XG4gICAgbG9hZEhvbWVQYWdlLFxuICAgIGxvYWRNZW51UGFnZSxcbiAgICBsb2FkQ29udGFjdFBhZ2UsXG4gIH07XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBhcnJheSBhbmQgY3JlYXRlIGEgbmV3IHAgZWxlbWVudCBmb3IgZWFjaCBpdGVtXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBwIGVsZW1lbnRcbiAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAvLyBBZGQgdGV4dCBjb250ZW50IHRvIHRoZSBwIGVsZW1lbnRcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhYnNbaV0pO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgbGlFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhYnNbaV0udG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gYGxvYWQke3RhYnNbaV19UGFnZWA7XG5cbiAgICBsaUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsZWFuUGFnZSgpO1xuICAgICAgLy8gTG9hZCB0aGUgZnVuY3Rpb24gZHluYW1pY2FsbHkgYmFzZWQgb24gdGhlIHN0cmluZyB1c2luZyBicmFja2V0IG5vdGF0aW9uXG4gICAgICBjb25zdCBmbiA9IGZ1bmN0aW9uc1tmdW5jdGlvbk5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGdW5jdGlvbiAke2Z1bmN0aW9uTmFtZX0gbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgdGhlIHAgZWxlbWVudCB0byB0aGUgZG9jdW1lbnRcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XG4gIH1cbn1cblxubG9hZE5hdigpO1xubG9hZEhvbWVQYWdlKCk7XG5sb2FkRm9vdGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=