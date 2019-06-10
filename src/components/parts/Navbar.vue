<template>
<v-toolbar dark color="#455a64">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>brenbread</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>About</v-btn>
      <v-btn flat>Experience</v-btn>
      <v-btn flat>Projects</v-btn>
      <v-btn flat>Contact</v-btn>
      <v-btn flat>SDVX</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default {
    name: 'Navbar',
}
</script>
