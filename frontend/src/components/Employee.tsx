import React from 'react';
import { useHistory } from "react-router-dom";

const Employee = ({ id, fullName, avatarUrl, jobTitle}: EmployeeProps) => {
    const history = useHistory();
    const onChangeForDetails = ()=>{
        history.push(`/employeedetails/${id}`)
    }
   
    return (
    <li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition" onClick={onChangeForDetails}>
        <div className="flex ml-2"> <img src={avatarUrl} width="40" height="40" className="rounded-full" />
            <div className="flex flex-col ml-2"> <span className="font-medium text-black">{fullName?.firstName}{' '}{fullName?.lastName}</span> <span className="text-sm text-gray-400 truncate w-32">{jobTitle}</span> </div>
        </div>
        <div className="flex flex-col items-center"> <span className="text-gray-300">11:26</span> <i className="fa fa-star text-green-400"></i> </div>
    </li>
)
    }
export default Employee;

type FullnameProps = {
    firstName: string; middleName: string; lastName: string;
}
// type EmployeeProps = {
//     id: string;
//     fullName: FullnameProps;
//     jobTitle: string;
//     avatarUrl: string;
// }

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
    contact: Contact;
    jobTitle: string;
    department: string;
    project?: string;
    hireDate: string;
    reportTo?: string;
    employeeType?: string;
    socialMediaLinks?: string[]
    teamName?: string;
}