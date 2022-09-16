import React from 'react';

// components
import Form from './Form';

// data
import data from './form-fields-data.json';

import  {useCount} from '../context/employees';

const CreateEmployee = () => {
    const [submittedFormValues, setSubmittedFormValues] = React.useState<EmployeeFormProps[]>([]);

    console.log("submir", submittedFormValues)
    return (
        <Form
        handleFormSubmit={(values:any) => setSubmittedFormValues([...submittedFormValues, values])}
        formFields={data.fields} />
    )
}

export default CreateEmployee;


type EmployeeFormProps = {
    label: string;
    type: string;
    fieldName: string;
    placeholder: string;
    helpText?: string;
    required?: boolean;
    pattern?: string;
}