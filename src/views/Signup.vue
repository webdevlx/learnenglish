<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form ref="form" v-model="formValidity">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
              >
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                label="Which browser do you use?"
                :items="browsers"
                v-model="browser"
                :rules="browserRules"
              >
              </v-autocomplete>
            </v-col>

            <v-col cols="12" md="4">
              <v-file-input label="Attach profile photo"></v-file-input>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                label="Birthday"
                v-model="birthday"
                :rules="birthdayRules"
                readonly
              >
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-date-picker full-width elevation="1" v-model="birthday">
              </v-date-picker>
            </v-col>

            <v-col cols="12">
              <v-checkbox
                label="Agree to terms & conditions"
                v-model="agreeToTerms"
                :rules="agreeToTermsRules"
              >
              </v-checkbox>
            </v-col>

            <v-col cols="12" sm="6" lg="3">
              <v-btn block :disabled="!formValidity" type="submit" color="primary">Submit</v-btn>
            </v-col>
            <v-col cols="12" sm="6" lg="3">
              <v-btn block color="success" @click="validateForm">Validate Form</v-btn>
            </v-col>
            <v-col cols="12" sm="6" lg="3">
              <v-btn block color="warning" @click="resetValidation">Reset Validation</v-btn>
            </v-col>
            <v-col cols="12" sm="6" lg="3">
              <v-btn block color="error" @click="resetForm">Reset</v-btn>
            </v-col>
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
      agreeToTerms: false,
      agreeToTermsRules: [
        (value) =>
          !!value ||
          "You must agree to the terms and conditions to sign up for an account.",
      ],
      birthday: "",
      birthdayRules: [(value) => !!value || "Select Birthday date."],
      browsers: ["Chrome", "Firefox", "Safari", "Opera", "Edge"],
      email: "",
      emailRules: [
        (value) => !!value || "Email is required.",
        // (value) => value.indexOf("@") !== 0 || "Email should have a username.",
        // (value) => value.includes("@") || "Email should include an @ symbol.",
        // (value) =>
        //   value.indexOf(".") - value.indexOf("@") > 1 ||
        //   "Email should contain a valid domain.",
        // (value) =>
        //   value.indexOf(".") <= value.length - 3 ||
        //   "Email should contain a valid domain extension.",
        (value) => /.+@.+\..+.+/.test(value) || "Email must be valid",
      ],
      browser: "",
      browserRules: [(value) => !!value || "Select browser."],
      formValidity: false,
    };
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    validateForm() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style scoped>
</style>