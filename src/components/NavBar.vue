<template>
    <nav>
      <ul>
        <li v-for="link in links" :key="link.title">
          <router-link :to="link.path">{{ link.title }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    data() {
      return {
        links: [
          { title: 'Home', path: '/' },
          { title: 'About', path: '/about' },
          // Add more links as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 1rem 0;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  li {
    margin: 0 1rem;
  }
  
  router-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  router-link:hover {
    color: #ddd;
  }
  
  router-link.router-link-active {
    font-weight: bold;
  }
  </style>
  