<template>
  <Sidebar />
  <Header />

  <div class="main-content">
    <router-view></router-view>
  </div>
</template>
  
  <script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
</script>
  
  <style scoped>
.main-content {
  margin-left: 250px;
  width: calc(100% - 250px);
  padding: 20px;
}
/* body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f3f4f6;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 80px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #ddd;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo span {
  font-weight: bold;
  color: #3ea9e0;
  font-size: 18px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
}

.menu li a {
  text-decoration: none;
  color: #3a3a3a;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.menu li a:hover {
  background-color: #3ea9e0;
  color: #ffffff;
  border-radius: 5px;
  padding: 15px 15px;
} */
</style>
  