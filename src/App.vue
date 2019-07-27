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
            <h1 class="brand"><span>L</span><img  width="50" src="./assets/logo.png"/><span>quid</span></h1>
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
  <div class="well" id="well">
    <div class="panel"></div>
    <div class="panel"><span class="top">&uarr;</span></div>
    <div class="panel"><span class="top">&uarr;</span></div>
    <div class="panel"><span class="top">&uarr;</span></div>
    <div class="panel"><span class="top">&uarr;</span></div>
</div>
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
    var pnls = document.querySelectorAll(".panel").length,
      scdir,
      hold = false;

    function _scrollY(obj) {   
      var slength,
        plength,
        pan,
        step = 100,
        vh = window.innerHeight / 100,
        vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
      if ((this !== undefined && this.id === "well") ||(obj !== undefined && obj.id === "well")) {
        pan = this || obj;
        plength = parseInt(pan.offsetHeight / vh);
      }
      if (pan === undefined) {
        return;
      }
      plength = plength || parseInt(pan.offsetHeight / vmin);
      slength = parseInt(pan.style.transform.replace("translateY(", ""));
      if (scdir === "up" && Math.abs(slength) < plength - plength / pnls) {
        slength = slength - step;
      } else if (scdir === "down" && slength < 0) {
        slength = slength + step;
      } else if (scdir === "top") {
        slength = 0;
      }
      if (hold === false) {
        hold = true;        
        pan.style.transform = "translateY(" + slength + "vh)"; 
        if(window.innerWidth < 700){ // if desktop 
          if(slength === 0){// if mobile
            
          }     
        }  
        setTimeout(function() {
          hold = false;   
        }, 1500);

      }
    }
    /*[swipe detection on touchscreen devices]*/
    function _swipe(obj) {
 
      var swdir,
        sX,
        sY,
        dX,
        dY,
        threshold = 100,
        /*[min distance traveled to be considered swipe]*/
        slack = 50,
        /*[max distance allowed at the same time in perpendicular direction]*/
        alT = 500,
        /*[max time allowed to travel that distance]*/
        elT /*[elapsed time]*/,
        stT; /*[start time]*/
      obj.addEventListener(
        "touchstart",
        function(e) {
          var tchs = e.changedTouches[0];
          swdir = "none";
          sX = tchs.pageX;
          sY = tchs.pageY;
          stT = new Date().getTime();
          e.preventDefault();
        },
        false
      );

      obj.addEventListener(
        "touchmove",
        function(e) {
          e.preventDefault(); /*[prevent scrolling when inside DIV]*/
        },
        false
      );

      obj.addEventListener(
        "touchend",
        function(e) {
          var tchs = e.changedTouches[0];
          dX = tchs.pageX - sX;
          dY = tchs.pageY - sY;
          elT = new Date().getTime() - stT;
          if (elT <= alT) {
            if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
              swdir = dX < 0 ? "left" : "right";
            } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
              swdir = dY < 0 ? "up" : "down";
            }
            if (obj.id === "well") {
              if (swdir === "up") {
                scdir = swdir;
                _scrollY(obj);
              } else if (
                swdir === "down" &&
                obj.style.transform !== "translateY(0)"
              ) {
                scdir = swdir;
                _scrollY(obj);
              }
              e.stopPropagation();
            }
          }
        },
        false
      );
    }
    /*[assignments]*/
    var well = document.getElementById("well");
    well.style.transform = "translateY(0)";
    well.addEventListener("wheel", function(e) {
      
      if (e.deltaY < 0) {
        scdir = "down";
      }
      if (e.deltaY > 0) {
        scdir = "up";
      }
      e.stopPropagation();
    });
    well.addEventListener("wheel", _scrollY);

    _swipe(well);
    var tops = document.querySelectorAll(".top");
    for (var i = 0; i < tops.length; i++) {
      tops[i].addEventListener("click", function() {
        scdir = "top";
        _scrollY(well);
      });
    }
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