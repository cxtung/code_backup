!<template>
    <div class="header-container">
      <button class="add-btn">Thêm công việc</button>
    </div>
  
    <table>
      <thead>
        <tr>
          <th>Tên công việc</th>
          <th>Mô tả việc làm</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in paginatedData" :key="index">
          <td>{{ user.jobTitles }}</td>
          <td>{{ user.jobDescription }}</td>
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
            jobTitles: "Intern Frontend",
            jobDescription: "Lập trình giao diện người dùng",
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
  .header-container {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
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