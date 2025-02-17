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
      // menuItems: [
      //   { label: "User Management", submenu: ["User"] },
      //   {
      //     label: "Job",
      //     submenu: [
      //       "Job title",
      //       "Pay Grades",
      //       "Employment Status",
      //       "Job Categories",
      //       "Work Shifts",
      //     ],
      //   },
      //   { label: "Organization", submenu: ["General Information", "Strucure"] },
      //   {
      //     label: "Qualifications",
      //     submenu: [
      //       "Skills",
      //       "Education",
      //       "Licenses",
      //       "Languages",
      //       "Memberships",
      //     ],
      //   },
      //   { label: "Nationalities" },
      //   { label: "Corporate Branding" },
      //   {
      //     label: "Configuration",
      //     submenu: [
      //       "Email Configuration",
      //       "Email Subcriptions",
      //       "Localization",
      //       "Lauguage Packages",
      //       "Modules",
      //       "Social Media Authetication",
      //       "Register OAuth Client",
      //       " LDAP Configuration",
      //     ],
      //   },
      // ],
      menuItems: [
        {
          label: "User Management",

          submenu: [{ label: "User", route: "/" }],
        },
        {
          label: "Job",
          submenu: [
            { label: "Job title", route: "/admin/job-title" },
            { label: "Pay Grades", route: "/admin/pay-grades" },
            { label: "Employment Status", route: "/admin/employment-status" },
            { label: "Job Categories", route: "/admin/job-categories" },
            { label: "Work Shifts", route: "/admin/work-shifts" },
          ],
        },
        {
          label: "Organization",
          route: "/organization",
          submenu: [
            {
              label: "General Information",
              route: "/admin/organization/general-Information",
            },
            { label: "Location", route: "/admin/organization/location" },
            { label: "Structure", route: "/admin/organization/structure" },
          ],
        },
        { label: "Nationalities", route: "/nationalities" },
        { label: "Corporate Branding", route: "/corporate-branding" },
        // {
        //   label: "Configuration",
        //   submenu: [
        //     {
        //       label: "Email Configuration",
        //       route: "/admin/configuration/email-configuration",
        //     },
        //     {
        //       label: "Email Subcriptions",
        //       route: "/admin/configuration/email-subcriptions",
        //     },
        //     { label: "Localization", route: "/admin/configuration/localization" },
        //     {
        //       label: "Lauguage Packages",
        //       route: "/admin/configuration/language-packages",
        //     },
        //     { label: "Modules", route: "/admin/configuration/modules" },
        //     {
        //       label: "Social Media Authetication",
        //       route: "/admin/configuration/social-media-authetication",
        //     },
        //     {
        //       label: "Register OAuth Client",
        //       route: "/admin/configuration/register-oauth-client",
        //     },
        //     {
        //       label: "LDAP Configuration",
        //       route: "/admin/configuration/ldap-configuration",
        //     },
        //   ],
        // },
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
