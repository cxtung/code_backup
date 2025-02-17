!<template>
  <div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>Hình ảnh</th>
        <th>Banner</th>
        <th>tên</th>
        <th >Mô tả</th>
        <th>lượt xem</th>
        <th>Trạng thái</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(blogs, index) in paginatedData" :key="index">
        <td>{{ blogs.image }}</td>
        <td>{{ blogs.banner }}</td>
        <td>{{ blogs.name }}</td>
        <td>{{ blogs.shortDescription }}</td>
        <td>{{ blogs.viewer }}</td>
        <td>{{ blogs.status }}</td>
        <td>
          <button class="edit-btn">Sửa</button>
          <button class="delete-btn">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
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
import axios from "axios";
import { Apiurl } from "../config/Url";
export default {
  data() {
    return {
      currentPage: 1,
      rowsPerPage: 5,
      blogs: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.blogs.length / this.rowsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      return this.blogs.slice(start, end);
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
        const response = await axios.get(`${Apiurl}blogs`, {
          params: {
            page: this.currentPage - 1,
            size: this.rowsPerPage,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        this.blogs = response.data.content || [];
        console.log("Data loaded:", this.blogs);
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

  
<style scoped>
.table-responsive {
  overflow-x: auto;
  margin: 20px 0;
  box-shadow: 0 0 0 1px #ddd; /* Thêm viền cho container */
  border-radius: 4px;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 600px; /* Giữ độ rộng tối thiểu cho bảng */
}

th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-weight: 600;
}

/* Responsive styles */
@media (max-width: 768px) {
  .table-responsive {
    box-shadow: none; /* Bỏ viền trên mobile */
  }
  
  table {
    min-width: unset;
  }

  thead {
    display: none;
  }

  tr {
    display: block;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
  }

  td:last-child {
    border-bottom: 0;
  }

  td::before {
    content: attr(data-label);
    font-weight: 600;
    margin-right: 1rem;
    text-align: left;
    color: rgba(0, 0, 0, 0.8);
  }
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