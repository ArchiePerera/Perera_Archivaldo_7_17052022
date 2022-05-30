<script>
export default {
    name: "Navbar"
}
</script>


<template>
    <header class="p-3 text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <router-link to="/home" class="nav-link px-2 text-secondary"><img class="mb-1 d-block mx-auto"
                                src="../assets/groupomania-white.svg" alt="logo groupomania" width="200"></router-link>
                    </li>
                </ul>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-color">Signin</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400&display=swap');

html, body {
    font-family: 'Lato', Tahoma, sans-serif;
}

.btn-color {
  background-color: #FD2D01;
  color: white;
}

header {
    background-color: #4E5166;
}
</style>