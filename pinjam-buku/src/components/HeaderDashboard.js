import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../styles/user/HeaderDashboard/HeaderDashboard.css'

export default function HeaderDashboard() {
    return (
        <>
            <Container className="profile-page">
                <Row className="profile-top">
                    <Col md={1} xs={1} className="profile-photo float-end">
                        <img src={require("../images/blank-profile.png")} className="photo img-fluid rounded-circle" />
                    </Col>
                    <Col md={11} xs={11} className="profile-name">
                        <h6>Hi, Renanita Apriliya!</h6>
                    </Col>
                </Row>
            </Container>
        </>
    )
}