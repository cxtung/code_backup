<template>
  <div class="leave-list">
    <h2>My Leave List</h2>
    <div class="filters">
      <label for="fromDate">From Date:</label>
      <input type="date" id="fromDate" v-model="filters.fromDate" />

      <label for="toDate">To Date:</label>
      <input type="date" id="toDate" v-model="filters.toDate" />

      <label for="leaveStatus">Show Leave with Status:</label>
      <select id="leaveStatus" v-model="filters.status">
        <option value="">-- Select --</option>
        <option value="Rejected">Rejected</option>
        <option value="Cancelled">Cancelled</option>
        <option value="Pending Approval">Pending Approval</option>
        <option value="Scheduled">Scheduled</option>
        <option value="Taken">Taken</option>
      </select>

      <button @click="resetFilters">Reset</button>
      <button @click="searchLeaves">Search</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>From Date</th>
          <th>To Date</th>
          <th>Leave Type</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="leave in filteredLeaves" :key="leave.id">
          <td>{{ leave.fromDate }}</td>
          <td>{{ leave.toDate }}</td>
          <td>{{ leave.leaveType }}</td>
          <td>{{ leave.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      filters: {
        fromDate: "",
        toDate: "",
        status: "",
      },
      leaves: [
        {
          id: 1,
          fromDate: "2025-01-01",
          toDate: "2025-01-05",
          leaveType: "Annual",
          status: "Scheduled",
        },
        {
          id: 2,
          fromDate: "2025-02-10",
          toDate: "2025-02-15",
          leaveType: "Sick",
          status: "Pending Approval",
        },
        // Add more leave records as needed
      ],
    };
  },
  computed: {
    filteredLeaves() {
      return this.leaves.filter((leave) => {
        const matchesFromDate =
          !this.filters.fromDate || leave.fromDate >= this.filters.fromDate;
        const matchesToDate =
          !this.filters.toDate || leave.toDate <= this.filters.toDate;
        const matchesStatus =
          !this.filters.status || leave.status === this.filters.status;
        return matchesFromDate && matchesToDate && matchesStatus;
      });
    },
  },
  methods: {
    resetFilters() {
      this.filters.fromDate = "";
      this.filters.toDate = "";
      this.filters.status = "";
    },
    searchLeaves() {
      // You can add additional search logic here if needed
      console.log("Searching with filters:", this.filters);
    },
  },
};
</script>
  <style scoped>
.leave-list {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h2 {
  margin-bottom: 20px;
}

.filters {
  margin-bottom: 20px;
}

.filters label {
  margin-right: 10px;
}

.filters input,
.filters select {
  margin-right: 20px;
  padding: 5px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid #ddd;
}

th,
td {
  padding: 10px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>