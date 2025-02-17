<template>
  <header class="header">
    <div class="header-left">Admin / User Management</div>
    <div class="header-right">
      <div class="user-info">
        <img src="../assets/avt.png" alt="User Avatar" />
        <span>Name user</span>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(62, 169, 224);
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.header-left {
  font-size: 18px;
  font-weight: bold;
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right .user-info {
  border: solid rgba(255, 255, 255, 0.15) 1px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  padding: 5px 10px;
}

.header-right .user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .header-left {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .header-right {
    width: 100%;
    justify-content: space-between;
  }

  .header-right .user-info {
    width: auto;
    padding: 5px;
  }

  .header-right .user-info span {
    display: none; /* Ẩn tên người dùng trên màn hình nhỏ */
  }
}

@media (max-width: 480px) {
  .header-left {
    font-size: 14px;
  }

  .header-right .user-info img {
    width: 30px;
    height: 30px;
  }
}
</style>