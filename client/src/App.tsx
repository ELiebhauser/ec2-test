import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavbarComponent from './components/main/navbar.component';
import { AdminComponent } from './components/pages/admin/admin.component';

/**Lazy */
const LoginComponent = lazy(() => import('./components/pages/login/login.component').then(({LoginComponent}) => ({default: LoginComponent})));
const TestComponent = lazy(() => import('./components/pages/test/test.component').then(({TestComponent}) => ({default: TestComponent})));


function App() {
  const isEmployee = localStorage.getItem('userName') === 'EmployeeUser'; /**Validate token */ 
  return (
    <BrowserRouter>
    <div className="App">
        <p>User Role: { isEmployee ? 'Employee' : 'OTHER' }</p> {/* Test for auth token Validation */} 
        <main>
        <Suspense fallback={<div>Loading...</div>}> {/* Loadbar for lazy loading */} 

          <Switch>
              <Route exact path="/">
                <LoginComponent />
              </Route>
              
              <div> 
              <NavbarComponent />

            <Route path="/template">
            { isEmployee ? (<TestComponent />) : (<Redirect to="/"/>)} {/* Lazy load */} 
            </Route>

            <Route path="/administrator">
              <AdminComponent />
            </Route>
            </div>
          </Switch>
          </Suspense>
        </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
