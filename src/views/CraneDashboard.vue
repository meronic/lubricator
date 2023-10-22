<template>
    <div class="crane-dashboard-container">
        <h1>크레인 도유기 모니터링 시스템</h1>
        <div class="crane-grid">
            <Crane v-for="craneId in 3" :key="craneId" :craneId="craneId" />
        </div>
    </div>
</template>
<style lang="scss">
@import "@/assets/styles/CraneDashboard.scss";
</style>


<script>
import Crane from './CraneUnit.vue';

export default {
    components: {
        Crane
    }
};
</script>
