<template>
    <!-- Start landing page text element at 0% opacity  -->
    <!-- <div id="landing" v-anime="{ loop: false, duration: 2000, easing: 'linear' }"> -->
    <md-content class="md-elevation-5">
    <div id="landing">
        <span id="msg">Hi there, I'm Bren!</span>
        <br />
        <span id="msg">I'm a Computer Engineering graduate from SJSU (Summer 2019).</span>
        <br />
        <span id="msg">This past summer, I interned @ McAfee doing QA automation.</span>
        <br />
        <span id="msg">I have experience with full-stack web development, embedded development, and QA automation.</span>
        <br />
        <span id="msg">I like rhythm games (mostly Bemani), music, mechanical keyboards, the occasional anime, and 🍛 <a href="https://twitter.com/brenbread_/status/1129478927523598337" target="_blank">CURRY</a> 🍛</span>
        <br />
        <span id="msg">This website is still under construction! Slowly reworking it... Expect more soon 👀</span>
        <br />
        <SocialMedia/>
    </div>
    </md-content>
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
                translateY: [2160, 0],
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
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10x;
  background-color: #263238;
}

</style>

