<template>
  <div class="header">
    <div>
      <nuxt-link to="/"><img class="img" src="../static/img/rose.png" /></nuxt-link>
    </div>

    <div class="nav">
      <nav>
        <nuxt-link to="/"><img src="../static/img/home.png" /></nuxt-link>
        <nuxt-link to="/about"><img src="../static/img/pencil3.png" /></nuxt-link>
        <nuxt-link to="/logIn"><img src="../static/img/user.png" /></nuxt-link>
        <nuxt-link :to="{ name: 'users-list' }"><img src="../static/img/bord.png" /></nuxt-link>
      </nav>
    </div>
  </div>
</template>


<style>
.header {
  background-color: rgb(206, 187, 187);
  padding-top: 3%;
  padding-left: 3%;
}

.img {
  width: 10%;
}

.nav {
  text-align: right;
  padding-bottom: 2%;
  padding-right: 5%;
}
</style>