<template>
  <v-app>
    <!-- Desktop mode -->
    <div v-if="!isPhone">
      <v-app-bar app color="primary" dark>
        <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text
          rounded
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-btn @click="toggleTheme" text rounded>
          <v-icon>mdi-theme-light-dark</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <!-- Phone mode -->
    <div v-else>
      <v-navigation-drawer v-model="drawer" color="primary" fixed dark>
        <v-list>
          <v-list-item>
            <v-btn fixed left @click="toggleTheme" text rounded>
              <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-btn fixed right @click="drawer = !drawer" text rounded>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-list-item>

          <v-list-item
            v-for="link in links"
            :key="`${link.label}-header-link-mobile`"
          >
            <v-btn text rounded :to="link.url">
              {{ link.label }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify Dashboard</v-toolbar-title>
      </v-app-bar>
    </div>

    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify Dashboard</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      links: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "Login",
          url: "/login",
        },
        {
          label: "Signup",
          url: "/signup",
        },
        {
          label: "Dashboard",
          url: "/dashboard",
        },
        {
          label: "Lessons",
          url: '/lessons'
        }
      ],
    };
  },
  computed: {
    isPhone() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("isDark", this.$vuetify.theme.dark.toString());
    },
  },
  mounted() {
    const isDark = localStorage.getItem("isDark");
    if (isDark == "true") {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  },
};
</script>