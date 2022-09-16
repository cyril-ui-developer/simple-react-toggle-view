import React from 'react';


import Employee from './Employee';
import { fetchEmployees } from '../services/api';
//import EmployeeDetails from '../context/employees';
//import EmployeesContext from '../context/employees';
import  {useCount, loadEmployeesAction} from '../context/employees';


const EmployeesList = () => {

    const { state, dispatch }  = useCount();
    // console.log("useCount()", loadEmployeesAction([]))
    const [employees, setEmployees] = React.useState<EmployeesListProps[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);
  // console.log("state state ", state )
  console.log("state context", state)

    // React.useEffect(() => {
    //     const loadEmployyes = async () => {
    //         setIsLoading(loading => !loading);
    //         const employeesData = await fetchEmployees();
    //         setEmployees(employeesData?.employees?.data);
    //       // dispatch({type: "LOAD_EMPLOYEES", employeesDataContext: employeesData?.employees?.data })
    //      dispatch(loadEmployeesAction(employeesData?.employees?.data))
    //         console.log("test",  employeesData?.employees?.data);
    //         setIsLoading(loading => !loading);
    //     }

    //     loadEmployyes();
    // }, []);

    return (
        <>
            {isLoading && (
                <progress className='progress is-medium is-link' max='100'>
                    60%
              </progress>
            )}
            <div className="py-10 h-screen bg-gray-800 px-2" >
                <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden md:max-w-lg">
                    <div className="md:flex">
                        <div className="w-full p-4">
                            <div className="relative"> <input type="text" className="w-full h-12 rounded focus:outline-none px-3 focus:shadow-md" placeholder="Filter by name or job title..." /> <i className="fa fa-search absolute right-3 top-4 text-gray-300"></i> </div>

                            {state && state.employeesDataContext.map(employee => (
                            // <div>Fullname: { employee?.fullName?.firstName}</div>   
                                // <Employee key={employee.id} id={employee.id} fullName={employee.fullName} avatarUrl={employee.avatarUrl} jobTitle={employee.jobTitle} />
                                <Employee {...employee} />

                           ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <EmployeeDetails /> */}
        </>
    )

}

export default EmployeesList;

type Fullname = {
    firstName: string; middleName: string; lastName: string;
}

type Contact = {
    email: string;
    tel: string;
    mobile: string;
}
type EmployeesListProps = {
    id: string;
    fullName: Fullname;
    avatarUrl: string;
    contact: Contact;
    jobTitle: string;
    department: string;
    project: string;
    hireDate: string;
    reportTo: string;
    employeeType: string;
    socialMediaLinks: string[]
}

type EmployeeProps = {
    id: string;
    fullName: Fullname;
    avatarUrl: string;
    contact: Contact;
    jobTitle: string;
    department: string;
    project: string;
    hireDate: string;
    reportTo: string;
    employeeType: string;
    socialMediaLinks: string[]
    teamName: string;
}