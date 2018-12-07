<template>
  <div id="bottom-bar">
    <div class="icons">
      <i id="home-btn" class="fas fa-lg fa-home icon" v-on:click="buttonClicked"></i>
      <i id="car-btn" class="fas fa-lg fa-car icon" v-on:click="buttonClicked"></i>
      <i id="phone-btn" class="fas fa-lg fa-mobile-alt icon" v-on:click="buttonClicked"></i>
      <i id="left-seat-btn" class="material-icons icon" v-on:click="buttonClicked">airline_seat_recline_extra</i>
      <i id="temp-btn" class="fas fa-lg fa-wind icon" v-on:click="buttonClicked"></i>
      <i id="right-seat-btn" class="material-icons mirror-icon icon" v-on:click="buttonClicked">airline_seat_recline_extra</i>
      <i id="music-btn" class="fas fa-lg fa-music icon" v-on:click="buttonClicked"></i>
      <i id="volume-btn" class="fas fa-lg fa-volume-up icon" v-on:click="buttonClicked"></i>
      <i id="hazard-btn" class="fas fa-lg fa-exclamation-triangle red icon" v-on:click="buttonClicked"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom-bar",
  data () {
    return {
      playerShowing: false
    }
  },

  methods: {
    buttonClicked: function(event){
      switch (event.target.id) {
        case "home-btn":
          break;
        case "car-btn":
          break;
        case "phone-btn":
          break;
        case "temp-btn":
          break;
        case "music-btn":
          if(this.playerShowing){
            document.getElementById("music-player").style.visibility = "hidden";
            this.playerShowing = false;
          } else{
            document.getElementById("music-player").style.visibility = "visible";
            this.playerShowing = true;
          }
          break;
        case "volume-btn":
          break;
        case "hazard-btn":
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style>
  .red{
    color: rgb(201, 0, 0);
  }

  .icon{
    width: calc(100vw / 10);
    display: inline-block;
    font-size: 40px;
  }

  .icon:hover{
    color: rgba(114, 114, 114, 0.486);
  }

  .icons{
    position: relative;
    top: 20px;
    text-align: center;
    width: 100%;
  }

  .mirror-icon {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
  }
</style>