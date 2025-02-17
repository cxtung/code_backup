!<template>
    <Filter />
  
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
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.name }}</td>
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
          {
            username: "tungcx",
            role: "Thực tập sinh",
            name: "Cao Xuân Tùng",
            status: "Đang hoạt động",
          },
          {
            username: "linhht",
            role: "Nhân viên",
            name: "Hà Tường Linh",
            status: "Đã nghỉ việc",
          },
          {
            username: "huyvq",
            role: "Quản lý",
            name: "Vũ Quốc Huy",
            status: "Đang hoạt động",
          },
          {
            username: "anhnk",
            role: "Thực tập sinh",
            name: "Nguyễn Khánh Anh",
            status: "Đang hoạt động",
          },
          {
            username: "minhpt",
            role: "Nhân viên",
            name: "Phạm Tuấn Minh",
            status: "Đang hoạt động",
          },
          {
            username: "ngoclt",
            role: "Nhân viên",
            name: "Lê Thị Ngọc",
            status: "Đã nghỉ việc",
          },
          {
            username: "hieupt",
            role: "Thực tập sinh",
            name: "Phan Trọng Hiếu",
            status: "Đang hoạt động",
          },
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
    },
  };
  </script>
  <script setup>
  import Filter from "../../components/Filter.vue";
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