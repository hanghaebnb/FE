import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import RoomsAdd from '../pages/RoomsAdd';
import isLogin from '../core/api/isLogin';
import RoomsUpdate from '../pages/RoomsUpdate';
import RoomsUp from '../pages/RoomsUp';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rooms" element={<RoomsAdd />} />
        {isLogin() ? (
          <Route path="/rooms" element={<RoomsUpdate />} />
        ) : (
          <Route path="/rooms" element={<RoomsUp />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
