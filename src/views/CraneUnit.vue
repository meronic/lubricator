<template>
  <div class="crane-container">
    <h2 class="crane-title">Goliath {{ craneId }} Crane</h2>
    <div class="lubricator-container">
      <div v-for="lubricator in lubricators" :key="lubricator.lubricator" class="lubricator">
        <h4> {{ lubricator.lubricator }} 번 도유기</h4>
        <p>상태 : {{ lubricator.state }}</p>

        <!-- Display green icon for 'normal' status -->
        <i v-if="lubricator.state === 'running'" class="icon icon-green">✅</i>

        <!-- Display red icon for 'warning' status -->
        <i v-else-if="lubricator.state === 'warning'" class="icon icon-red">⚠️</i>

         <!-- Display poweroff icon for other states -->
         <i v-else class="icon icon-poweroff">🔌</i> <!-- Using plug emoji for poweroff icon as an example -->

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
