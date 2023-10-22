<!-- src/App.vue -->
<template>
  <div id="app">
    <div>
      <NavBar />  
      <router-view />
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  components: {

    NavBar,

  }
}
</script>

<style>
/* Global Styles (if any) */
</style>
