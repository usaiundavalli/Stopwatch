function Clickthebutton(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  var data = document.getElementById("pqr");

  console.log(password);
  var object = {
    name: name,
    email: email,
    password: password,
  };
  localStorage.setItem("object", JSON.stringify(object));

  data.innerHTML = localStorage.getItem("object");

  console.log(object);
}
