<script>
export default {
    name: "Wall",
};
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
        <hr class="dropdown-divider mt-4" />
    </div>

    <div class="container img-upload">
        <div class="row main-row p-2">
            <div class="col-lg-7 col-md-12 col-sm-12">
                <div class="blog-img">
                    <img src="../assets/20494859.webp" alt="publication visuelle" />
                </div>
            </div>
            <div class="col-lg-5 col-md-12 col-sm-12">
                <div class="blog-author">
                    <div class="blog-author_avatar">
                        <img src="../assets/user.png" alt="avatar utilisateur" />
                    </div>
                    <div class="blog-author_name">
                        <h3>Archivaldo Perera</h3>
                    </div>
                </div>
                <div class="blog-title">
                    <h2>Post Design</h2>
                </div>
                <div class="blog-date">
                    <span>Lundi</span>
                    <span> 30 mai 2022</span>
                </div>
                <div class="blog-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                        nisi fugiat repudiandae enim vero quasi dolorum explicabo quae.
                        Totam magnam modi illum blanditiis tempora repudiandae minima harum
                        obcaecati et inventore?
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 mb-2">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">
                            <fa icon="heart" />
                        </li>
                        <li><span>nombre like</span></li>
                    </ul>
                    <div class="d-flex">
                        <button type="button" class="btn btn-warning mt-2 ms-auto">Modifier</button>
                        <button type="button" class="btn btn-color mt-2">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container txt-upload">
        <div class="row main-row p-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="blog-author">
                    <div class="blog-author_avatar">
                        <img src="../assets/user.png" alt="avatar utilisateur" />
                    </div>
                    <div class="blog-author_name">
                        <h3>Archivaldo Perera</h3>
                    </div>
                </div>
                <div class="blog">
                    <div class="blog-title">
                        <h2>Post Design</h2>
                    </div>
                    <div class="blog-date">
                        <span>Lundi</span>
                        <span> 30 mai 2022</span>
                    </div>
                    <div class="blog-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
                            nisi fugiat repudiandae enim vero quasi dolorum explicabo quae.
                            Totam magnam modi illum blanditiis tempora repudiandae minima harum
                            obcaecati et inventore?
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 mb-2">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">
                            <fa icon="heart" />
                        </li>
                        <li><span>nombre like</span></li>
                    </ul>
                    <div class="d-flex">
                        <button type="button" class="btn btn-warning mt-2 ms-auto">Modifier</button>
                        <button type="button" class="btn btn-color mt-2">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400&display=swap");

html,
body {
    font-family: "Lato", Tahoma, sans-serif;
}

.btn-color {
    background-color: #fd2d01;
    color: white;
    margin-left: 10px;
}

.btn-color:hover {
    background-color: #ec2a04;
    color: white;
}

.form-control {
    opacity: 0.5;
    border: 3px solid rgb(255, 215, 215);
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

.main-row {
    margin: 5%;
    background-color: white;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    border: 5px solid rgb(255, 215, 215);
}

.blog-img>img {
    width: 90%;
    height: 90%;
    transform: translate(-25px, -25px);
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.08);
}

.blog-author {
    display: flex;
    margin: 10px 10px 10px 10px;
}

.blog-author_avatar {
    min-width: 50px;
    height: 50px;
    margin-right: 10px;
}

.blog-author_avatar>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid black;
}

.blog-author_name {
    padding-top: 6px;
}

.blog {
    padding: 10px;
}

ul li {
    color: grey;
    transition: 1ms;
}

ul li:hover {
    color: red;
}

@media (max-width: 768px) {
    .blog-img>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.08);
    }
}
</style>
