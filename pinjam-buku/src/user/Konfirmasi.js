import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import { MdLocationOn, MdAdd } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import '../styles/user/Konfirmasi/Konfirmasi.css'

const API_URL = "https://api-dev.pinjambuku.me/api/v1/cart/checkout"

const Konfirmasi = () => {
    const getLocal = JSON.parse(localStorage.getItem('myData'))
    const location = useLocation();
    const navigate = useNavigate();
    const [dataList, setDataList] = useState([])
    const [dataNew, setDataNew] = useState({})

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const postCheckout = () => {
        const params = JSON.stringify({
            carts_id: [location.state.cart_id],
            total_cost: 25000,
        });

        axios.post(API_URL, params, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer${getLocal.token}`
            },
        }).then((result) => {
            console.log(result.data);
            Toast.fire({
                icon: 'success',
                title: 'Buku berhasil dipinjam!'
            })
            navigate("/status-peminjaman")

        }).catch((err) => {
            console.log("error checkout : ", err)
        })
    };

    const getting = () => {
        for (let i = 0; i < location.state.cart_id.length; i++) {
            axios.get(`https://api-dev.pinjambuku.me/api/v1/cart/${location.state.cart_id[i]}`, {
                headers: { Authorization: `Bearer${getLocal.token}` }
            }).then((res) => {
                console.log("ini data ", res.data.data.book)
                setDataNew(res.data.data.book)
                setDataList([...dataList, dataNew])

            }).catch((err) => {
                console.log("error get data cart : ", err)
            })
        }
    }

    useEffect(() => {
        getting()
    }, [])

    return (
        <>
            <Header />
            <Container className="confirm-page">
                <Row className="confirm-description">
                    <h4 className="confirm-top">Konfirmasi Pinjaman</h4><br />
                    <Col xs={12} md={9} className="confirm-books">
                        <Row className="books-list">
                            < Accordion defaultActiveKey="0" className="books-name" >
                                <h6><b>Perpus SBY</b></h6>
                                <Accordion.Item eventKey="0" className="books-item">
                                    <Accordion.Header>Buku</Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="books-desc">
                                            <Col xs={12} md={2} className="books-photo">
                                                <img src={require("../images/library-logo.png")} className="photo" />
                                            </Col>
                                            <Col xs={12} md={10} className="books-text">
                                                <p>
                                                    Ayat-Ayat Cinta <br />
                                                    241 Halaman <br />
                                                    Penulis : Habiburrahman <br />
                                                    Deposito : Rp 30000
                                                </p>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <hr />
                            < Accordion defaultActiveKey="0" className="books-name" >
                                <h6><b>Perpus SBY</b></h6>
                                <Accordion.Item eventKey="0" className="books-item">
                                    <Accordion.Header>Buku</Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="books-desc">
                                            <Col xs={12} md={2} className="books-photo">
                                                <img src={require("../images/library-logo.png")} className="photo" />
                                            </Col>
                                            <Col xs={12} md={10} className="books-text">
                                                <p>
                                                    Nebula <br />
                                                    Halaman <br />
                                                    Penulis : Wati <br />
                                                    Deposito : Rp 98000
                                                </p>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Row>
                        <Row className="payment-list">
                            <h6 className="payment-title">Pilihan Pembayaran</h6>
                            <Col xs={2} md={2} className="payment-name">
                                <Row>BCA</Row>
                            </Col>
                            <Col xs={2} md={2} className="payment-name">
                                <Row>110022000</Row>
                            </Col>
                            <Col xs={2} md={2} className="payment-name">
                                <Row>AN. PinjamBuku</Row>
                            </Col>
                        </Row>
                        <Row className="summary-detail">
                            <h6 className="summary-title">Detail Ringkasan</h6>
                            <table>
                                <tr>
                                    <td colSpan="2"><b>Deposito</b></td>
                                </tr>
                                <tr>
                                    <td>Ayat-Ayat Cinta</td>
                                    <td className="text-right">Rp 30000</td>
                                </tr>
                                <tr>
                                    <td>Nebula</td>
                                    <td className="text-right">Rp 98000</td>
                                </tr>
                                <tr>
                                    <td className="space"></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><b>Ongkos Kirim</b></td>
                                </tr>
                                <tr>
                                    <td>Perpustakaan Provinsi Kalimantan Timur</td>
                                    <td className="text-right">Rp 15000</td>
                                </tr>
                                <tr>
                                    <td>Perpustakaan Provinsi Jawa Timur</td>
                                    <td className="text-right">Rp 15000</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><hr /></td>
                                </tr>
                                <tr>
                                    <td><b>Total Pembayaran</b></td>
                                    <td className="text-right"><b>Rp 158000</b></td>
                                </tr>
                            </table>
                            <section className="proof-payment">
                                <h5>Upload Bukti Pembayaran</h5>
                                <input type="file" className="proof-photo" id="upload" hidden />
                                <label for="upload"><MdAdd className="proof-add" /></label>
                                <Button className="proof-btn" onClick={postCheckout}>Kirim Bukti Pembayaran</Button>
                            </section>
                        </Row>
                    </Col>
                    <Col xs={6} md={3} className="confirm-notes">
                        <Row className="note-address">
                            <h6><MdLocationOn className="note-logo" /> Detail Pengiriman</h6>
                            <p>
                                <span>Dari : </span><br />
                                Jl. Ir. H. Juanda No.4, Air Hitam, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75243 <br /><br />

                                <span>Dikirim ke : </span><br />
                                Pondok Indah Jakarta Selatan, Jl. Cipete Raya, 6,<br />
                            </p>
                        </Row>
                        <Row className="note-address">
                            <h6><MdLocationOn className="note-logo" /> Detail Pengiriman</h6>
                            <p>
                                <span>Dari : </span><br />
                                Jl. Ir. H. Juanda No.4, Air Hitam, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75243 <br /><br />

                                <span>Dikirim ke : </span><br />
                                Pondok Indah Jakarta Selatan, Jl. Cipete Raya, 6,<br />
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Konfirmasi;