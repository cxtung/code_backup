<template>
  <div class="sidebar">
    <div class="logo" style="width: 100px;">
      <img src="../assets/logo.png" style="width: 200px" />
      <span></span>
    </div>
    <ul class="menu">
      <li v-for="item in menuItems" :key="item.name">
        <router-link :to="item.router">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      menuItems: [
        { name: "Admin", router: "/" },
        { name: "PIM", router: "/PIM" },
        { name: "Leave", router: "/leave/list-Leave" },
        { name: "Time" },
        { name: "Notification", router: "/notification" },
        { name: "News", router: "/news" },
        { name: "Blogs", router: "/blogs" },
      ],
    };
  },
};
</script>
  
  <style scoped>
.sidebar {
  font-family: sans-serif;
  border: solid 1px #e1e1e1;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 250px;
  background-color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.logo {
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 10px;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 15px;
}

.menu li a {
  text-decoration: none;
  color: #3a3a3a;
}
</style>
  