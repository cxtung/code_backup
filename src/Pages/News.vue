<template>
  <div class="container">
    <div class="actions header-container">
      <button class="add-btn" @click="openDialog(false)">Thêm mới</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Banner</th>
          <th>Tên tin tức</th>
          <th>Nội dung</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="row.id">
          <td>{{ row.id }}</td>
          <td>
            <img
              v-if="row.banner"
              :src="urlImage + row.banner"
              alt="Banner"
              style="width: 100%; height: auto; max-height: 150px"
            />
            <span v-else>Không có ảnh</span>
          </td>
          <td>{{ row.name }}</td>
          <td>{{ row.description }}</td>
          <td>
            <button class="edit-btn" @click="openDialog(true, row)">Sửa</button>
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
  </div>

  <div>
    <v-btn color="primary" @click="openDialog(false)">Thêm mới</v-btn>

    <v-dialog v-model="open" max-width="600px">
      <v-card>
        <v-card-title
          >{{ isEditMode ? "Sửa" : "Thêm mới" }} thông tin</v-card-title
        >
        <v-card-text>
          <v-text-field label="Tiêu đề (EN)" v-model="currentRow.nameEn" />
          <v-text-field label="Tiêu đề (VI)" v-model="currentRow.nameVi" />
          <v-text-field
            label="Nội dung ngắn (EN)"
            v-model="currentRow.shortDescriptionEn"
          />
          <v-text-field
            label="Nội dung ngắn (VI)"
            v-model="currentRow.shortDescriptionVi"
          />

          <quill-editor v-model="currentRow.descriptionEn" />
          <quill-editor v-model="currentRow.descriptionVi" />

          <v-select
            label="Trạng thái"
            v-model="currentRow.status"
            :items="['ACTIVE', 'INACTIVE', 'DELETED', 'BLOCKED']"
          />
          <v-text-field
            label="Người xem"
            type="number"
            v-model.number="currentRow.viewer"
          />

          <v-file-input
            label="Ảnh banner"
            @change="(e) => handleFileChange('banner', e)"
          />
          <v-file-input
            label="Ảnh chính"
            @change="(e) => handleFileChange('image', e)"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn @click="handleCloseDialog">Hủy</v-btn>
          <v-btn color="primary" @click="handleSaveNews">{{
            isEditMode ? "Cập nhật" : "Lưu"
          }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { urlImage } from "../config/Url";
import { QuillEditor } from "@vueup/vue-quill";

export default {
  components: { QuillEditor },
  setup() {
    const rows = ref([]);
    const open = ref(false);
    const isEditMode = ref(false);
    const currentRow = ref({
      nameEn: "",
      nameVi: "",
      shortDescriptionEn: "",
      shortDescriptionVi: "",
      descriptionEn: "",
      descriptionVi: "",
      status: "",
      viewer: 1,
      image: null,
      banner: null,
    });

    const fetchNews = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://api-hrm.sharework-academy.com/api/news`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        rows.value = response.data.content || [];
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    const openDialog = (editMode, row = null) => {
      isEditMode.value = editMode;
      if (editMode && row) {
        currentRow.value = { ...row };
      } else {
        currentRow.value = {
          nameEn: "",
          nameVi: "",
          shortDescriptionEn: "",
          shortDescriptionVi: "",
          descriptionEn: "",
          descriptionVi: "",
          status: "",
          viewer: 1,
          image: null,
          banner: null,
        };
      }
      open.value = true;
    };
    const handleCloseDialog = () => {
      open.value = false;
    };
    const handleSaveNews = () => {
      console.log("Saving news:", currentRow.value);
    };
    onMounted(fetchNews);

    return { rows, open, isEditMode, currentRow, urlImage, openDialog };
  },
};
</script>

<style scoped>
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
  width: 400px;
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
