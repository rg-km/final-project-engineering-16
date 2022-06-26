import React, { useState } from 'react'
import Header from '../components/Header';
import { Container, Row, Col, Nav, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar'
import '../styles/user/Profile/Profile.css'

export default function Profile() {
    return (
        <>
            <Header />
            <HeaderDashboard />
            <Container className="profile-content">
                <Row className="profile-bottom">
                    <Sidebar />
                    <Col className="content-data" xs={9} md={9}>
                        <h5>Profile Data Diri</h5>
                        <Form>
                            <Row className="data-image">
                                <Col md={2} className="image-add">
                                    <img src={require("../images/home.jpeg")} className="img-fluid rounded-circle"></img>
                                    <input type="file" name="photo" />
                                </Col>
                                <Col md={10} className="image-text">
                                    Ubah Photo
                                </Col>
                            </Row>
                            <Row className="data-user">
                                <Col className="user-left" xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Foto KTP</Form.Label>
                                        <Form.Control type="file" name="photo_ktp"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nomor KTP</Form.Label>
                                        <Form.Control type="number" name="photo_ktp"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" name="fullname"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicNoTlp">
                                        <Form.Label>No. Telepon</Form.Label>
                                        <Form.Control type="number" name="phone_number"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password"
                                        />
                                    </Form.Group>

                                </Col>
                                <Col className="user-right" xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Provinsi</Form.Label>
                                        <Form.Select>
                                            <option>Pilih Provinsi</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kota/Kabupaten</Form.Label>
                                        <Form.Select>
                                            <option>Pilih Kota/Kabupaten</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kecamatan</Form.Label>
                                        <Form.Select>
                                            <option>Pilih Kecamatan</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kelurahan</Form.Label>
                                        <Form.Select>
                                            <option>Pilih Kelurahan</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Catatan</Form.Label>
                                        <Form.Control type="text" name="catatan" className="right-textbox"
                                        />
                                    </Form.Group>
                                    <Row>
                                        <Col className="text-end" md={12}>
                                            <Button type="submit">Simpan</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}