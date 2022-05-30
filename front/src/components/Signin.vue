<script>
    export default {
        name: 'Signin',
    }
</script>

<template>
<main class="form-signin">
  <form>
    <img class="mb-4 d-block mx-auto" src="../assets/groupomania-black.svg" alt="logo groupomania" width="300">
    <h1 class="h4 mb-3 fw-normal text-center">Enregistrez-vous</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Adresse Email</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Mot de passe</label>
    </div>

    <button class="w-100 btn btn-lg btn-color" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-center text-muted">&copy; Groupomania–2022</p>
  </form>
</main>


</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400&display=swap');

html, body {
  font-family: 'Lato', Tahoma, sans-serif;
  height: 100%;
}

body {
  align-items: center;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.btn-color {
  background-color: #FD2D01;
  color: white;
}

.form-signin {
  width: 100%;
  max-width: 500px;
  padding: 15px;
  padding-top: 25vh;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: 10px;
  border-color: #FFD7D7;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-color: #FFD7D7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

label {
  color: red;
  opacity: .4;
}

@media (max-width: 768px) {
  .form-signin {
  padding-top: 10vh;
}
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
