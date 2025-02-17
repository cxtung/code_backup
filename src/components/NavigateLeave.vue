<template>
  <div class="horizontal-menu">
    <ul>
      <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ active: activeIndex === index }"
        @mouseenter="hoverMenu(index)"
        @mouseleave="hoverMenu(null)"
        @click="navigateTo(item.route)"
      >
        <div class="menu-item">
          {{ item.label }}
          <span v-if="item.submenu" class="dropdown-icon">▼</span>
        </div>

        <ul v-if="item.submenu && activeIndex === index" class="submenu">
          <li
            v-for="(subItem, subIndex) in item.submenu"
            :key="subIndex"
            @click.stop="navigateTo(subItem.route)"
          >
            {{ subItem.label }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      activeIndex: null,
      menuItems: [
        {
          label: "Apply",
          route: "/leave/apply-Leave",
        },
        {
          label: "Apply",
          route: "/leave/My-Leave",
        },
      
        {
          label: "Entitlement",
          submenu: [
            { label: "Add entitlements", route: "/leave/Add-entitlement" },
            { label: "Employee entitlements", route: "/leave/employee-entitlement" },
            { label: "My entitlements", route: "/leave/My-entitlements" },
          ],
        },
        { label: "Leave list", route: "/leave/leave-list" },
        { label: "Assign leave", route: "/leave/assignLeave" },
      ],  
    };
  },
  methods: {
    hoverMenu(index) {
      this.activeIndex = index;
    },
    navigateTo(route) {
      if (route) {
        this.$router.push(route);
      }
    },
  },
};
</script>

<style scoped>
.horizontal-menu {
  font-family: sans-serif;

  background: #f9f9f9;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.horizontal-menu ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.horizontal-menu li {
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  color: #555;
  transition: color 0.3s ease;
}

.horizontal-menu li:hover {
  color: #3ea9e0;
}

.horizontal-menu .active {
  background-color: #fff4e6;
  border-radius: 5px;
  padding: 10px;
}

.menu-item {
  display: flex;
  align-items: center;
}

.dropdown-icon {
  margin-left: 5px;
  font-size: 12px;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  border-radius: 5px;
  display: block;
  flex-direction: column;
  min-width: 200px;
  z-index: 10;
}

.submenu li {
  padding: 5px 10px;
  cursor: pointer;
  white-space: nowrap;
}

.submenu li:hover {
  background-color: #3ea9e0;
  color: #fff;
  border-radius: 3px;
}
</style>
