<template>
  <v-container>
    <v-row class="mt-5 text-center">
      <v-col cols="12">
        <h1>Next Lesson Release...</h1>
      </v-col>

      <v-col cols="3">
        <h2 class="display-1">{{ day }}</h2>
        <h5>Day</h5>
      </v-col>

      <v-col cols="3">
        <h2 class="display-1">{{ hour }}</h2>
        <h5>Hour</h5>
      </v-col>

      <v-col cols="3">
        <h2 class="display-1">{{ minute }}</h2>
        <h5>Minute</h5>
      </v-col>

      <v-col cols="3">
        <h2 class="display-1">{{ second }}</h2>
        <h5>Second</h5>
      </v-col>

      <v-col cols="12">
        <v-img
          :src="require('../assets/coming-soon.svg')"
          class="my-3"
          contain
          height="250"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      day: null,
      hour: null,
      minute: null,
      second: null
    }
  },
  methods: {
    countDown() {
      setInterval(() => {
        let releaseDate = new Date('Aug 2, 2021 07:00:00').getTime();
        let currentDate = new Date().getTime();
        let count = releaseDate - currentDate;

        let tday = 24*60*60*1000;
        let thour = 60*60*1000;
        let tminute = 60*1000;

        this.day = Math.floor(count / tday);
        this.hour = Math.floor((count % tday) / thour);
        this.minute = Math.floor((count % thour) / tminute);
        this.second = Math.floor((count % tminute) / (1000));
      }, 1000);
    }
  },
  created() {
    this.countDown()
  }
};
</script>

<style lang="scss" scoped>
</style>