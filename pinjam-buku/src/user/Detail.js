import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { MdShoppingCart, MdMenuBook, MdLocationOn, MdBookmarkBorder } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import '../styles/user/Detail/Detail.css'
const API_CART = "https://api-dev.pinjambuku.me/api/v1/cart/"

export default function Detail() {
    const param = useParams();
    const [detail, setDetail] = useState(null);
    let formData = new FormData();
    formData.append('book_id', param.id);
    formData.append('user_id', 3);

    const loadBook = async () => {
        axios.get("https://api-dev.pinjambuku.me/api/v1/book/" + param.id).then((res) => {
            console.log(res)
            const myBook = res.data.data
            setDetail(myBook)
        })
    };

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

    const postCart = () => {
        axios.post(API_CART, formData)
            .then((result) => {
                console.log(result.data);
                Toast.fire({
                    icon: 'success',
                    title: 'Buku berhasil ditambahkan!'
                })
            }).catch((err) => {
                console.log("error adding book to cart", err)
            })
    };

    useEffect(() => {
        loadBook();
    }, []);

    return (
        <>
            <Header />
            <Container className="detail-page">
                <h4 className="detail-top"><MdMenuBook className="detail-logo" /> Detail Buku</h4>
                <section className="detail-book">
                    <h5 className="detail-title">{detail && detail.title}</h5>
                    <h6 className="detail-library">{detail && detail.libraryName}</h6>
                    <Row className="detail-row">
                        <Col xs={12} md={3} className="detail-col-photo">
                            <img src={require("../images/library-logo.png")} className="photo" />
                        </Col>
                        <Col xs={6} md={9} className="detail-col-text">
                            <table>
                                <tr>
                                    <td>Katalog ID</td>
                                    <td className="space">:</td>
                                    <td>AB001</td>
                                </tr>
                                <tr>
                                    <td>Judul</td>
                                    <td className="space">:</td>
                                    <td>{detail && detail.title}</td>
                                </tr>
                                <tr>
                                    <td>Jenis Buku</td>
                                    <td className="space">:</td>
                                    <td>{detail && detail.categoryName}</td>
                                </tr>
                                <tr>
                                    <td>Penulis</td>
                                    <td className="space">:</td>
                                    <td>{detail && detail.author}</td>
                                </tr>
                                <tr>
                                    <td>Halaman</td>
                                    <td className="space">:</td>
                                    <td>{detail && detail.pageNumber}</td>
                                </tr>
                                <tr>
                                    <td>Deposito</td>
                                    <td className="space">:</td>
                                    <td>Rp {detail && detail.deposit}</td>
                                </tr>
                            </table>
                            <p>{detail && detail.description}</p>
                            <Button className="detail-btn" onClick={postCart}><MdShoppingCart className="btn-icon" />  Masukkan Keranjang</Button>
                        </Col>
                        <Col xs={6} md={5}>
                            <table>
                                <tr className="tb-loc-title">
                                    <td><MdLocationOn className="location-logo" /></td>
                                    <td>Alamat Perpustakaan :</td>
                                </tr>
                                <tr className="tb-loc-name">
                                    <td></td>
                                    <td>
                                        Jl. Ir. H. Juanda No. 4, Air Hitam, Kec. Samarinda Ulu, Kota Samarinda, Kalimantan Timur 75243
                                    </td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                </section>

                <section className="another-books">
                    <h5 className="another-title">Buku Terkait</h5>
                    <section className="another-cards d-flex justify-content-around md-3">
                        <Link to="/detail-buku" className="link-book">
                            <Card className="pd-2 another-card" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../images/library-logo.png")} />
                                <Card.Body>
                                    <Card.Title>Ayat-Ayat Cinta</Card.Title>
                                    <Card.Text>
                                        Penulis : Habiburrahman<br />
                                        241 halaman
                                    </Card.Text>
                                    {/* <Link className="btn-book align-items-end"><MdBookmarkBorder /></Link> */}
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to="/detail-buku" className="link-book">
                            <Card className="pd-2 another-card" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../images/library-logo.png")} />
                                <Card.Body>
                                    <Card.Title>Ayat-Ayat Cinta</Card.Title>
                                    <Card.Text>
                                        Penulis : Habiburrahman<br />
                                        241 halaman
                                    </Card.Text>
                                    {/* <Link className="btn-book align-items-end"><MdBookmarkBorder /></Link> */}
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to="/detail-buku" className="link-book">
                            <Card className="pd-2 another-card" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../images/library-logo.png")} />
                                <Card.Body>
                                    <Card.Title>Ayat-Ayat Cinta</Card.Title>
                                    <Card.Text>
                                        Penulis : Habiburrahman<br />
                                        241 halaman
                                    </Card.Text>
                                    {/* <Link className="btn-book align-items-end"><MdBookmarkBorder /></Link> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </section>
                </section>
            </Container>
        </>
    )
}