<template>
  <router-view />
  <div id="app">
    <Navbar />
    <div class="layout">
      <Sidebar />
      <MainContent />
    </div>
  </div>
  <div id="app">
    <Player />
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import MainContent from './components/MainContent.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    MainContent,
    Player
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
}
</style>
