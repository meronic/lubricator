<template>
  <div class="crane-container">
    <h2 class="crane-title">G/C {{ craneId }}호기</h2>
    <div class="lubricator-container">
      <div v-for="lubricator in lubricators" :key="lubricator.lubricator" class="lubricator">
        <h4>  {{ lubricator.lubricator }}번 도유기</h4>
        <p>상태 : {{ lubricator.state }}</p>

        <!-- Display green icon for 'normal' status -->
        <p v-if="lubricator.state === '정상'" class="icon icon-green">🟢</p>

        <!-- Display red icon for 'warning' status -->
        <p v-else-if="lubricator.state === '경고'" class="icon icon-red">⚠️</p>

        <p v-else-if="lubricator.state === '정지'" class="icon icon-red">🔴</p>

         <p v-else class="icon">🔌</p> 

      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/CraneUnit.scss";
</style>

<script>
export default {
  props: {
    craneId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      lubricators: []
    };
  },
  created() {
    this.fetchLubricatorData();
  },
  methods: {
    async fetchLubricatorData() {
      this.lubricators = [];
      for (let i = 1; i <= 11; i++) {
        const response = await fetch(`http://localhost:8000/crane/${this.craneId}/lubricator/${i}`);
        const data = await response.json();
        this.lubricators.push(data);
      }
    }
  }
};
</script>
