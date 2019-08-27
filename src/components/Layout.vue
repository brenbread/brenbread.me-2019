<template>
<div>
  <Landing id="landing"/>
  <!-- <md-content id="spacer"></md-content>
  <Experience id="experience"/> -->
</div>
</template>

<script>
import Landing from './parts/Landing';
// import Experience from './parts/Experience';

export default {
  name: "layout",
  components: {
    Landing,
    // Experience,
  },
};
</script>

<style scoped>
#landing { 
  /* margin-top: 50vh; */
}

#experience {
  margin-top: 50vh;
}

#spacer {
  margin-block-start: 50vh;
  /* opacity: 0; */
}

</style>