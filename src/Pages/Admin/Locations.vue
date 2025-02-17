<template>
  <div class="container">
    <!-- Nút Thêm -->
    <div class="header-container">
      <button class="add-btn" @click="openAddModal">Thêm</button>
    </div>

    <!-- Bảng danh sách -->
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Country</th>
          <th>Number of Employees</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in paginatedData" :key="index">
          <td>{{ user.Name }}</td>
          <td>{{ user.City }}</td>
          <td>{{ user.Country }}</td>
          <td>{{ user.NumberofEmployees }}</td>
          <td>
            <button class="edit-btn" @click="openEditModal(index)">Sửa</button>
            <button class="delete-btn" @click="deleteUser(index)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Phân trang -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Trước</button>
      <span>Trang {{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Sau
      </button>
    </div>

    <!-- Modal nhập liệu -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>{{ isEditing ? "Add Job Category" : "Add Job Category" }}</h3>

        <div class="form-group">
          <label for="Name">Shift Name<span class="required">*</span></label>
          <input
            v-model="formData.Name"
            type="text"
            id="Name"
            placeholder="Name"
            class="form-input"
          />
        </div>
        <div class="working-hours">
          <div class="time-input">
            <label>From</label>
            <input type="time" value="09:00" />
          </div>
          <div class="time-input">
            <label>To</label>
            <input type="time" value="17:00" />
          </div>
          <div class="duration">
            <label>Duration Per Day</label>
            <span>8.00</span>
          </div>
        </div>
        <div class="assigned-employees">
          <label>Assigned Employees</label>
          <input type="text" placeholder="Type for hints..." />
        </div>

        <div class="form-actions">
          <button @click="closeModal" class="cancel-btn">Cancel</button>
          <button @click="saveUser" class="save-btn">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      rowsPerPage: 5,
      users: [{ name: "Intern Frontend", currency: "VND" }],
      showModal: false,
      isEditing: false,
      editIndex: null,
      formData: { name: "", currency: "" },
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.rowsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      return this.users.slice(start, start + this.rowsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    openAddModal() {
      this.showModal = true;
      this.isEditing = false;
      this.formData = { name: "", currency: "" };
    },
    openEditModal(index) {
      this.showModal = true;
      this.isEditing = true;
      this.editIndex = index;
      this.formData = { ...this.users[index] };
    },
    saveUser() {
      if (this.isEditing) {
        this.users[this.editIndex] = { ...this.formData };
      } else {
        this.users.push({ ...this.formData });
      }
      this.closeModal();
    },
    deleteUser(index) {
      this.users.splice(index, 1);
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      this.formData.JobSpecification = file;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.working-hours-container {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    max-width: 500px;
}
.working-hours {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
}
.time-input, .duration {
    display: flex;
    flex-direction: column;
}
input[type="time"], input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.assigned-employees {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
input[type="text"] {
    width: 100%;
}
/* Cấu trúc chung */
.container {
  max-width: 1440px;
  margin: 20px auto;
  font-family: sans-serif;
}

/* Header */
.header-container {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}

.add-btn {
  background-color: green;
  color: white;
  border-radius: 20px;
  width: 150px;
  height: 50px;
  font-size: 15px;
  border: none;
  cursor: pointer;
}

/* Bảng dữ liệu */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

/* Nút hành động */
button {
  padding: 8px 12px;
  cursor: pointer;
}

.edit-btn {
  background-color: green;
  color: white;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  margin: 5px;
}

.delete-btn {
  background-color: red;
  color: white;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  margin: 5px;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination span {
  margin: 0 10px;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  width: 500px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 15px;
}

/* Form input */
.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: 500;
  display: block;
}

.required {
  color: red;
  margin-left: 5px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

/* Nút hành động trong modal */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.cancel-btn {
  border: 1px solid #88c057;
  color: #88c057;
  padding: 8px 20px;
  border-radius: 20px;
  background: white;
  cursor: pointer;
}

.save-btn {
  background: #88c057;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
}
</style>
