<template>
    <!-- Start landing page text element at 0% opacity  -->

    <md-content class="md-elevation-5">
        <div id="landing">
            <span>Hi there, I'm Bren!</span>
            <br />
            <span>I'm currently working as a Member of Technical Staff @ ONF.</span>
            <br />
            <span>I graduated with a BS in Computer Engineering from SJSU.</span>
            <br />
            <span>I have industry experience in QA automation, testing methodologies, and have a high attention to detail.</span>
            <br />
            <span>I also have experience with full-stack web development and embedded development.</span>
            <br />
            <span>On the side, I like rhythm games (mostly Bemani), music, <a :href="lnk_keyboard" target="_blank">mechanical keyboards</a>, <a :href="lnk_guitar" target="_blank">playing the guitar</a>, the occasional anime, and 🍛 <a :href="lnk_curry" target="_blank">CURRY</a> 🍛!!</span>
            <br />
            <span>Not looking for opportunities at the moment.</span>
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
            lnk_curry: "https://twitter.com/brenbread_/status/1129478927523598337",
            lnk_keyboard: "https://www.youtube.com/watch?v=15utdCplTo0",
            lnk_guitar: "https://www.youtube.com/watch?v=Cvog6wZnLr4"
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

