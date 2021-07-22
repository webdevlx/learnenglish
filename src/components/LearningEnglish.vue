<template>
  <v-card elevation="3">
    <svg width="100%" height="100%">
      <text x="50%" y="40%" text-anchor="middle">Learning English</text>
      <text x="50%" y="80%" text-anchor="middle">with VOA</text>
    </svg>
  </v-card>
</template>

<script>
export default {
  name: "LearningEnglish",
};
</script>

<style scoped>
svg text {
  text-align: center;
  letter-spacing: 5px;
  stroke: #1976d2;
  font-size: 33px;
  font-weight: 700;
  stroke-width: 1.5;
  animation: textAnimate 3s infinite alternate;
}

@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset: 20%;
    fill: #000;
  }
  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: #fff;
  }
}

@media (min-width: 960px) {
  svg text {
    font-size: 55px;
    stroke-width: 2;
  }
}
</style>