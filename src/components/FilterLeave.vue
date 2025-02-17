<template>
  <div class="leave-list">
    <h3>Leave List</h3>
    <div class="filters">
      <div class="filter-row">
        <div class="filter-item">
          <label>From Date</label>
          <input type="date" v-model="fromDate" />
        </div>
        <div class="filter-item">
          <label>To Date</label>
          <input type="date" v-model="toDate" />
        </div>
        <div class="filter-item">
          <label>Show Leave with Status*</label>
          <select v-model="leaveStatus">
            <option value="">-- Select --</option>
            <option value="pending">Pending Approval</option>
          </select>
        </div>
        <div class="filter-item">
          <label>Leave Type</label>
          <select v-model="leaveType">
            <option value="">-- Select --</option>
          </select>
        </div>
      </div>
      <div class="filter-row">
        <div class="filter-item">
          <label>Employee Name</label>
          <input
            type="text"
            placeholder="Type for hints..."
            v-model="employeeName"
          />
        </div>
        <div class="filter-item">
          <label>Sub Unit</label>
          <select v-model="subUnit">
            <option value="">-- Select --</option>
          </select>
        </div>
        <div class="filter-item-block">
          <label>Include Past Employees</label>
          <label class="switch">
            <input type="checkbox" v-model="includePastEmployees" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="reset">Reset</button>
      <button class="search">Search</button>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      fromDate: "2025-01-01",
      toDate: "2025-12-31",
      leaveStatus: "",
      leaveType: "",
      employeeName: "",
      subUnit: "",
      includePastEmployees: false,
    };
  },
};
</script>
  
  <style scoped>
.leave-list {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.filters {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.filter-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
}
input,
select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.filter-item-block {
  margin-top: 20px;
  display: Block;
  flex-direction: column;
  flex: 1;
  min-width: 150px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
  margin: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: green;
}
input:checked + .slider:before {
  transform: translateX(14px);
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  gap: 10px;
  flex-wrap: wrap;
}
button {
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.reset {
  background: white;
  border: 1px solid green;
  color: green;
}
.search {
  background: green;
  color: white;
}
@media (max-width: 768px) {
  .filter-row {
    flex-direction: column;
  }
  .actions {
    justify-content: center;
  }
}
</style>