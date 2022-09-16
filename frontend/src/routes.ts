// Components
import EmployeeDetails from './components/EmployeeDetails';
import EmployeesList from './components/EmployeesList';
import CreateEmployee from './components/CreateEmployee';



const routes = [
    {
        name: "EmployeesList",
        url: "/",
        exact:  true,
        component: EmployeesList
    },
    {
        name: "EmployeeDetails",
        url: "/employeedetails/:id",
        component: EmployeeDetails
    },
    {
        name: "CreateEmployee",
        url: "/createemployee",
        component: CreateEmployee
    },
];

export default routes;