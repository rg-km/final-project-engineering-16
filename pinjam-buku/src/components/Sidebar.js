import React, { useState } from 'react'
import Header from '../components/Header';
import { Container, Row, Col, Nav, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import '../styles/user/Profile/Profile.css'

export default function Sidebar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("myData")
        navigate("/")
    }

    return (

        <Col className="content-sidebar" xs={3} md={3}>
            <Nav.Link href="/profile" className="side-nav nav-active" component={Link}>Profile</Nav.Link>
            <Nav.Link href="/status-peminjaman" className="side-nav" component={Link}>Status Peminjaman</Nav.Link>
            <Nav.Link href="/history-peminjaman" className="side-nav" component={Link}>History Peminjaman</Nav.Link>
            <Nav.Link href="/informasi-rekening" className="side-nav" component={Link}>Informasi Rekening</Nav.Link>
            <Nav.Link href="#" className="side-nav side-logout" component={Link} onClick={handleLogout}>Logout</Nav.Link>
        </Col>
    )
}