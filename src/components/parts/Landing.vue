<template>
    <!-- Start landing page text element at 0% opacity  -->
    <!-- <div id="landing" v-anime="{ loop: false, duration: 2000, easing: 'linear' }"> -->
    <div id="landing">
        <span id="msg">Hi there I'm Bren!</span>
        <br />
        <span id="msg">I'm a Computer Engineering student @ SJSU + currently interning @ McAfee.</span>
        <br />
        <span id="msg">I have experience with full-stack web development as well as embedded development.</span>
        <br />
        <span id="msg">I like rhythm games, music, mechanical keyboards, the occasional anime, and 🍛 <a href="https://twitter.com/brenbread_/status/1129478927523598337" target="_blank">CURRY</a> 🍛</span>
        <br />
        <span id="msg">This website is still under construction! Slowly reworking it... Expect more soon 👀</span>
        <br />
        <SocialMedia/>
    </div>
</template>

<script>
import VueAnime from 'vue-animejs';
import Vue from 'vue';
import SocialMedia from './SocialMedia';

Vue.use(VueAnime);

export default {
    name: 'Landing',
    components: {
        SocialMedia
    },

    // animate the layout
    mounted() {
        const targets = this.$el;
        this
            .$anime({
                targets,
                translateY: [-2160, 0],
                delay: 500,
                duration: 2000,
                easing: 'easeOutExpo'
            })
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

#landing {
  text-align: center;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: 'Roboto Mono', monospace;
  /* opacity: 0; */
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

</style>

