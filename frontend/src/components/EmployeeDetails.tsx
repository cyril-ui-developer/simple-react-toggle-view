import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import { fetchEmployee, fetchEmployeeTeammates } from '../services/api';

const EmployeeDetails = () => {
    const [employee, setEmployee] = React.useState<EmployeeProps>();
    const [isLoading, setIsLoading] = React.useState(false);
    const [employeeTeammates, setEmployeeTeammates] = React.useState<EmployeeProps[]>([]);
    const history = useHistory();
    const { id } = useParams<{ id: string }>();

    React.useEffect(() => {
        const loadEmployyes = async () => {
        setIsLoading(loading => !loading);
        const employeeData = await fetchEmployee(id);
        setEmployee(employeeData ?.employee)
        setIsLoading(loading => !loading);

       // setIsLoading(loading => !loading);
        const employeeTeammatesData = await fetchEmployeeTeammates(employeeData?.employee ?.teamName);
        setEmployeeTeammates(employeeTeammatesData ?.employeeTeammates);
          //  setIsLoading(loading => !loading);
        }

        loadEmployyes();

    }, [id]);

    const onChangeForDetails = (id: string) => {
        history.push(`/employeedetails/${id}`)
    }
    //const filter = employeeTeammates?.map(tm => tm)
    console.log("filter3", employeeTeammates)
    //const { firstName } = employee?.fullName;

    return (
        <>
            <h1> Employee Details  </h1>
            <section>
                <h2>Fullname: {employee ?.fullName ?.firstName} {employee ?.fullName ?.middleName}  {employee ?.fullName ?.lastName}</h2>
                <h2>Manager: {employee ?.reportTo} </h2>
                <h2>Team: {employee ?.teamName} </h2>

                <h2>Teammates:</h2>



                {employeeTeammates ?.filter((tm: EmployeeProps) => tm.id !== id).map(t => (
                    <div key={t.id} onClick={() => onChangeForDetails(t.id)}> Firstname: {t.fullName.firstName}</div>
                ))}
            </section>
        </>
    )
}

export default EmployeeDetails;

type Fullname = {
    firstName: string; middleName: string; lastName: string;
}

type Contact = {
    email: string;
    tel: string;
    mobile: string;
}
type EmployeeProps = {
    id: string;
    fullName: Fullname;
    avatarUrl: string;
    contact?: Contact;
    jobTitle: string;
    department?: string;
    project?: string;
    hireDate?: string;
    reportTo?: string;
    employeeType?: string;
    socialMediaLinks: string[]
    teamName?: string;
  }