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
html {
    background-color: #000a12 !important;
    overflow: hidden;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

body {
  /*
  MAIN COLORS;
  #263238
  #000a12
  #4f5b62
  */
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  text-align: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow-y: scroll;
}

a {
  color: #78909C !important;
  text-decoration: none;
}
a :hover {
    text-decoration: none;
}
</style>
