import React, { useState } from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap'
import { MdLocationOn, MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../styles/user/Konfirmasi/Konfirmasi.css'

export default function Konfirmasi() {
    return (
        <>
            <Header />
            <Container className="confirm-page">
                <Row className="confirm-description">
                    <h4 className="confirm-top">Konfirmasi Pinjaman</h4><br />
                    <Col xs={12} md={9} className="confirm-books">
                        <Row className="books-list">
                            <Accordion defaultActiveKey="0" className="books-name">
                                <h6><b>Perpustakaan Provinsi Kalimantan Timur</b></h6>
                                <Accordion.Item eventKey="0" className="books-item">
                                    <Accordion.Header>Buku</Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="books-desc">
                                            <Col xs={12} md={2} className="books-photo">
                                                <img src={require("../images/library-logo.png")} className="photo" />
                                            </Col>
                                            <Col xs={12} md={10} className="books-text">
                                                <p>
                                                    Ayat-ayat cinta <br />
                                                    241 Halaman <br />
                                                    Penulis : Habiburrahman <br />
                                                    Deposito : Rp 15.000
                                                </p>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <hr />
                            <Accordion defaultActiveKey="0" className="books-name">
                                <h6><b>Perpustakaan Provinsi Jawa Timur</b></h6>
                                <Accordion.Item eventKey="0" className="books-item">
                                    <Accordion.Header>Buku</Accordion.Header>
                                    <Accordion.Body>
                                        <Row className="books-desc">
                                            <Col xs={12} md={2} className="books-photo">
                                                <img src={require("../images/library-logo.png")} className="photo" />
                                            </Col>
                                            <Col xs={12} md={10} className="books-text">
                                                <p>
                                                    Ayat-ayat cinta <br />
                                                    241 Halaman <br />
                                                    Penulis : Habiburrahman <br />
                                                    Deposito : Rp 15.000
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
                                <Row>BNI</Row>
                                <Row>LinkAja</Row>
                            </Col>
                            <Col xs={2} md={2} className="payment-name">
                                <Row>BCA</Row>
                                <Row>BNI</Row>
                                <Row>LinkAja</Row>
                            </Col>
                            <Col xs={2} md={2} className="payment-name">
                                <Row>BCA</Row>
                                <Row>BNI</Row>
                                <Row>LinkAja</Row>
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
                                    <td className="text-right">1 &times; Rp 15.000</td>
                                </tr>
                                <tr>
                                    <td>Laskar Pelangi</td>
                                    <td className="text-right">2 &times; Rp 15.000</td>
                                </tr>
                                <tr>
                                    <td className="space"></td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><b>Ongkos Kirim</b></td>
                                </tr>
                                <tr>
                                    <td>Perpustakaan Provinsi Kalimantan Timur</td>
                                    <td className="text-right">Rp 15.000</td>
                                </tr>
                                <tr>
                                    <td>Perpustakaan Provinsi Jawa Timur</td>
                                    <td className="text-right">Rp 15.000</td>
                                </tr>
                                <tr>
                                    <td colSpan="2"><hr /></td>
                                </tr>
                                <tr>
                                    <td><b>Total Pembayaran</b></td>
                                    <td className="text-right"><b>Rp 15.000</b></td>
                                </tr>
                            </table>
                            <section className="proof-payment">
                                <h5>Upload Bukti Pembayaran</h5>
                                <input type="file" className="proof-photo" id="upload" hidden />
                                <label for="upload"><MdAdd className="proof-add" /></label>
                                <Button className="proof-btn">Kirim Bukti Pembayaran</Button>
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
            </Container>
        </>
    )
}