<template>
  <div id="app">
      <v-app>
    <!-- <img src="./assets/logo.png">
    <router-view></router-view>-->
      <header>
              <div id="menu-button" @click="menu_click">    
                <span></span>
                </div>
             
            <v-overlay :value="overlay" :opacity="90" :z-index="2">
              <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
              </ul>
              </nav>
            </v-overlay>
            <h1 class="brand"><span>L</span><span><img  width="50" src="./assets/logo.png"/></span><span>quid</span></h1>
              <nav>
                  <ul id='nav_items'>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </nav>
      </header>
  <div>
    
  </div>
  <div style ></div>
   <v-parallax
      dark
      src="https://i.pinimg.com/originals/76/38/9f/76389f6ef17efc39df659073843881a7.gif"
    >
 
    </v-parallax>
  <!-- <div class="well" id="well">
    <div class="panel"></div>
    <div class="panel"><span class="top">&uarr;</span></div>
    <div class="panel"><span class="top">&uarr;</span></div>
    <div class="panel"><span class="top">&uarr;</span></div>
    <div class="panel"><span class="top">&uarr;</span></div>
</div> -->
      </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
      overlay: false,
  }),
  methods:{

    menu_click(){
      console.log('clicked')
      document.getElementById('menu-button').classList.toggle('open');
      this.overlay = !this.overlay;

    }
    // var open = document.getElementById('hamburger');
    // var changeIcon = true;

    // open.addEventListener("click", function(){

    //     var overlay = document.querySelector('.overlay');
    //     var nav = document.querySelector('nav');
    //     var icon = document.querySelector('.menu-toggle i');
    //     let brand = document.querySelector('.brand');

    //     overlay.classList.toggle("menu-open");
    //     nav.classList.toggle("menu-open");
    //      document.querySelector('.brand').classList.toggle("hidden")
    //     if (changeIcon) {
    //         icon.classList.remove("fa-bars");
    //         icon.classList.add("fa-times");

    //         changeIcon = false;
    //     }
    //     else {
    //         icon.classList.remove("fa-times");
    //         icon.classList.add("fa-bars");
    //         changeIcon = true;
    //     }
    // });

  },
  mounted() {
    // var open = document.getElementById('hamburger');
    // var changeIcon = true;

    // open.addEventListener("click", function(){

    //     var overlay = document.querySelector('.overlay');
    //     var nav = document.querySelector('nav');
    //     var icon = document.querySelector('.menu-toggle i');
    //     let brand = document.querySelector('.brand');

    //     overlay.classList.toggle("menu-open");
    //     nav.classList.toggle("menu-open");
    //      document.querySelector('.brand').classList.toggle("hidden")
    //     if (changeIcon) {
    //         icon.classList.remove("fa-bars");
    //         icon.classList.add("fa-times");

    //         changeIcon = false;
    //     }
    //     else {
    //         icon.classList.remove("fa-times");
    //         icon.classList.add("fa-bars");
    //         changeIcon = true;
    //     }
    // });
  }
};
</script>
<style lang="scss">
@import "./scss/global";

.well {
  position: relative;
  overflow: hidden;
  transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
}

.top {
  font-size: 80%;
  color: hsla(0, 0%, 100%, 0.25);
  position: relative;
  top: -0.2em;
  cursor: pointer;
}

.panel {
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-size: 10vmin;
  padding: 1em;
  box-sizing: border-box;
  color: hsla(0, 0%, 100%, 0.1);
  cursor: default;
}

.panel:nth-child(1) {
  background: grey;
}

.panel:nth-child(2) {
  background: lightgrey;
}

.panel:nth-child(3) {
  background: whitesmoke;
}

.panel:nth-child(4) {
  background: darkgrey;
}

.panel:nth-child(5) {
  background: grey;
}
</style>