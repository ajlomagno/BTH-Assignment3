<template>
  <div id="car">
    <div class="container" id="battery">
      <div class="row">
        <div class="col-12">
          <div class="progress">
            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100" style="width:70%">
              <span class="sr-only">70% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="button" id="hood-button" class="btn btn-sm" v-on:click="toggleHoodText">Open Hood</button>
    <button type="button" id="trunk-button" class="btn btn-sm" v-on:click="toggleTrunkText">Open Trunk</button>
    <img id="car-image" src="../assets/car.png" width="275">
    <div class="container" id="gears">
      <div class="row">
        <div class="col-6 vl center-text">
          <p><b class="big-font">P</b></p>
        </div>
        <div class="col-6 center-text">
          <p><b class="big-font">65</b>km/h</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "car",
  data () {
    return {
      trunkOpen: false,
      hoodOpen: false
    }
  },

  methods: {
    toggleTrunkText: function(event){
      if(this.trunkOpen){
        this.trunkOpen = false;
        event.target.innerHTML = "Open Trunk";
      } else {
        this.trunkOpen = true;
        event.target.innerHTML = "Close Trunk";        
      }
    },

    toggleHoodText: function(event){
      if(this.hoodOpen){
        this.hoodOpen = false;
        event.target.innerHTML = "Open Hood";
      } else {
        this.hoodOpen = true;
        event.target.innerHTML = "Close Hood";        
      }
    }
  }
}
</script>

<style>
  #car{
    background-color: rgb(29, 29, 29);  
    height: 85vh;
    width: 30vw;
    border-right: 100px;
  }

  #car-image{
    display: block;
    position: relative;
    margin: auto;
    top: 35px;
  }

  #gears{
    position: relative;
    top: 65px;
  }

  .big-font{
    font-size: 80px;
    
  }
  .vl{
    border-right: 1px solid white;
    height: 50%;
  }

  #gearbox{
    text-orientation: upright;
  }

  .center-text{
    text-align: center;
  }

  #battery{
    margin-top: 15px;
  }

  #hood-button{
    color: black;
    position: absolute;
    top: 175px;
    left: 30px;
  }

  #trunk-button{
    color: black;
    position: absolute;
    top: 450px;
    left: 30px;
  }
</style>

