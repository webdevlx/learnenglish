<template>
  <v-data-table
    :headers="headers"
    :items="employees"
    :items-per-page="5"
    class="elevation-1"
    @click:row="selectRow"
    :multi-sort="true"
  ></v-data-table>
</template>

<script>
export default {
  name: "EmployeesTable",
  props: {
    employees: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Employee ID",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Position Title",
          value: "title",
        },
        {
          text: "Salary",
          value: "salary",
        },
      ],
    };
  },
  methods: {
    selectRow(selectEmployee) {
      this.$emit("select-row", selectEmployee);
    },
  },
};
</script>

<style scoped>
</style>