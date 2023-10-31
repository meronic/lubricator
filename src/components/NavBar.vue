<template>
    <div class="navbar">

        <div class="nav-title">
            
            크레인도유기모니터링 시스템
        </div>
        <div></div>
        <div class="nav-links">
            <button @click="goTo('/')">G/C 1-3 호기</button>
            <button @click="goTo('/2')">G/C 4-6 호기</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'NavBar',
    methods: {
        goTo(path) {
            this.$router.push(path);
        }
    }
}
</script>
  
<style scoped>
.nav-title{
    font-size: 30px;
}

@media (max-width: 1151px) {
    .nav-title {
        display: none;
    }
}
.navbar {
    position: fixed;
    /* Make the navbar fixed */
    top: 0;
    /* Pin it to the top */
    left: 0;
    /* Pin it to the left */
    right: 0;
    /* Ensure it spans the entire width */
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #9155fd;
    color: white;
    height: 80px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    display: flex;
    gap: 1rem;
}

.nav-links button {
    color: white;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s, background-color 0.3s;
}

.nav-links button:hover {
    color: #FFD700;
    background-color: rgba(255, 255, 255, 0.1);
}

</style>
  