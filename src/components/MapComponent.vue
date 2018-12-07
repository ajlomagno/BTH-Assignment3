<template>
  <div id="map">
    <embed id="map-embed" src="https://www.openstreetmap.org/export/embed.html">
    <div id="navigationInputContainer">
      <input id="navigationInput" placeholder="Please input your destination" type="text" size="30" v-on:focusout="focusOut()"  v-on:focus="focusIn()">
      <img src="../assets/iconYou.png" width="30px" height="30px" id="input_img">
    </div>
    <aplayer id="music-player" :audio="audio" :lrcType="0"></aplayer>
  </div>
</template>

<script>
export default {
  name: "maps",
  data () {
    return {
      musicShowing: false,
      audio:{
        name: 'NonStop',
        artist: 'Drake',
        cover: 'https://pbs.twimg.com/media/Dfn7JXKVMAEudaf.jpg', 
      }
    };
  },

  methods: {
    focusOut : function(){
      document.getElementById("jQKeyboardContainer").style.visibility = "hidden";
    },

    focusIn : function(){
      document.getElementById("jQKeyboardContainer").style.visibility = "visible";
    }
  }
}
</script>

<style>
  #map{
    background-color: black;  
    height: 85vh;
    width: 70vw;
  }

  #map-embed{
    height: 100%;
    width: 100%;
  }

  #music-player{
    position: absolute !important;
    top: 600px;
    left: 675px;
    width: 750px;
    background-color: rgb(29, 29, 29);  

  }

  .aplayer-author{
    color: white !important;
  }

  #navigationInputContainer {
    position:absolute;
    top: 90px;
	  left: 575px;
	}
	
	#navigationInput {
    color:#FFFFFF;
    background-color:#707070;
    font-size:27px;
    border: 1px solid #ccc;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -moz-box-shadow: 2px 2px 3px #666;
    -webkit-box-shadow: 2px 2px 3px #666;
    box-shadow: 2px 2px 3px #666;
    padding: 4px 7px 4px 50px;
    outline: 0;
    -webkit-appearance: none;
    border-color: #000000;
  }
  
  #navigationInput::placeholder{
    color: rgb(170, 170, 170);
  }
	
	#input_img {
    position:absolute;
    top: 5.5px;
    left:7.5px;
    width:40px;
    height:40px;
  }
</style>