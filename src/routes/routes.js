import SuperAdminDashboard from "../views/superAdmin";
import ReceptionDashboard from "../views/reception";
import AddPatient from "../views/reception/AddPatient";
import ReceptionPatients from "../views/reception/Patients";
import DoctorDashboard from "../views/doctor";
import DoctorPatients from "../views/doctor/Patients";
import PatientDetails from "../views/doctor/PatientDetails";
import LaboratoryDashboard from "../views/laboratory";
import LabTests from "../views/laboratory/LabTests";
import PharmacyDashboard from "../views/pharmacy";
import Prescriptions from "../views/pharmacy/Prescriptions";
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
const reception = [
    {
        path: "/index",
        name: "Home",
        icon: "fas fa-home text-primary",
        component: ReceptionDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['reception']
    },
    {
        path: "/patients",
        name: "Patients",
        icon: "fas fa-users text-primary",
        component: ReceptionPatients,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['reception']
    },
    {
        path: "/patients/new",
        name: "Add Patient",
        icon: "fas fa-user-plus text-primary",
        component: AddPatient,
        layout: "/dashboard",
        display: false,
        allowedRoles: ['reception']
    }
];
const doctor = [
    {
        path: "/index",
        name: "Home",
        icon: "fas fa-home text-primary",
        component: DoctorDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['doctor']
    },
    {
        path: "/patients",
        name: "Patients",
        icon: "fas fa-users text-primary",
        component: DoctorPatients,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['doctor']
    },
    {
        path: "/patients/:patientId",
        name: "Patients",
        icon: "fas fa-users text-primary",
        component: PatientDetails,
        layout: "/dashboard",
        display: false,
        allowedRoles: ['doctor']
    }
];
const laboratory = [
    {
        path: "/index",
        name: "Home",
        icon: "fas fa-home text-primary",
        component: LaboratoryDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['laboratory']
    },
    {
        path: "/lab-tests",
        name: "Lab Tests",
        icon: "fas fa-file-alt text-primary",
        component: LabTests,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['laboratory']
    }
];
const pharmacy = [
    {
        path: "/index",
        name: "Home",
        icon: "fas fa-home text-primary",
        component: PharmacyDashboard,
        layout: "/dashboard",
        display: true,
        allowedRoles: ['pharmacy']
    },
    {
        path: "/prescriptions",
        name: "Prescriptions",
        icon: "fas fa-file-alt text-primary",
        component: Prescriptions,
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
        allowedRoles: ['superAdmin', 'reception', 'doctor', 'laboratory']
    }
];

const routes = [...common, ...superAdmin, ...reception, ...doctor, ...laboratory, ...pharmacy];

export default routes;