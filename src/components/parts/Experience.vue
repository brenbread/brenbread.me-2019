<template>
<md-content class="md-elevation-5">
    <div id="experience">
        Insert experience here 
    </div>
</md-content>
</template>

<script>
import VueAnime from 'vue-animejs';
import Vue from 'vue';

Vue.use(VueAnime);

export default {
    name: 'Experience',
    components: {

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

#experience {
  padding: 20px;
  background-color: #263238;
}
</style>

