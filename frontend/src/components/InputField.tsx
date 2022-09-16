import React from 'react';

const InputField = ({
    label,
    type,
    fieldName,
    placeholder,
    helpText,
    required,
    pattern,
    handleFieldChange
}: FormFieldInputProps) => {
    const [value, setValue] = React.useState('');

    const handleOnInputChange = (e: any) => {
        setValue(e.target.value);
        if (handleFieldChange) {
            handleFieldChange(e.target.name, e.target.value);
        }
    };

    return (
    //     <div className="field">
    //     <label className="label">{label}</label>
    //     <div className="control">
    //       <input
    //         className="input"
    //         type={type}
    //         placeholder={placeholder}
    //         name={fieldName}
    //         value={value}
    //         onChange={handleOnInputChange}
    //         required={required || false}
    //         pattern={pattern}
    //       />
    //     </div>
    //     {
    //       helpText &&
    //       <p className="help">{helpText}</p>
    //     }
    //   </div>
        <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">{label}</label>
            <input
                type={type}
                name={fieldName}
                value={value}
                id={fieldName}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                placeholder={placeholder}
                required={required || false}
                pattern={pattern}
                onChange={handleOnInputChange}
            />
                {
          helpText &&
          <p className="help">{helpText}</p>
        }
        </div>
    )
}

export default InputField;


type FormFieldInputProps = {
    label: string;
    type: string;
    fieldName: string;
    placeholder: string;
    helpText?: string;
    required?: boolean;
    pattern?: string;
    handleFieldChange: (name: string, value: string) => void;
}