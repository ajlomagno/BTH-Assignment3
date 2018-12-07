
<template>
  <div id="middle" class="container-full">
    <div class="row-full">
        <car class="col-third"></car>
        <maps class="col-two-thirds"></maps>
    </div>
  </div>
</template>

<script>
import Car from './CarComponent.vue'
import Maps from './MapComponent.vue'
import MusicSmall from './MusicSmallComponent.vue'
import MusicMedium from './MusicMediumComponent.vue'
import MusicLarge from './MusicLargeComponent.vue'

export default {
  name: "middle",
  data () {
    return {

    }
  },

  components : {
    Car,
    Maps,
    MusicLarge,
    MusicMedium,
    MusicSmall
  }
}
</script>