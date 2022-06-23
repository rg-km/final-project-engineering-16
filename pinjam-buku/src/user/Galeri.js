import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Container, InputGroup, Form, FormControl, Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdBookmarkBorder, MdSearch } from 'react-icons/md'
import axios from 'axios'
import '../styles/user/Galeri/Galeri.css'

let API_URL = "https://api-dev.pinjambuku.me/api/v1/book/"

const Galeri = () => {
    const [booksList, setBooksList] = useState([])

    const getBooksList = () => {
        axios.get(`${API_URL}`).then((res) => {
            console.log(res)
            const myBooks = res.data.data
            setBooksList(myBooks)
        })
    };

    useEffect(() => {
        getBooksList()
    }, []);

    return (
        <>
            <Header />
            <Container className="galeri-page">
                <section className="galeri-search">
                    <Form className="galeri-form">
                        <section className="galeri-input">
                            <InputGroup className="mb-3">
                                <FormControl className="input-words" placeholder="Cari buku disini" />
                                <Button className="input-btn" id="button-addon2"><MdSearch className="input-logo" /></Button>
                            </InputGroup><br />
                        </section>
                        <section className="galeri-btns d-flex justify-content-around">
                            <Button className="galeri-btn">Jenis</Button>
                            <Button className="galeri-btn">Urutkan Abjad</Button>
                        </section>
                    </Form>
                </section>
                <section className="galeri-books">
                    <Row>
                        {booksList.map(item =>
                            <Col md={4} key={item.id}>
                                <Link to="/detail-buku" className="link-book">
                                    <Card className="pd-3 card-book">
                                        <Card.Img variant="top" src={require("../images/library-logo.png")} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>
                                                Penulis : {item.author}<br />
                                                {item.pageNumber} halaman
                                            </Card.Text>
                                            {/* <a className="btn-book align-items-end"><MdBookmarkBorder /></a> */}
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </section>
            </Container>
        </>
    )
}
export default Galeri;