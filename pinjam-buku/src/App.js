import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import Register from "./account/Register"
import Home from './user/Home'
import Login from './account/Login'
import Galeri from './user/Galeri'
import Detail from './user/Detail'
import Keranjang from './user/Keranjang'
import Konfirmasi from './user/Konfirmasi'
import Profile from './user/Profile'
import Status from './user/Status'
import History from './user/History'
import Protected from './user/Protected'
import NoMatch from './components/NoMatch'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/daftar" element={<Register />} />
        <Route path='/masuk' element={<Login />} />
        <Route path="/galeri-buku" element={<Outlet />}>
          <Route index element={<Galeri />} />
          <Route path=':id' element={<Detail />} />
        </Route>
        <Route path="keranjang" element={
          <Protected>
            <Keranjang />
          </Protected>
        } />
        <Route path="konfirmasi" element={
          <Protected>
            <Konfirmasi />
          </Protected>
        } />
        <Route path="profile" element={
          <Protected>
            <Profile />
          </Protected>
        } />
        <Route path="status-peminjaman" element={
          <Protected>
            <Status />
          </Protected>
        } />
        <Route path="history-peminjaman" element={
          <Protected>
            <History />
          </Protected>
        } />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div >
  );
}

export default App;