const submit = document.getElementById("submitBtn");

submit.addEventListener("click", submitForm);

function submitForm() {
  let name = document.getElementById("inputName");
  let email = document.getElementById("inputEmail");
  let message = document.getElementById("inputMessage");

  let nameData = name.value;
  let emailData = email.value;
  let messageData = message.value;
  console.log("name: ", nameData);
  console.log("email: ", emailData);
  console.log("message: ", messageData);
}
