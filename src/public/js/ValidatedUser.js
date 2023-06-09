
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

      const authUser = await fetch(`http://localhost:3000/session?email=${email}&password=${password}`);

      if (authUser.status === 404) {
        setError("email", "Email not found");
      }

      if (authUser.status === 401) {
        setError("password", "Incorrect password");
      }

      if (authUser.status === 500) {
        setError("password", "Internal server error");
      }

      if (authUser.status === 400) {
        setError("email", "Email not found");
      }

      if (authUser === undefined) {
        setError("email", "Email not found");
      }

      // Pega o resultado da requisição e salva na variável result em formato json
      const resultAuth = await authUser.json();
      const token = resultAuth.token;
      const id = resultAuth.getEmail.id;
      const name = resultAuth.getEmail.name;
      const ResultEmail = resultAuth.getEmail.email;

      localStorage.setItem('resulttoken', token);
      localStorage.setItem('resultid', id);
      localStorage.setItem('name', name);
      localStorage.setItem('ResultEmail', ResultEmail);

      // Faz a requisição para o backend e salva na variável response
      // console.log(resultAuth);
      const response = await fetch(`http://localhost:3000/searchUser?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pega o resultado da requisição e salva na variável result em formato json
      const result = await response.json();
      const user = result;

      if (user == undefined) {

        setError("email", "email not found");

      } 

      if (resultAuth.auth === false) {
        console.log(user.password, password);
        setError("password", "Incorrect password");

      }
      else if (user.email === email && resultAuth.auth === true) {

        console.log("teste");

        if (email && password) {
          email.value = "";
          password.value = "";
        }

        setTimeout(function () {
          window.location.href = `/initial/${user.id}?name=${user.name}?email=${user.email}`;
        }, 1000);
      } else {
        console.log("nao passou");
      }
      
    } catch (error) {
      console.log(error);
    }
  }
}
