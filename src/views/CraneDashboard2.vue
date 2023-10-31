<template>
    <div class="crane-dashboard-container">
        <h1>크레인 도유기 모니터링 시스템</h1>
        <div class="crane-grid">
            <Crane v-for="craneId in range(4,7)" :key="craneId" :craneId="craneId" />
        </div>
    </div>
</template>
<style lang="scss">
@import "@/assets/styles/CraneDashboard.scss";
</style>


<script>
import Crane from './CraneUnit.vue';

export default {
    methods:{
        range(start, end){
            return Array.from({length: end - start}, (_,i)=>start+i);
        },
    },
    components: {
        Crane
    }
};
</script>
