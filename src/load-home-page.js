export function loadHomePage() {
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
