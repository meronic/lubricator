<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar/>
    <div>
      <SideBar/>
    </div>
    <div>
      <router-view />
    </div>
    



  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'


export default {
  components: {
    NavBar,  
    SideBar
  },

  data() {
    return {
      showSidebar: false
    }
  },

  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    }
  }
}
</script>

<style>
body {
    padding-top: 80px; 
     /* Same as the height of the navbar */
    background-color: #f5f5f5;
}




</style>
