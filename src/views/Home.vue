<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <h2>Introducing Let's Learn English</h2>

        <v-img
          :src="require('../assets/online_learning.svg')"
          class="my-5"
          contain
          height="250"
        />
      </v-col>
      <v-col cols="12" md="7">
        <video style="border-radius: 4px" width="100%" height="auto" controls>
          <source
            src="https://av.voanews.com/Videoroot/Pangeavideo/2016/02/c/ce/cef3a23d-aac0-4eae-97aa-cd9588937d63_hq.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" block to="/lessons">
          <v-icon left>mdi-play</v-icon>
          Let's Learn English
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
