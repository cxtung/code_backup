<template>
  <div class="filters">
    <input type="text" placeholder="Username" />
    <select>
      <option>Vị trí làm việc</option>
      <option>Nhân viên chính thức</option>
      <option>Quản lý</option>
      <option>Thực tập sinh</option>
    </select>
    <input type="text" placeholder="Employee Name" />
    <select>
      <option>Trạng thái</option>
      <option>Đang làm việc</option>
      <option>Nghỉ làm</option>
    </select>
    <button class="btn">Reset</button>
    <button class="btn">Search</button>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.filters input,
.filters select,
.filters .btn {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  flex: 1 1 calc(33.33% - 10px); /* Đặt kích thước động cho các phần tử */
  min-width: 150px; /* Đảm bảo kích thước tối thiểu */
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .filters input,
  .filters select,
  .filters .btn {
    flex: 1 1 calc(50% - 10px); /* Hai cột trên màn hình nhỏ */
  }
}

@media (max-width: 480px) {
  .filters input,
  .filters select,
  .filters .btn {
    flex: 1 1 100%; 
  }
}
</style>
  