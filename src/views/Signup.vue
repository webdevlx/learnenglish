<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Email" type="email"></v-text-field
            ></v-col>

            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                label="Which browser do you use?"
                :items="browsers"
              ></v-autocomplete
            ></v-col>

            <v-col cols="12" md="4">
              <v-file-input label="Attach profile photo"></v-file-input
            ></v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Birthday"
                v-model="birthday"
                readonly
              ></v-text-field
            ></v-col>

            <v-col cols="12" sm="6">
              <v-date-picker full-width elevation="1" v-model="birthday"></v-date-picker>
            </v-col>

            <v-col cols="12">
              <v-checkbox label="Agree to terms & conditions"></v-checkbox
            ></v-col>

            <v-col cols="12">
              <v-btn type="submit" color="primary">Submit</v-btn></v-col
            >
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      birthday: "",
      browsers: ["Chrome", "Firefox", "Safari", "Opera", "Edge"],
    };
  },
};
</script>

<style scoped>
</style>