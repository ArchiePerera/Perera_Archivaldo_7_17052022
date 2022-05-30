<script>
export default {
    name: "Wall"
}
</script>

<template>
<div class="container-sm mt-5">
    <div class="form">
        <label for="floatingTextarea">Publier un post</label>
        <div contenteditable class="form-control" id="floatingTextarea"></div>
    </div>
    <div class="d-flex">
        <button type="button" class="btn btn-color mt-2 ms-auto">Publier</button>
        <label for="file-input" class="btn btn-primary mt-2">Upload image</label>
        <input id="file-input" type="file" />
    </div>
    <hr class="dropdown-divider mt-4">
</div>

<div class="container">
    <div class="row main-row">
        <div class="col-lg4 col-md-12 col-sm-12">
            <div class="blog-img">
                <img src="" alt="publication visuelle">
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">
                            <fa icon="heart" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </div>
</div>
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

.btn-color:hover {
  background-color: #ec2a04;
  color: white;
}

.form-control {
    opacity: .5;
}

.form-control:focus {
    opacity: 1;
}

input {
    display: none;
}

label {
    color: black; 
    margin-left: 10px;
}

</style>