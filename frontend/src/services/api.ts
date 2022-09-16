import axios from 'axios';

const BASE_API_URL = process.env.REACT_APP_EMPLOYEE_PROFILES;


const callAPI = async (url: string, params?: string | null, method?: any, data?: Object | {}) => {
  let requestConfig = {
    baseURL: BASE_API_URL,
    //   headers: {
    //     'x-api-key': API_KEY
    //   },
    method,
    url,
    params,
    data
  };

  try {
    return await axios(requestConfig);
  } catch (err) {
    console.log('axios encountered an error', err);
  }
};

export const fetchEmployees = async () => {
  const employees = await callAPI('employees', null);

  return {
    employees
  };
};

export const fetchEmployee = async (id: string = '') => {
  if (!id) {
    return {};
  }

  const path = `employees?id=${id}`
  const employee = await callAPI(path);
  console.log("employee ?.data[0]", employee ?.data[0])
  return { employee: employee ?.data[0]}
};

export const fetchEmployeeTeammates = async (teamName: any) => {
  const employeeTeammates = await callAPI(`employees?teamName=${teamName}`, null);

  return {
    employeeTeammates: employeeTeammates ?.data,
  };
};

export const postEmployee = async (employeeData: Object = {}) => {
  if (!employeeData) {
    return {};
  }

  const path = `employees`
  const employee = await callAPI(path, null, 'post', employeeData);


  return employee
};