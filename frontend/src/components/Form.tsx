import React from 'react';
// import { storage } from '../firebase/firebase';

import InputField from './InputField';
import { useCount, addEmployeesAction } from '../context/employees';
import { postEmployee } from '../services/api';
import { number } from 'prop-types';
import FileUpload from './FileUpload'


// type File = {
//   lastModified?: number;
//   name?: string;
//  // ​size?: number;
//   type?: string
//   size?: number;
//   slice?: string;
//  // ​webkitRelativePath?: string
//  arrayBuffer: string;  stream: string; text: string;
// }>
const generateUUID = ()=> (Date.now() + Math.floor(Math.random() * 100)).toString();


const Form = ({ handleFormSubmit, formFields }: FormProps) => {

  const uuid = generateUUID()
  const { state, dispatch } = useCount();
  const [formValues, setFormValues] = React.useState<FormValuesProps>({
    firstName: '', middleName: '', lastName: '', avatarUrl: '', jobTitle: ''
  });
const [fileUrrl, setFileUrl ] =  React.useState({})
  const getFileUploadUrl = (fireBaseUrl: any)=>{
  console.log("urrlval", fireBaseUrl)
  setFileUrl(fireBaseUrl)
  console.log("fileUrrl",fileUrrl)
  }
  const handleFormValuesChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    if (handleFormSubmit) {
      console.log("urrlval", fileUrrl)
      const structureFormData = {
        id: uuid, 
        fullName: { firstName: formValues ?.firstName, middleName: formValues ?.middleName, lastName: formValues ?.lastName},
        avatarUrl: fileUrrl, jobTitle: formValues ?.jobTitle}

      handleFormSubmit(formValues);

      dispatch(addEmployeesAction((structureFormData as EmployeeProps)))
      postEmployee(structureFormData as EmployeeProps)
      //.then((response) => {
      //   console.log("response", response);
      // }, (error) => {
      //   console.log(error);
      // });

    }

  }

  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <FileUpload onGetFileUploadUrl={getFileUploadUrl} />
      <div className="w-full max-w-md bg-gray-800" >
        <form onSubmit={onFormSubmit} className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          {formFields.map(field => (
            <InputField key={field.fieldName} {...field} handleFieldChange={handleFormValuesChange} />
          ))}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  > Create Employee</button>
          </div>
        </form>
      </div>
    </section>


  )
}

export default Form;

type FormFieldsProps = {
  label: string;
  type: string;
  fieldName: string;
  placeholder: string;
  helpText?: string;
  required?: boolean;
  pattern?: string;
  //  handleFieldChange: (name: string, vvalue: string) => void;
}

type FormProps = {
  handleFormSubmit: ({ }) => void;
  formFields: FormFieldsProps[];
}

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
  project: string;
  hireDate: string;
  reportTo: string;
  employeeType: string;
  socialMediaLinks: string[]
  teamName: string;
}


type FormValuesProps = {
  firstName: string; middleName: string; lastName: string; avatarUrl: string; jobTitle: string;

}
