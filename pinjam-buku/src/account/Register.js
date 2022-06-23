import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import '../styles/user/Register/Register.css'
import Swal from 'sweetalert2'
import axios from 'axios'
const API_URL = "https://api-dev.pinjambuku.me/api/v1/auth/register"

const Register = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState({
        role_id: '2',
        full_name: '',
        email: '',
        password: '',
        phone_number: '',
        address: 'Wajib diisi'
    })

    const Registration = (e) => {
        e.preventDefault();
        const dataUser = {
            role_id: data.role_id,
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            phone_number: data.phone_number,
            address: data.address
        };
        axios.post(API_URL, dataUser)
            .then((result) => {
                console.log(result.data.response);
                if (result.data.status == '409')
                    alert('Error');
                else
                    Swal.fire("Berhasil!", "Akun Anda telah terdaftar.", "success")
                navigate("/masuk")
            })
    }
    const handleOnChange = (e) => {
        e.persist();
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Header />
            <Container className="container-regist">
                <Row>
                    <Col className="logo-people">
                        <figure className="position-relative logo-regist">
                            <img src={require("../images/book.png")} className="img-fluid"></img>
                            <figcaption className="text-regist">
                                <span>PINJAMBUKU</span><br />
                                Platform peminjaman buku perpustakaan dari mana saja dengan mudah.
                            </figcaption>
                        </figure>
                    </Col>
                    <Col xs lg="6" className="registration">
                        <div className="jumbotron">
                            <Container>
                                <Row>
                                    <Col>
                                        <Form onSubmit={Registration}>
                                            <section>
                                                <h1>Daftar Sekarang</h1>
                                                <p>Sudah punya akun PinjamBuku? <Link to="/masuk" className="login">Masuk</Link></p>
                                                <Form.Group className="mb-3" controlId="formBasicName">
                                                    <Form.Label>Nama Lengkap</Form.Label>
                                                    <Form.Control type="text" name="fullname"
                                                        onChange={handleOnChange} value={data.fullname} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control type="email" name="email"
                                                        onChange={handleOnChange} value={data.email} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control type="password" name="password"
                                                        onChange={handleOnChange} value={data.password} />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formBasicNoTlp">
                                                    <Form.Label>No. Telepon</Form.Label>
                                                    <Form.Control type="number" name="phone_number"
                                                        onChange={handleOnChange} value={data.phone_number} />
                                                </Form.Group>
                                            </section>
                                            <Button
                                                variant="primary" type="submit">
                                                Daftar
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register;