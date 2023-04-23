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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbG9hZC1jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2xvYWQtaG9tZS1wYWdlLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9sb2FkLW1lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgLy8gQ3JlYXRlIG1haW4gc2VjdGlvblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgLy8gQ3JlYXRlIGhlYWRpbmdcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIC8vIENyZWF0ZSBwYXJhZ3JhcGhcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9XG4gICAgXCJGaWxsIG91dCB0aGUgZm9ybSBiZWxvdyB0byBnZXQgaW4gdG91Y2ggd2l0aCB1cy4gV2UnbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuXCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuICAvLyBDcmVhdGUgZm9ybVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgLy8gQ3JlYXRlIG5hbWUgaW5wdXQgZmllbGRcbiAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XG4gIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmFtZVwiKTtcbiAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIGVtYWlsIGlucHV0IGZpZWxkXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuXG4gIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVtYWlsXCIpO1xuICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBwaG9uZSBpbnB1dCBmaWVsZFxuICBjb25zdCBwaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwaG9uZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInBob25lXCIpO1xuICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZTpcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZUxhYmVsKTtcblxuICBjb25zdCBwaG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwaG9uZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZWxcIik7XG4gIHBob25lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwaG9uZVwiKTtcbiAgcGhvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicGhvbmVcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVJbnB1dCk7XG5cbiAgLy8gQ3JlYXRlIG1lc3NhZ2UgdGV4dGFyZWFcbiAgY29uc3QgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBtZXNzYWdlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVzc2FnZVwiKTtcbiAgbWVzc2FnZUxhYmVsLnRleHRDb250ZW50ID0gXCJNZXNzYWdlOlwiO1xuICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2VMYWJlbCk7XG5cbiAgY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlXCIpO1xuICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm1lc3NhZ2VcIik7XG4gIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXQpO1xuXG4gIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNlbmRcIjtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgaGVhZGVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBoZWFkZXJJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJyZXN0YXVyYW50LWltYWdlLmpwZ1wiKTtcbiAgaGVhZGVySW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUmVzdGF1cmFudCBJbWFnZVwiKTtcblxuICBjb25zdCBoZWFkZXJIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICBcIldlbGNvbWUgdG8gVGhlIEJlc3QgUmVzdGF1cmFudCBpbiBUb3duXCJcbiAgKTtcbiAgaGVhZGVySDEuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJJbWFnZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJIMSk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgY29uc3QgcGFyYWdyYXBoVGV4dCA9IFtcbiAgICBcIk91ciByZXN0YXVyYW50IGlzIGtub3duIGZvciBpdHMgZGVsaWNpb3VzIGZvb2QsIGV4Y2VsbGVudCBzZXJ2aWNlLCBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZS4gV2UgdXNlIG9ubHkgdGhlIGZyZXNoZXN0IGluZ3JlZGllbnRzIGFuZCBvdXIgY2hlZnMgY3JlYXRlIG1vdXRoLXdhdGVyaW5nIGRpc2hlcyB0aGF0IHdpbGwgbGVhdmUgeW91IHdhbnRpbmcgbW9yZS5cIixcbiAgICBcIk91ciBleHRlbnNpdmUgbWVudSBmZWF0dXJlcyBhIHZhcmlldHkgb2Ygb3B0aW9ucywgZnJvbSBjbGFzc2ljIGZhdm9yaXRlcyB0byBleGNpdGluZyBuZXcgZGlzaGVzIHRoYXQgYXJlIHN1cmUgdG8gcGxlYXNlLiBXaGV0aGVyIHlvdSdyZSBpbiB0aGUgbW9vZCBmb3IgYSBoZWFydHkgc3RlYWsgb3IgYSBsaWdodCBzYWxhZCwgd2UgaGF2ZSBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lLlwiLFxuICAgIFwiSm9pbiB1cyBmb3IgbHVuY2ggb3IgZGlubmVyIGFuZCBleHBlcmllbmNlIHRoZSBiZXN0IHRoYXQgb3VyIHJlc3RhdXJhbnQgaGFzIHRvIG9mZmVyLiBXZSBsb29rIGZvcndhcmQgdG8gc2VydmluZyB5b3UhLlwiLFxuICBdO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYXJyYXkgYW5kIGNyZWF0ZSBhIG5ldyBwIGVsZW1lbnQgZm9yIGVhY2ggaXRlbVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFncmFwaFRleHQubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgcCBlbGVtZW50XG4gICAgY29uc3QgcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIC8vIEFkZCB0ZXh0IGNvbnRlbnQgdG8gdGhlIHAgZWxlbWVudFxuICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocGFyYWdyYXBoVGV4dFtpXSk7XG4gICAgcEVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuXG4gICAgLy8gQWRkIHRoZSBwIGVsZW1lbnQgdG8gdGhlIGRvY3VtZW50XG4gICAgbWFpbi5hcHBlbmRDaGlsZChwRWxlbWVudCk7XG4gIH1cbn1cbiIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IG1lbnUgPSBbXG4gIHtcbiAgICBjYXRlZ29yeTogXCJBcHBldGl6ZXJzXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJDcmlzcHkgQ2FsYW1hcmlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnJpZWQgY2FsYW1hcmkgd2l0aCBtYXJpbmFyYSBzYXVjZVwiLFxuICAgICAgICBwcmljZTogXCIkOS45OVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJHYXJsaWMgQnJlYWRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiVG9hc3RlZCBJdGFsaWFuIGJyZWFkIHdpdGggZ2FybGljIGJ1dHRlclwiLFxuICAgICAgICBwcmljZTogXCIkNC45OVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJCcnVzY2hldHRhXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVG9hc3RlZCBicmVhZCB0b3BwZWQgd2l0aCBkaWNlZCB0b21hdG9lcywgZ2FybGljLCBhbmQgYmFzaWxcIixcbiAgICAgICAgcHJpY2U6IFwiJDYuOTlcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGNhdGVnb3J5OiBcIkVudHJlZXNcIixcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlNwYWdoZXR0aSBDYXJib25hcmFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3BhZ2hldHRpIHdpdGggYmFjb24sIGVnZywgYW5kIFBhcm1lc2FuIGNoZWVzZVwiLFxuICAgICAgICBwcmljZTogXCIkMTIuOTlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2hpY2tlbiBBbGZyZWRvXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdyaWxsZWQgY2hpY2tlbiB3aXRoIGZldHR1Y2NpbmUgYW5kIEFsZnJlZG8gc2F1Y2VcIixcbiAgICAgICAgcHJpY2U6IFwiJDE0Ljk5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkxhc2FnbmFcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJMYXllcnMgb2YgcGFzdGEgd2l0aCBncm91bmQgYmVlZiwgcmljb3R0YSwgYW5kIG1venphcmVsbGFcIixcbiAgICAgICAgcHJpY2U6IFwiJDEzLjk5XCIsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBjYXRlZ29yeTogXCJEZXNzZXJ0c1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiVGlyYW1pc3VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTGF5ZXJzIG9mIGNvZmZlZS1zb2FrZWQgbGFkeWZpbmdlcnMgYW5kIG1hc2NhcnBvbmUgY3JlYW1cIixcbiAgICAgICAgcHJpY2U6IFwiJDcuOTlcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2hlZXNlY2FrZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkNsYXNzaWMgTmV3IFlvcmstc3R5bGUgY2hlZXNlY2FrZSB3aXRoIGdyYWhhbSBjcmFja2VyIGNydXN0XCIsXG4gICAgICAgIHByaWNlOiBcIiQ2Ljk5XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkNob2NvbGF0ZSBDYWtlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiUmljaCBjaG9jb2xhdGUgY2FrZSB3aXRoIGxheWVycyBvZiBjaG9jb2xhdGUgZ2FuYWNoZSBhbmQgd2hpcHBlZCBjcmVhbVwiLFxuICAgICAgICBwcmljZTogXCIkOC45OVwiLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIG1lbnUuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNhdGVnb3J5SGVhZGVyLnRleHRDb250ZW50ID0gY2F0ZWdvcnkuY2F0ZWdvcnk7XG5cbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBpdGVtTGlzdC5jbGFzc0xpc3QuYWRkKFwiaXRlbS1saXN0XCIpO1xuXG4gICAgY2F0ZWdvcnkuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0tY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKFwiZGlzaC1uYW1lXCIpO1xuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG5cbiAgICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRpc2gtZGVzY3JpcHRpb25cIik7XG4gICAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuXG4gICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXByaWNlXCIpO1xuICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgICBpdGVtTGlzdC5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5SGVhZGVyKTtcbiAgICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTGlzdCk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGxvYWRIb21lUGFnZSB9IGZyb20gXCIuL2xvYWQtaG9tZS1wYWdlLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL2xvYWQtbWVudS1wYWdlLmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gXCIuL2xvYWQtY29udGFjdC1wYWdlLmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZiYXJcIik7XG5cbmZ1bmN0aW9uIGNsZWFuUGFnZSgpIHtcbiAgY29uc29sZS5sb2coXCJjbGVhbmluZyB1cFwiKTtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9vdGVyKCkge1xuICAvLyBDcmVhdGUgZm9vdGVyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vdGVyXCIpO1xuICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb3RlclRleHQuaW5uZXJIVE1MID1cbiAgICBcIiZjb3B5OyAyMDIzIFRoZSBCZXN0IFJlc3RhdXJhbnQgaW4gVG93bi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cIjtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xufVxuXG5mdW5jdGlvbiBsb2FkTmF2KCkge1xuICBjb25zdCB0YWJzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJDb250YWN0XCJdO1xuICBjb25zdCBmdW5jdGlvbnMgPSB7XG4gICAgbG9hZEhvbWVQYWdlLFxuICAgIGxvYWRNZW51UGFnZSxcbiAgICBsb2FkQ29udGFjdFBhZ2UsXG4gIH07XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBhcnJheSBhbmQgY3JlYXRlIGEgbmV3IHAgZWxlbWVudCBmb3IgZWFjaCBpdGVtXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgIC8vIENyZWF0ZSBhIG5ldyBwIGVsZW1lbnRcbiAgICBjb25zdCBsaUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG5cbiAgICAvLyBBZGQgdGV4dCBjb250ZW50IHRvIHRoZSBwIGVsZW1lbnRcbiAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRhYnNbaV0pO1xuICAgIGxpRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgbGlFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIHRhYnNbaV0udG9Mb3dlckNhc2UoKSk7XG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gYGxvYWQke3RhYnNbaV19UGFnZWA7XG5cbiAgICBsaUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsZWFuUGFnZSgpO1xuICAgICAgLy8gTG9hZCB0aGUgZnVuY3Rpb24gZHluYW1pY2FsbHkgYmFzZWQgb24gdGhlIHN0cmluZyB1c2luZyBicmFja2V0IG5vdGF0aW9uXG4gICAgICBjb25zdCBmbiA9IGZ1bmN0aW9uc1tmdW5jdGlvbk5hbWVdO1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBGdW5jdGlvbiAke2Z1bmN0aW9uTmFtZX0gbm90IGZvdW5kYCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgdGhlIHAgZWxlbWVudCB0byB0aGUgZG9jdW1lbnRcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpRWxlbWVudCk7XG4gIH1cbn1cblxubG9hZE5hdigpO1xubG9hZEhvbWVQYWdlKCk7XG5sb2FkRm9vdGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=