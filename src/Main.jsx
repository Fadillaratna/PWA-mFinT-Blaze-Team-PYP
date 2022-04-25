import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import QR from './pages/QR';
import Account from './pages/Account';
import Cover from './pages/Cover';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Robobot from './pages/Robobot';
import Charity from './pages/Charity';
import Ba from './pages/Ba';
import Scan from './pages/Scan';
import Bri from './pages/Bri';
import Reminder from './pages/Reminder';

const Main = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/qr" element={<QR />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cover" element={<Cover />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/robobot" element={<Robobot />} />
            <Route path="/charity" element={<Charity />} />
            <Route path="/ba" element={<Ba />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/bank/bri" element={<Bri />} />
            {/*  */}
        </Routes>
    );
};

export default Main;