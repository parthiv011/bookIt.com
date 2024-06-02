import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Account } from './pages/Account';
import { Cabins } from './pages/Cabins';
import { Booking } from './pages/Booking';
import { Login } from './pages/Login';
import { Settings } from './pages/Settings';
import { PageNotFound } from './pages/PageNotFound';
import GlobalStyle from './styles/GlobalStyles';
import { AppLayout } from './ui/AppLayout';
import { Users } from './pages/Users';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={'/dashboard'} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
