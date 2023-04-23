export default function createContactPage() {
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
