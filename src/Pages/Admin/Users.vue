!<template>
  <Filter />
<Button class="add-btn">Thêm</Button>
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>User Role</th>
        <th>Employee Name</th>
        <th>Trạng thái</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in paginatedData" :key="index">
        <td>{{ user.userName }}</td>
        <td>{{ user.empNumber }}</td>
        <td>{{ user.modifiedUserId }}</td>
        <td>{{ user.status }}</td>
        <td>
          <button class="edit-btn">Sửa</button>
          <button class="delete-btn">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Pagination -->
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Trước</button>
    <span>Trang {{ currentPage }} / {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Sau
    </button>
  </div>
</template>

<script  >
export default {
  data() {
    return {
      currentPage: 1,
      rowsPerPage: 5,
      users: [
    
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.rowsPerPage); // Tổng số trang
    },
    paginatedData() {
      // Dữ liệu của trang hiện tại
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.users.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    async fetchData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${Apiurl}users`, {
          params: {
            page: this.currentPage - 1,
            size: this.rowsPerPage,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.users = response.data.content || [];
        console.log("Data loaded:", this.users);
      } catch (error) {
        console.error("Error fetching data:", error.response || error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<script setup>
import Filter from "../../components/Filter.vue";
import axios from "axios";
import { Apiurl } from "../../config/Url";
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
  font-weight: bold;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}

.edit-btn {
  background-color: green;
  color: white;
  border-radius: 5px;
  width: 50px;
  height: 30px;
  background-color: green;
  font-size: 15px;
  margin: 5px;
  border-radius: 20px;
  border: solid black 0px;
}
.add-btn {
  margin-left: auto;
  margin-right: 20px;
  display: block;
  background-color: green;
  color: white;
  border-radius: 5px;
  width:10%;
  height: 30px;
  background-color: green;
  font-size: 15px;
  margin: 5px;
  border-radius: 20px;
  border: solid black 0px;
}
.delete-btn {
  background-color: red;
  color: white;
  border-radius: 5px;
  width: 50px;
  height: 30px;
  background-color: red;
  font-size: 15px;
  margin: 5px;
  border-radius: 20px;
  border: solid black 0px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 5px 10px;
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
</style>