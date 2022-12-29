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
        <Route path="/api/rooms/main" element={<RoomsAdd />} />
        {/* {isLogin() ? ( */}
        <Route path="/api/rooms/:id" element={<RoomsUp />} />
        {/* // ) : ( // <Route path="/api/rooms/:id" element={<RoomsUp />} />
        // )} */}
      </Routes>
    </BrowserRouter>
  );
}
