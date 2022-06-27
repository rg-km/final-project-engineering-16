import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import Register from "./account/Register"
import Home from './user/Home'
import Login from './account/Login'
import Galeri from './user/Galeri'
import Detail from './user/Detail'
import DashboardAdmin from './admin/Dashboard'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/daftar" element={<Register />} />
        <Route path='/masuk' element={<Login />} />
        <Route path='/dashboard-admin' element={<DashboardAdmin />} />
        <Route path="/galeri-buku" element={<Outlet />}>
          <Route index element={<Galeri />} />
          <Route path=':id' element={<Detail />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;