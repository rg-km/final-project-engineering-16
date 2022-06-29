import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Link } from "react-router-dom"
import { Container, Button, Col } from 'react-bootstrap'
import { MdOutlineTouchApp, MdOutlineLocalLibrary, MdPayment } from "react-icons/md";
import '../styles/user/Home/Home.css'
import axios from 'axios'
let API_URL = "https://api-dev.pinjambuku.me/api/v1/library/"

export default function Home() {
    const [library, setLibrary] = useState([])

    const getLibrary = () => {
        axios.get(`${API_URL}`).then((res) => {
            console.log(res)
            const lib = res.data.data
            setLibrary(lib)
        })
    };

    useEffect(() => {
        getLibrary()
    }, [])

    return (
        <>
            <Header />
            <Container className="landing-page">
                <section className="carousel">
                    <figure className="image-home">
                        <img src={require("../images/home.jpeg")} className="image-carousel img-fluid"></img>
                        <figcaption className="text-carousel">
                            PINJAM BUKU DENGAN MUDAH DIMANAPUN KAMU BERADA <br />
                        </figcaption>
                        <Button className="btn-search-home" component={Link} href="/galeri-buku">Cari Buku Disini</Button>
                    </figure>
                </section>
                <section className="second row justify-content-center align-items-center w-100">
                    <h2 className="second-title">Membaca Buku Semakin Mudah</h2>
                    <p className="second-paragraph">
                        Baca buku, berbagi koleksi bacaan dan bersosialisasi secara bersamaan.
                        Dimana pun, kapan pun dengan nyaman bersama setiap orang.
                    </p>
                </section>
                <section className="third d-flex justify-content-around">
                    <div className="third-benefit text-center">
                        <MdOutlineTouchApp className="rounded-circle" /><br />
                        <p className="third-caption">Pinjam buku yang kamu inginkan dari  mana saja</p>
                    </div>
                    <div className="third-benefit text-center">
                        <MdOutlineLocalLibrary className="rounded-circle" /><br />
                        <p className="third-caption">Bermacam - macam pilihan hingga 1000 buku</p>
                    </div>
                    <div className="third-benefit text-center">
                        <MdPayment className="rounded-circle" /><br />
                        <p className="third-caption">Simpan uangmu, pinjam buku tanpa biaya pinjaman</p>
                    </div>
                </section>
                <section className="partner text-center">
                    <h1 className="partner-name">Partner Kami</h1>
                    <Col md={3} className="partners-info d-flex justify-content-around col-md-4">
                        {library.map(item =>
                            <div className="partner-benefit text-center">
                                <img src={require("../images/library-logo.png")}></img>
                                <p className="partner-caption">{item.name}</p>
                            </div>
                        )}
                    </Col>
                </section>
            </Container>
        </>
    )
}