<template>
  <div id="wheel-component">
    <img class="wheel" id="rotatingWheel" src="../assets/wheel.png">
    <div id="dpad">
        <button class="btn">Up</button> 
        <button class="btn">Down</button> 
        <button class="btn">Right</button> 
        <button class="btn">Left</button> 
        <button class="btn">Middle</button>
    </div>
    <div id="progBtns">
        <button class="btn">Up</button> 
        <button class="btn">Down</button> 
        <button class="btn">Right</button> 
        <button class="btn">Left</button> 
        <button class="btn">Middle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "wheel-component",
  data () {
    return {

    }
  },


}
</script>