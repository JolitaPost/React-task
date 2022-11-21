import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteSuspense } from './components/RouteSuspense/RouteSuspense';
import { PageLayout } from './components/PageLayout/PageLayout';

const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));
const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
const AddPage = React.lazy(() => import('./views/AddPage/AddPage'));
const RegisterPage = React.lazy(() => import('./views/RegisterPage/RegisterPage'));

function App() {
    const [user, setUser] = useState(null);
  
    const handleLogin = (username) => setUser({ username });
      
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<PageLayout user={user} />}>
            <Route index element={
              <RouteSuspense>
                <LoginPage onLogin={handleLogin}/>
              </RouteSuspense>
            } />
            <Route path="/home" element={
              <RouteSuspense>
                <HomePage />
              </RouteSuspense>
            } />
            <Route path="/add" element={
              <RouteSuspense>
                <AddPage />
              </RouteSuspense>
            } />
          </Route>
          <Route path="/register" element={
            <RouteSuspense>
              <RegisterPage onLogin={handleLogin} />
            </RouteSuspense>
          } />
        </Routes>
      </div>
    );
  }
  
  export default App;
  
  