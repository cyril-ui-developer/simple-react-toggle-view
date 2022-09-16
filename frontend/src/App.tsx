import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import routes from './routes';
import Nav from './components/Nav';
import Support from './components/Support.';
import  {EmployeesProvider, useCount} from './context/employees';
import { fetchEmployees } from './services/api';
import './index.css';
import './styles/tailwind.css';
import EmployeesList from './components/EmployeesList' 

  

function App() {

    const [employeesDataContext, setEmployees] = React.useState<EmployeeProps[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);



    React.useEffect(() => {
        const loadEmployyes = async () => {
            setIsLoading(loading => !loading);
            const employeesData = await fetchEmployees();
            setEmployees(employeesData?.employees?.data);
            setIsLoading(loading => !loading);
        }

        loadEmployyes();
    }, []);

  return (
      <EmployeesProvider>
    <Router>
        <header>
            <Nav routes={routes} />
        </header>
        <section className="section">
            <div className="container">
                <div className="columns">
      
                    <div className="column">
                        <Switch>
                            {
                                routes.map((item: AdminConsoleMainProps) => (
                                    <Route
                                        render={() => <item.component />}
                                        key={item.name}
                                        path={item.url}
                                        exact={item.exact}
                                    /> 
                                )
                                )
                            }
                                <Route exact path="/support">
                                    <Support/>
                                </Route>
                            <Route>
                                <h1 className="title is-size-2">
                                    404 - Page not found
                                </h1>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    </Router>
    </EmployeesProvider>
);
};

export default App;

type SubNavProps = {
name?: string;
url?: string;
component?: ReactNode;
}
type AdminConsoleMainProps = {
name?: string
url?: string;
exact?: boolean;
component?: any; //ReactNode;
subnav?: SubNavProps[];
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