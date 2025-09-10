const form = document.querySelector("form");
const submitButton = document.getElementById("submit");

// Store all submissions here
const list = [];

function subData(event) {
  event.preventDefault(); // stop page reload

  // get the current values at the moment of click
  const name = document.getElementById("Name").value;
  const email = document.getElementById("Email").value;
  const phone = document.getElementById("mobilenumber").value;
  const message = document.getElementById("msgfield").value;

  // put this submission into an array
  const data = [name, email, phone, message];

  // push into the big list
  list.push(data);

  console.log(list); // check stored submissions
}

submitButton.addEventListener("click", subData);
