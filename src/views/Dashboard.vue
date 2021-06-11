<template>
  <div>
    <h1>Dashboard</h1>

    <sales-graph v-for="sale in sales" :key="`${sale.title}`" :sale="sale" />

    <statistic-card v-for="statistic in statistics" :key="`${statistic.title}`" :statistic="statistic" />

    <employees-table :employees="employees" @select-row="selectRow" />

    <event-timeline :timeline="timeline" />

    <v-snackbar v-model="snackbar">
      {{ currentRow.name }} - {{ currentRow.title }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
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