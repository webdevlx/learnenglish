<template>
  <div>
    <v-progress-linear
      :active="loading"
      :indeterminate="loading"
      color="primary"
    ></v-progress-linear>

    <div class="voa">
      <img src="../assets/logo_voa.png" alt="VOA" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingLesson",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.voa {
  color: #1976d2;
  position: absolute;
  top: 40%;
  width: 100%;
  text-align: center;
}

@media (max-width: 600px) {
  .voa img {
    width: 300px;
  }
}
</style>