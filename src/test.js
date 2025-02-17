import { createWebHistory, createRouter } from 'vue-router'

import Manager from "./Layouts/Manager.vue"
import Users from './Pages/Admin/Users.vue'
import JobTitles from './Pages/Admin/JobTitles.vue'
import EmploymentStatus from './Pages/Admin/EmploymentStatus.vue'
import Education from './Pages/Admin/Education.vue'
import EmailConfiguration from './Pages/Admin/EmailConfiguration.vue'
import GenerralInformation from './Pages/Admin/GeneralInformation.vue'
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
const routes = [
    {
        path: "/",
        name: "manager",
        component: Manager,
        children: [
            {
                path: '/', name: "Admin", component: Admin, children: [
                    { path: '/', name: "User", component: Users },
                    { path: '/admin/job-title', name: "jobTitle", component: JobTitles },
                    { path: '/admin/pay-grades', name: "payGrades", component: () => import('./Pages/Admin/PayGrades.vue') },
                    { path: '/admin/employment-status', name: "employmentStatus", component: () => import('./Pages/Admin/EmploymentStatus.vue') },
                    { path: '/admin/education', name: "Education", component: Education },
                    { path: '/admin/email-configuration', name: "EmailConfiguration", component: EmailConfiguration },
                    { path: '/admin/organization/general-Information', name: "GeneralInformation", component: GenerralInformation },
                    { path: '/admin/job-categories', name: "JobCategories", component: JobCategories },
                    { path: '/admin/languages', name: "Languages", component: Languages },
                    { path: '/admin/licenses', name: "Licenses", component: Licenses },
                    { path: '/admin/organization/location', name: "Locations", component: Locations },
                    { path: '/admin/memberships', name: "Memberships", component: Memberships },
                    { path: '/admin/pay-grades', name: "PayGrades", component: PayGrades },
                    { path: '/admin/skills', name: "Skills", component: Skills },
                    { path: '/admin/structure', name: "Structure", component: Structure },
                    { path: '/admin/work-shifts', name: "WorkShifts", component: WorkShifts },
                    { path: '/nationalities', name: "Nationalities", component: () => import('./Pages/Admin/Nationalities.vue') },
                    {
                        path: '/corporate-branding', name: "CorporateBranding", component: () => import('./Pages/Admin/CorporateBranding.vue')
                    },
                    {
                        path: '/admin/configuration/email-configuration', name: "EmailConfiguration", component: () => import('./Pages/Admin/EmailConfiguration.vue')
                    },
                    {
                        path: '/admin/configuration/email-subcriptions', name: "EmailSubcriptions", component: () => import('./Pages/Admin/EmailSubcriptions.vue')
                    },
                    { path: '/admin/configuration/localization', name: "Localization", component: () => import('./Pages/Admin/Localization.vue') },
                    {
                        path: '/admin/configuration/social-media-authentication', name: "SocialMediaAuthentication", component: () => import('./Pages/Admin/SocialMediaAuthentication.vue')
                    },
                    {
                        path: '/admin/configuration/language-packages', name: "LanguagePackages", component: () => import('./Pages/Admin/LanguagePackages.vue')
                    },
                    {
                        path: '/admin/configuration/modules', name: "Modules", component: () => import('./Pages/Admin/Modules.vue')
                    },
                    {
                        path: '/admin/configuration/register-oauth-client', name: "RegisterOauthClient", component: () => import('./Pages/Admin/RegisterOauthClient.vue')
                    },
                    {
                        path: '/admin/configuration/ldap-configuration', name: "LdapConfiguration", component: () => import('./Pages/Admin/LdapConfiguration.vue')
                    }
                ]
            },
            //đường dẫn leave
            {
                name: 'Leave',
                path: '/leave/list-Leave',
                component: () => import('./Pages/Manager_leave.vue'),
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
           
            { path: '/blogs', name: "Blogs", component: () => import('./Pages/Blogs.vue') },
            { path: '/notification', name: "notification", component: () => import('./Pages/Notification.vue') },
            { path: '/news', name: "news", component: () => import('./Pages/News.vue') },
            { path: '/myleave', name: "myleave", component: () => import('./Pages/Manager_leave.vue') },

        ]



    },
    { path: '/login', name: "login", component: () => import('./Pages/Login.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router