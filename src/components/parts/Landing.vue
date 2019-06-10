<template>
    <!-- Start landing page text element at 0% opacity  -->
    <div id="landing" v-anime="{ opacity: 0 }">
        <span id="msg-1">Hi there I'm Bren!</span>
        <br />
        <span id="msg-2">I'm a Computer Engineering student @ SJSU + currently interning @ McAfee.</span>
        <br />
        <span id="msg-3">I like rhythm games, music, keyboards, and the occasional anime.</span>
        <br />
        <span id="msg-3">This website is still under construction! Slowly reworking it... Expect more soon 👀</span>
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
            .$anime
            .timeline()
            .add({
                targets,
                duration: 1,
                opacity: 0,
                easing: 'linear'
            })
            .add({
                targets,
                duration: 1000,
                opacity: 1,
                easing: 'linear'
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
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}

</style>

