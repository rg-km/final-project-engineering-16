import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { MdOutlineShoppingCart, MdCheckBox, MdCheckBoxOutlineBlank, MdLocationOn } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/user/Keranjang/Keranjang.css'

const API_URL = "https://api-dev.pinjambuku.me/api/v1/cart/"

function Keranjang(props) {
    const navigate = useNavigate()
    const getLocal = JSON.parse(localStorage.getItem('myData'))
    const [cartData, setCartData] = useState([])
    const [checked, setChecked] = useState([])
    const [countBooks, setCountBooks] = useState(0)

    const getCart = () => {
        setCountBooks(0)
        axios.get(API_URL, {
            headers: { Authorization: `Bearer${getLocal.token}` }
        }).then((res) => {
            const booksCart = res.data.data
            console.log(booksCart)
            setCartData(booksCart)
        }).catch((err) => {
            console.log("error get data cart : ", err)
        })
    }

    const handleCheck = item => () => {
        const clickedCategory = checked.indexOf(item);
        const idChecked = [...checked];

        if (clickedCategory === -1) {
            idChecked.push(item);
        } else {
            idChecked.splice(clickedCategory, 1);
        }
        setChecked(idChecked);
        // setCountBooks(checked.length + 1)
    };
    console.log(checked)

    useEffect(() => {
        getCart()
    }, [])

    const toKonfirmasi = () => {
        navigate('/konfirmasi', { state: { cart_id: checked } });
    }

    return (
        <>
            <Header />
            <Container className="cart-page">
                <Row className="cart-description">
                    <Col xs={12} md={9} className="cart-option">
                        <h4 className="option-top"><MdOutlineShoppingCart className="option-logo" /> Keranjang</h4><br />

                        {cartData.map(item =>
                            <Row className="option-book" key={item.id}>
                                <h6><b>{item.book.libraryName}</b></h6>
                                <Col xs={12} md={1} className="option-check d-flex align-items-center justify-content-center">
                                    <Form>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check
                                                    type={type}
                                                    value={item.id}
                                                    onChange={handleCheck(item.id)}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                                    {/* <MdCheckBoxOutlineBlank className="uncheck-logo " /> */}
                                </Col>
                                <Col xs={12} md={11} className="option-name">
                                    <Row className="name-desc">
                                        <Col xs={12} md={2} className="desc-photo">
                                            <img src={require("../images/library-logo.png")} className="photo" />
                                        </Col>
                                        <Col xs={12} md={10} className="desc-book">
                                            <p>
                                                {item.book.title} <br />
                                                {item.book.pageNUmber} Halaman <br />
                                                Penulis : {item.book.author} <br />
                                                Deposito : Rp {item.book.deposit}
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
                                    <td>{countBooks === 0 ? <b>-</b> : countBooks}</td>
                                </tr>
                                <tr>
                                    <td>Maks. 3 pcs</td>
                                    <td></td>
                                </tr>
                            </table>
                            <Button className="btn-summary" onClick={() => { toKonfirmasi() }}>Ajukan Pinjaman Buku</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Keranjang;