<template>
  <router-link :to="{ name: 'lesson', params: { id: lesson.id } }">
    <v-card class="onHover" color="#385F73" dark>
      <v-card-title class="text-h5">Lesson {{ lesson.id }}</v-card-title>

      <v-card-text>
        {{ lesson.title }}
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.onHover:hover {
  transform: scale(1.01);
}
</style>