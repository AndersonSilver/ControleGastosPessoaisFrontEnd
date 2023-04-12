async function signIn(){
  
  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;

  const validate = { email, password };
  let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationEmail = regexEmail.test(validate.email);

  const errors = {
    email: false,
    password: false,
  };

  function hasErrors() {
    return Object.values(errors).some((error) => error === true);
  }

  function setError(field, message) {
    if (!errors[field]) {
      //${field.charAt(0).toUpperCase() + field.slice(1)}
      const errorDiv = document.getElementById("returnErrorsLogin");
      const pError = document.createElement("p");
      pError.innerHTML = message;
      pError.className = "error";
      errorDiv.appendChild(pError);
      errors[field] = true;
    }
  }

  const errorDivs = document.querySelectorAll(".returnErrorsLogin");
  errorDivs.forEach((div) => {
    div.innerHTML = "";
  });

  if (email.trim() === "") {
    setError("email", "Enter a email");
  } else if (password.trim() === "") {
    setError("password", "Enter a password");
  } else if (!validationEmail) {
    setError("email", "Enter a valid email");
  } else if (hasErrors()) {
    return;
  } else {
    try {
      
      const response = await fetch(
        `http://localhost:3000/searchUser?email=${email}`
      );
      const result = await response.json();
      const user = result[0];

      if (user == undefined) {

        setError("email", "email not found");

      } 
      else if (user.password != password) {
        // else if (user.password != password) {

        console.log(user.password, password);
        setError("password", "Incorrect password");

      } 
      else if ((user.email === email) && (user.password === password)) {

        console.log("teste");

        if (email && password) {
          email.value = "";
          password.value = "";
        }

        setTimeout(function () {
          window.location.href = `/initial/${user.id}?name=${user.name}`;
        }, 1000);
      } else {
        console.log("nao passou");
      }
    } catch (error) {
      console.log(error);
    }
  }
}