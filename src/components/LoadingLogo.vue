<template>
<div id="logo">
<svg width="25%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 928.28 928.28">
  <title>brenbread logo</title>
  <path d="M14.1,464.1l450-450,450,450-450,450Z" transform="translate(0.04 0.04)" style="fill: none;stroke: #fff;stroke-miterlimit: 10;stroke-width: 20px"/>
  <path d="M285.5,303.4l-25,141.9c24.5-36.2,63.5-52.4,101.9-52.4,62.4,0,104.8,41.6,91.8,115.3-13.1,74.1-69.6,115.3-132,115.3-38,0-71.2-19-83.8-52.9l-8.7,49.3H208l55.8-316.4,21.7-.1ZM250,507.7c-9.8,55.6,22.3,94,74.7,94,50.2,0,96.9-31.6,107.8-93.6,11.1-62.8-24.6-94-74.7-94C306.3,414.1,259.9,452.1,250,507.7Z" transform="translate(0.04 0.04)" style="fill: none;stroke: #fff;stroke-linejoin: round;stroke-width: 7px"/>
  <path d="M567.1,303.8,545.3,427.2c17.2-23.1,56-35.7,79.5-35.7,65.1,0,106.4,39.8,92.9,116.6-12.9,73.2-69.8,116.6-135.4,116.6-27.1,0-53.1-9-65.6-35.7l-9,30.7H456.2l55.7-316h55.2v.1ZM534.6,508.2c-7.1,40.2,18.3,65.5,53.1,65.5,35.3,0,68-26.7,74.8-65.5,7.1-40.2-16.5-65.1-51.8-65.1C575.9,443.1,541.5,469.3,534.6,508.2Z" transform="translate(0.04 0.04)" style="fill: none;stroke: #fff;stroke-linejoin: round;stroke-width: 19px"/>
</svg>
</div>
</template>

<script>
import VueAnime from 'vue-animejs';
import Vue from 'vue';
Vue.use(VueAnime);

export default {
  name: "LoadingLogo",
  // loader logo animation
   mounted() {
    const dashOffset = this.$anime.setDashoffset;
    const lettersPath = document.querySelectorAll('path');
    this
      .$anime
      .timeline()
      .add({
        targets: lettersPath,
        delay: 700,
        duration: 3000,
        strokeDashoffset: [dashOffset, 0],
        easing: 'easeInOutSine',
        direction: 'alternate',
        opacity: 1,
      })
      .add({
        delay: 700,
      })
      .add({
        targets: lettersPath,
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.01,
      })
      // after finishing animation
      .add({
        complete: () => {
          this.$emit('ready');
        }
      })
  },
}
</script>

<style>
#logo {
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
</style>