import SuperAdminDashboard from "../views/superAdmin";
import ReceptionistDashboard from "../views/receptionist";
import DoctorDashboard from "../views/doctor";
import LaboratoryDashboard from "../views/laboratory";
import PharmacyDashboard from "../views/pharmacy";
import Login from "../views/common/Login";

const superAdmin = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: SuperAdminDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['superAdmin']
    }
];
const receptionist = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: ReceptionistDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['receptionist']
    }
];
const doctor = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: DoctorDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['doctor']
    }
];
const laboratory = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: LaboratoryDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['laboratory']
    }
];
const pharmacy = [
    {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: PharmacyDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['pharmacy']
    }
];
const common = [
    {
        path: "/login",
        name: "Login",
        icon: "fas fa-table text-primary",
        component: Login,
        layout: "/auth",
        display: false,
        allowedRoles: ['superAdmin', 'receptionist', 'doctor', 'laboratory']
    }
];

const routes = [...common, ...superAdmin, ...receptionist, ...doctor, ...laboratory, ...pharmacy];

export default routes;