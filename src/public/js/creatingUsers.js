async function signUp() {
   const name = document.getElementById("creatingUsername").value;
   const email = document.getElementById("creatingEmail").value;
   const password = document.getElementById("creatingPassword").value;
   const repeatPassword = document.getElementById("creatingRepeatPassword").value;

   const validate = { email, password };
   let regexPassword = /^(?=.*\d)(?=.*[{}[\],$^?~=+\-_/*\-+.|@])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z{}[\],$^?~=+\-_/*\-+.|@]{8,}$/;
   let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const validationEmail = regexEmail.test(validate.email);
   const validationPassword = regexPassword.test(validate.password);

   const errors = {
      name: false,
      email: false,
      password: false,
      repeatPassword: false,
   };

   function hasErrors() {
      return Object.values(errors).some((error) => error === true);
   }

   function setError(field, message) {
      if (!errors[field]) {
      const errorDiv = document.getElementById(`returnErrorsScreenCreateUsers`);
      const pError = document.createElement("p");
      pError.innerHTML = message;
      pError.className = "error";
      errorDiv.appendChild(pError);
      errors[field] = true;
      }
   }

   const errorDivs = document.querySelectorAll(".returnErrorsScreenCreateUsers");
   errorDivs.forEach((div) => {
      div.innerHTML = "";
   });

   if (name.trim() === ""){setError("name", "Enter a name");}

   if (email.trim() === ""){
      if (hasErrors()) {
      return;
      }
      setError("email", "Enter a email");
   } else if (!validationEmail) {
      if (hasErrors()) {
      return;
      }
      setError("email", "Enter a valid email");
   }

   if (password.trim() === "") {
      if (hasErrors()) {
      return;
      }
      setError("password", "Enter a password");
   } else if (!validationPassword) {
      if (hasErrors()) {
      return;
      }
      setError("password", "Enter a valid password");
   } else if (repeatPassword.trim() === "") {
      if (hasErrors()) {
      return;
      }
      setError("repeatPassword", "please repeat the password");
   }

   if (hasErrors()) {
      return;
   } else {
      try {
      const response = await fetch(`http://localhost:3000/createUser`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name,
            email,
            password,
         }),
      });

      if (response.status === 409) {
         setError("email", "Email Already exists!");
      } else {
         if (name && email && password && password) {
            name.value = "";
            email.value = "";
            password.value = "";
            password.value = "";
         }

         setTimeout(function () {
            window.location.href = "/login";
         }, 1000);
      }

      } catch (error) {
         console.log(error);
      }
   }
}
