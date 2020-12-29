<template>
    <!-- Start landing page text element at 0% opacity  -->
    <!-- <div id="landing" v-anime="{ loop: false, duration: 2000, easing: 'linear' }"> -->
    <md-content class="md-elevation-5">
    <div id="landing">
        <span id="msg">Hi there, I'm Bren!</span>
        <br />
        <span id="msg">I graduated with a BS in Computer Engineering from SJSU.</span>
        <br />
        <span id="msg">I have industry experience in QA automation, testing methodologies, and have a high attention to detail.</span>
        <br />
        <span id="msg">I also have experience with full-stack web development and embedded development as well.</span>
        <br />
        <span id="msg">On the side, I like rhythm games (mostly Bemani), music, mechanical keyboards, playing the guitar, the occasional anime, and 🍛 <a href="https://twitter.com/brenbread_/status/1129478927523598337" target="_blank">CURRY</a> 🍛!!</span>
        <br />
        <span id="msg"><b>Currently looking for opportunities</b>, so drop me a message <a :href="lnk_linkedin" target="_blank">here</a> if you're interested in talking!</span>
        <br />
        <SocialMedia/>
    </div>
    </md-content>
</template>

<script>
import VueAnime from 'vue-animejs';
import Vue from 'vue';
import SocialMedia from './SocialMedia';

// links
import socialMedia from '../../config/config.js';

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
    },

    data: function() {
        return {
            // LinkedIn link for landing
            lnk_linkedin: socialMedia.socialMedia.LinkedIn,
        }
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

