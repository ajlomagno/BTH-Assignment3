<template>
  <div id="top-bar">
    <div class="container-top-bar">
      <div class="row">
        <div class="col-12">
          <div class="float-left">
            <span id="time spacing"><b>12:37 pm</b></span>&nbsp;&nbsp;&nbsp;
            <span id="temp spacing">10° C</span>
          </div>
          <div class="float-right">
            <span id="location spacing">Toronto, ON</span>&nbsp;&nbsp;&nbsp;
            <span id="battery"><i class="fas fa-battery-three-quarters"></i></span>&nbsp;&nbsp;&nbsp;
            <span id="bluetooth"><i class="fab fa-bluetooth"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-bar",
  data () {
    return {

    }
  }
}
</script>