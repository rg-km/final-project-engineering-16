import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { MdOutlineShoppingCart, MdCheckBox, MdCheckBoxOutlineBlank, MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/user/Keranjang/Keranjang.css'

const API_URL = "https://api-dev.pinjambuku.me/api/v1/cart/"

export default function Keranjang() {
    const [cartData, setCartData] = useState([])

    const getCart = () => {
        axios.get(`${API_URL}`).then((res) => {
            const booksCart = res.data.data
            setCartData(booksCart)
        })
    }

    useEffect(() => {
        getCart()
    }, []);

    return (
        <>
            <Header />
            <Container className="cart-page">
                <Row className="cart-description">
                    <Col xs={12} md={9} className="cart-option">
                        <h4 className="option-top"><MdOutlineShoppingCart className="option-logo" /> Keranjang</h4>
                        <h6><b>Perpustakaan Provinsi Kalimantan Timur</b></h6>

                        {cartData.map(item =>
                            <Row className="option-book" key={item.id}>
                                <Col xs={12} md={1} className="option-check d-flex align-items-center justify-content-center">
                                    <MdCheckBox className="check-logo " />
                                    {/* <MdCheckBoxOutlineBlank className="uncheck-logo " /> */}
                                </Col>
                                <Col xs={12} md={11} className="option-name">
                                    <Row className="name-desc">
                                        <Col xs={12} md={2} className="desc-photo">
                                            <img src={require("../images/library-logo.png")} className="photo" />
                                        </Col>
                                        <Col xs={12} md={10} className="desc-book">
                                            <p>
                                                {item.title} <br />
                                                {item.pageNUmber} Halaman <br />
                                                Penulis : {item.author} <br />
                                                Deposito : Rp {item.deposit}
                                            </p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        )}
                    </Col>
                    <Col xs={6} md={3} className="cart-notes">
                        <Row className="note-address">
                            <p>
                                <MdLocationOn className="location-logo" /><b> Dikirim ke </b><br /><br />
                                Pondok Indah Jakarta Selatan, Jl. Cipete Raya, 6
                            </p>
                        </Row>
                        <Row className="note-summary">
                            <h6>Ringkasan Pinjaman Buku</h6>
                            <table>
                                <tr>
                                    <td>Total pinjam buku</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>Maks. 3 pcs</td>
                                    <td></td>
                                </tr>
                            </table>
                            <Button className="btn-summary" component={Link} href="/konfirmasi">Ajukan Pinjaman Buku</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}