<template>
  <div id="app">
    <top-bar></top-bar>
    <middle></middle>
    <bottom-bar></bottom-bar>
    <wheel></wheel>
  </div>
</template>

<script>
import BottomBar from './components/BottomBarComponent.vue'
import TopBar from './components/TopBarComponent.vue'
import Middle from './components/MiddleComponent.vue'
import Wheel from './components/WheelComponent.vue'

export default {
  name: "app",
  data () {
    return {
    }
  },

  components : {
    BottomBar,
    TopBar,
    Middle,
    Wheel
  }
}
</script>

<style>
  #app{
    background-color: rgb(31, 31, 31);
    color: white;
    height: 100vh;
  }

  #top-bar{
    background-color: black;  
    height: 5vh;
  }

  #middle{
    background-color: rgb(56, 56, 56);  
    height: 85vh;
  }

  #bottom-bar{
    background-color: black;  
    height: 10vh;
  }

  #wheel-component{
    position: absolute;
  }
</style>

