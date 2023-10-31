<template>
    <div>
      <button v-if="isMobile" @click="showSidebar = !showSidebar" class="toggle-button">☰</button>
  
      <div :class="{ 'sidebar': true, 'show': !isMobile || (isMobile && showSidebar) }">
        <ul class="menu">
          <li v-for="item in menuItems" :key="item.text">
            <a :href="item.link">⚙️ {{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
    data() {
      return {
        showSidebar: false,
        menuItems: [
          { text: '알림메세지 설정', link: '#' },
          { text: '대시보드', link: '#' },
        ],
        isMobile: window.innerWidth <= 1200, // Initial check for screen width
      };
    },
    created() {
      window.addEventListener('resize', this.checkScreenWidth);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreenWidth);
    },
    methods: {
      checkScreenWidth() {
        this.isMobile = window.innerWidth <= 1150;
      },
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 180px;
    background-color: #f3f6f8;
    height: 100vh;
    padding: 20px;
    border-radius: 8px;
    position: fixed;
    left: 0;
    top: 10;
    z-index: 500; 
    transition: transform 0.3s;
    transform: translateX(0);
  }
  
  .sidebar:not(.show) {
    transform: translateX(-250px);
  }
  
  .menu {
    margin-top: 50px;
    list-style-type: none;
    padding: 0;
  }
  
  .menu li {
    margin-bottom: 15px;
  }
  
  .menu li a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 18px;
  }
  
  .menu li a:hover {
    text-decoration: underline;
  }
  
  .toggle-button {
 
  position: fixed;
  left: 20px;
  top: 0px;
  z-index: 1000;
  background-color: transparent; /* Made the background transparent */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px;
  color: #ffffff; 
  font-size: 40px;
  }
  
  @media only screen and (min-width: 1150px) {
    .toggle-button {
      display: none;
    }
  
    .sidebar {
      transform: translateX(0) !important;
    }
  }


    
  
  </style>
  