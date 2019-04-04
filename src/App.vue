<template>
  <LoadingLogo v-if="loading" @ready="loading = false" />
  <Layout v-else/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoadingLogo from './components/LoadingLogo';
import Layout from './components/Layout';

export default {
  name: 'app',
  components: {
    // HelloWorld
    LoadingLogo,
    Layout,
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
} */

body {
  background-color: #1c313a;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>
