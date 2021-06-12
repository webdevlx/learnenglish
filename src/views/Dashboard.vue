<template>
  <v-container fluid>
    <h1>Dashboard</h1>

    <v-row justify="center">
      <v-col cols="12" md="6" lg="4" v-for="sale in sales" :key="`${sale.title}`">
        <sales-graph :sale="sale" />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="statistic in statistics" :key="`${statistic.title}`">
        <statistic-card :statistic="statistic" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" lg="6">
        <employees-table :employees="employees" @select-row="selectRow" />
      </v-col>

      <v-col cols="12" lg="6">
        <event-timeline :timeline="timeline" />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :left="$vuetify.breakpoint.lgAndUp">
      {{ currentRow.name }} - {{ currentRow.title }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import EmployeesTable from "../components/EmployeesTable.vue";
import EventTimeline from "../components/EventTimeline.vue";
import SalesGraph from "../components/SalesGraph.vue";
import StatisticCard from "../components/StatisticCard.vue";

import employeesData from "../data/employees.json";
import timelineData from "../data/timeline.json";
import salesData from "../data/sales.json";
import statisticData from "../data/statistics.json";
export default {
  components: { EmployeesTable, EventTimeline, SalesGraph, StatisticCard },
  data() {
    return {
      snackbar: false,
      currentRow: {},
      employees: employeesData,
      timeline: timelineData,
      sales: salesData,
      statistics: statisticData,
    };
  },
  methods: {
    selectRow(event) {
      this.snackbar = true;
      this.currentRow = event;
    },
  },
};
</script>
<style scoped>
</style>