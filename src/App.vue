<template>
  <LoadingLogo v-if="loading" @ready="loading = false" />
  <transition v-else name="component-fade">
    <Layout/>
  </transition>
  
</template>

<script>
import LoadingLogo from './components/LoadingLogo';
import Layout from './components/Layout';

export default {
  name: 'app',
  components: {
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
body {
  background-color: #1c313a;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #ffffff;
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
