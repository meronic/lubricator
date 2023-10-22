<template>
    <div class="crane-container">
      <h2 class="crane-title">Goliath {{ craneId }} Crane</h2>
      <div class="lubricator-container">
        <div
          v-for="lubricator in lubricators"
          :key="lubricator.lubricator"
          class="lubricator"
        >
          <h4>Lubricator {{ lubricator.lubricator }}</h4>
          <p>Status: {{ lubricator.state }}</p>
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
