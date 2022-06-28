import React, { useState } from 'react'
import Header from '../components/Header';
import { Container, Row, Col, Nav, Button, Form } from 'react-bootstrap'
import { Link, useNavigate, NavLink, useLocation } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import '../styles/user/Profile/Profile.css'

export default function Sidebar() {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("myData")
        navigate("/")
    }

    return (

        <Col className="content-sidebar" xs={3} md={3}>
            <NavLink to="/profile" className={splitLocation[1] === "profile" ? "nav-active side-nav nav-link" : "side-nav nav-link"}>Profile</NavLink>
            <NavLink to="/status-peminjaman" className={splitLocation[1] === "status-peminjaman" ? "nav-active side-nav nav-link" : "side-nav nav-link"}>Status Peminjaman</NavLink>
            <NavLink to="/history-peminjaman" className={splitLocation[1] === "history-peminjaman" ? "nav-active side-nav nav-link" : "side-nav nav-link"}>History Peminjaman</NavLink>
            <Nav.Link className="side-nav side-logout" onClick={handleLogout}>Logout</Nav.Link>
        </Col>
    )
}