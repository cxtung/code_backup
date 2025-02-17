import { createWebHistory, createRouter } from 'vue-router'

import Manager from "./Layouts/Manager.vue"
import Users from './Pages/Admin/Users.vue'
import JobTitles from './Pages/Admin/JobTitles.vue'
import EmploymentStatus from './Pages/Admin/EmploymentStatus.vue'
import Education from './Pages/Admin/Education.vue'
import EmailConfiguration from './Pages/Admin/EmailConfiguration.vue'
import GeneralInformation from './Pages/Admin/GeneralInformation.vue'
import JobCategories from './Pages/Admin/JobCategories.vue'
import Languages from './Pages/Admin/Languages.vue'
import Licenses from './Pages/Admin/Licenses.vue'
import Locations from './Pages/Admin/Locations.vue'
import Memberships from './Pages/Admin/Memberships.vue'
import PayGrades from './Pages/Admin/PayGrades.vue'
import Skills from './Pages/Admin/Skills.vue'
import Structure from './Pages/Admin/Structure.vue'
import WorkShifts from './Pages/Admin/WorkShifts.vue'
import PIM from './Pages/PIM.vue'
import Admin from './Pages/Admin.vue'
import AddEmployee from './Pages/PIM/AddEmployee.vue'
import CustomFields from './Pages/PIM/CustomFields.vue'
import DataImport from './Pages/PIM/DataImport.vue'
import OptionalFields from './Pages/PIM/OptionalFields.vue'
import ReportingMethods from './Pages/PIM/ReportingMethods.vue'
import Reports from './Pages/PIM/Reports.vue'
import TerminationReasons from './Pages/PIM/TerminationReasons.vue'
import Login from './Pages/Login.vue'

const routes = [
    {
        path: "/",
        name: "manager",
        component: Manager,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                name: "Admin",
                component: Admin,
                meta: { requiresAuth: true },
                children: [
                    { path: '/', name: "User", component: Users },
                    { path: '/admin/job-title', name: "jobTitle", component: JobTitles },
                    { path: '/admin/pay-grades', name: "payGrades", component: PayGrades },
                    { path: '/admin/employment-status', name: "employmentStatus", component: EmploymentStatus },
                    { path: '/admin/education', name: "Education", component: Education },
                    { path: '/admin/email-configuration', name: "EmailConfiguration", component: EmailConfiguration },
                    { path: '/admin/organization/general-Information', name: "GeneralInformation", component: GeneralInformation },
                    { path: '/admin/job-categories', name: "JobCategories", component: JobCategories },
                    { path: '/admin/languages', name: "Languages", component: Languages },
                    { path: '/admin/licenses', name: "Licenses", component: Licenses },
                    { path: '/admin/organization/location', name: "Locations", component: Locations },
                    { path: '/admin/memberships', name: "Memberships", component: Memberships },
                    { path: '/admin/skills', name: "Skills", component: Skills },
                    { path: '/admin/structure', name: "Structure", component: Structure },
                    { path: '/admin/work-shifts', name: "WorkShifts", component: WorkShifts },
                    { path: '/admin/configuration/localization', name: "Localization", component: () => import('./Pages/Admin/Localization.vue') },
                    { path: '/admin/configuration/modules', name: "Modules", component: () => import('./Pages/Admin/Modules.vue') },
                ]
            },
            {
                name: 'Leave',
                path: '/leave/list-Leave',
                component: () => import('./Pages/Manager_leave.vue'),
                meta: { requiresAuth: true },
                children: [
                    {
                        path: '/leave/apply-Leave',
                        name: 'ApplyLeave',
                        component: () => import('./Pages/Leave/ApplyLeave.vue'),
                    },
                    {
                        path: '/leave/list-Leave',
                        name: 'ListLeave',
                        component: () => import('./Pages/Leave/LeaveList.vue'),
                    }
                ]
            },
            { path: '/blogs', name: "Blogs", component: () => import('./Pages/Blogs.vue'), meta: { requiresAuth: true } },
            { path: '/notification', name: "notification", component: () => import('./Pages/Notification.vue'), meta: { requiresAuth: true } },
            { path: '/news', name: "News", component: () => import('./Pages/News.vue'), meta: { requiresAuth: true } },
            { path: '/myleave', name: "myleave", component: () => import('./Pages/Manager_leave.vue'), meta: { requiresAuth: true } }
        ]
    },
    { path: '/login', name: "login", component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');

    if (to.meta.requiresAuth && !token) {
        next('/login');
    } else if (to.path === '/login' && token) {
        next('/');
    } else {
        next();
    }
});

export default router;
