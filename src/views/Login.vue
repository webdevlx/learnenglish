<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="mx-auto mt-3">
          <v-card-title>
            <h1 class="display-1">Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                :color="username === '' ? 'red' : 'primary'"
                v-model="username"
                label="Username"
                prepend-icon="mdi-account-circle"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :color="password.length < 6 ? 'red' : 'primary'"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      username: "",
      password: "",
    };
  },
};
</script>

<style scoped>
</style>