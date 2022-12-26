import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import RoomsAdd from '../pages/RoomsAdd';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rooms" element={<RoomsAdd />} />
      </Routes>
    </BrowserRouter>
  );
}
