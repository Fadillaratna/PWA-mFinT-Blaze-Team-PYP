import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QR from './pages/QR';
import Account from './pages/Account';
import Cover from './pages/Cover';
import Signup from './pages/Signup';
import Login from './pages/Login';

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/qr" element={<QR />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cover" element={<Cover />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Main;