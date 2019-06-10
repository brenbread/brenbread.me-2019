<template>
<i-layout>
    <!-- <i-layout-header>
        <NavbarInkline/>
    </i-layout-header> -->
    
    <i-layout-content>
        <Landing/>
    </i-layout-content>
</i-layout>
    
</template>

<script>
// import Navbar from './parts/Navbar';
import Landing from './parts/Landing';
import NavbarInkline from './parts/NavbarInkline';

export default {
  name: "layout",
  components: {
    NavbarInkline,
    Landing,
  },
};
</script>
