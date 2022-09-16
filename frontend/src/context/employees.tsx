import React, { createContext } from 'react';

import { fetchEmployees } from '../services/api';

export enum  ActionType  {
 LOAD_EMPLOYEES= 'LOAD_EMPLOYEES',
 ADD_EMPLOYEE= 'ADD_EMPLOYEE'
}

type LoadEmployees = {
  type: string,
  payload: EmployeeProps[] 
}

type AddEmployee = {
  type: string,
  payload: EmployeeProps 
}

export type Actions = LoadEmployees | AddEmployee;

type EmployeesState = {employeesDataContext: EmployeeProps[] }

type EmployeesProviderProps = {children: React.ReactNode}

 const initialState: EmployeesState = {
  employeesDataContext: []
 }

export interface Action {
  type: string
}

export interface LoadEmployeeAction extends Action {
  payload: EmployeeProps[]
}

export interface AddEmployeeAction extends Action {
  payload: EmployeeProps
}

// The Type Guard Functions
function isLoadEmployeeAction(action: Action): action is LoadEmployeeAction {
  return action.type === ActionType .LOAD_EMPLOYEES
}
export function isAddEmployeeAction(action: Action): action is AddEmployeeAction {
  return action.type === ActionType.ADD_EMPLOYEE
}

// Action creators
export const loadEmployeesAction = (response:  EmployeeProps[])=>({
  type: ActionType.LOAD_EMPLOYEES,
  payload: response
})

export const addEmployeesAction = (response:  EmployeeProps)=>({
  type: ActionType.ADD_EMPLOYEE,
  payload: response
})

// employees context
const EmployeesContext = createContext<{state: EmployeesState, dispatch: React.Dispatch<Action>}>({
  state: initialState,
  dispatch: ()=> undefined
})


const reducer: React.Reducer<EmployeesState, Action> = (state, action) => {

    if ( isLoadEmployeeAction(action)) {
    return {...state, employeesDataContext :action.payload}
    }
    if (isAddEmployeeAction(action)) {
     return {...state, employeesDataContext :[action.payload, ...state.employeesDataContext]}
    }
    return state;
  }

  const EmployeesProvider  = ({children}: EmployeesProviderProps) =>{

    React.useEffect(() => {
      const loadEmployyes = async () => {
       const employeesData = await fetchEmployees();
       dispatch(loadEmployeesAction(employeesData?.employees?.data))
      }

      loadEmployyes();
    }, []);

   const [state, dispatch] = React.useReducer(reducer, initialState)
   const value = {state, dispatch};
  
    return (
      <EmployeesContext.Provider value={value}> 
        {children}
      </EmployeesContext.Provider>  
    ) 
  }

  function useCount(){

    const context = React.useContext(EmployeesContext)
  
    if (context === undefined) {
  
      throw new Error('useCount must be used within a CountProvider')
  
    }
    console.log("state red", context)
    return context
  
  }
  
  export {EmployeesProvider, useCount}

// export default EmployeesContext;


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