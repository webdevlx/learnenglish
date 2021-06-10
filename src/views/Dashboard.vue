<template>
  <div>
    <h1>Dashboard</h1>
    <v-data-table
      :headers="headers"
      :items="employees"
      multi-sort
      :items-per-page="5"
      class="elevation-1"
      @click:row="selectRow"
    ></v-data-table>
    <v-snackbar v-model="snackbar">
      {{ currentRow.name }} - {{ currentRow.title }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import employees from '../data/employees.json'
export default {
  data() {
    return {
      snackbar: false,
      currentRow: {},
      headers: [
        {
          text: "Employee ID",
          value: "id"
        },
        {
          text: "Name",
          value: "name"
        },
        {
          text: "Position Title",
          value: "title"
        },
        {
          text: "Salary",
          value: "salary"
        }
      ],
      employees: employees
    };
  },
  methods: {
    selectRow(event) {
      this.snackbar = true;
      this.currentRow = event
    },
  },
};
</script>
<style scoped>
</style>