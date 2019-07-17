<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->
<header>
         <div class="menu-toggle" id="hamburger">
            <i class="fas fa-bars"></i>
        </div>
        <div class="overlay"></div>
        <div class="container">
            <nav>
              <span class ="brand"> <img width="50" src="./assets/logo.png"></span>
                <!-- <h1 class="brand"><a href="index.html">Br<span>a</span>nd</a></h1> -->
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
</header>
  </div>
</template>

<script>
export default {
  name: 'app',

  mounted(){
    var open = document.getElementById('hamburger');
    var changeIcon = true;

    open.addEventListener("click", function(){

        var overlay = document.querySelector('.overlay');
        var nav = document.querySelector('nav');
        var icon = document.querySelector('.menu-toggle i');

        overlay.classList.toggle("menu-open");
        nav.classList.toggle("menu-open");

        if (changeIcon) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

            changeIcon = false;
        }
        else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            changeIcon = true;
        }
    });

  }
}
</script>
<style lang="scss">
@import "./scss/global";
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>