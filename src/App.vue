<template>
  <div id="app">
    <v-app>
      <!-- <img src="./assets/logo.png">
      <router-view></router-view>-->
      <!-- <header>
       

      </header>
      <section class="test"></section>-->
      <header>
        <div class="overlay"></div>
        <video
          id="video_header"
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://scontent.cdninstagram.com/v/t50.2886-16/55973510_2406850089327441_2156221432546197504_n.mp4?_nc_ht=scontent.cdninstagram.com&_nc_cat=109&oe=5D7FF7B6&oh=3e111f7ecf77e0ddb036fd17d6088f00"
            type="video/mp4"
          />
        </video>
        <div class="navigation">
          <div id="menu-button" @click="menu_click">
            <span></span>
          </div>

          <v-overlay :value="overlay" :opacity="90" :z-index="2">
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </v-overlay>
          <h1 class="brand">
            <span>L</span>
            <span>
              <img width="50" src="./assets/logo.png" />
            </span>
            <span>quid</span>
          </h1>
          <nav>
            <ul id="nav_items">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto">
              <p>The HTML5 video element uses an mp4 video as a source. Change the source video to add in your own background! The header text is vertically centered using flex utilities that are build into Bootstrap 4.</p>
              <p>
                The overlay color can be changed by changing the
                <code>background-color</code> of the
                <code>.overlay</code> class in the CSS.
              </p>
              <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the media query at the bottom of the CSS snippet.</p>
              <p class="mb-0">
                Created by
                <a href="https://startbootstrap.com">Start Bootstrap</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => ({
    overlay: false,
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0
  }),
  methods: {
    menu_click() {
      console.log("clicked");
      document.getElementById("menu-button").classList.toggle("open");
      this.overlay = !this.overlay;
    },
    loop_video() {
      var video = document.getElementById("video1");
      video.classList.toggle("anim-fade-out");
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
    var video = document.getElementById("video_header");
    var videoLength = 0;
    var promise_video = new Promise((resolve, reject) => {
      video.onloadedmetadata = () => {
        resolve(video.duration);
      };
    }).then((duration) => {
      setInterval(() => {
        var promise_this = new Promise((resolve, reject) => {
          video.classList.toggle("hidden");
          resolve()
        }).then(() => {
          setTimeout(() => {
            video.classList.toggle("hidden");
            video.currentTime = 0;
          }, 500);
        });
      }, (duration * 1000)- 500);
  
    });

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
</style>