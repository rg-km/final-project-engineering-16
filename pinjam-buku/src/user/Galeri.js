import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { Container, InputGroup, Form, FormControl, Button, Card, Row, Col, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MdBookmarkBorder, MdSearch } from 'react-icons/md'
import axios from 'axios'
import '../styles/user/Galeri/Galeri.css'

let API_URL = "https://api-dev.pinjambuku.me/api/v1/book/"

const Galeri = () => {
    const [booksList, setBooksList] = useState([])
    const [searchBar, setSearchBar] = useState("")
    const [filteredResults, setFilteredResults] = useState([])

    const getBooksList = () => {
        axios.get(`${API_URL}`).then((res) => {
            console.log(res)
            const myBooks = res.data.data
            setBooksList(myBooks)
        })
    };

    const searchTitle = (value) => {
        setSearchBar(value)
        if (searchBar !== "") {
            const filteredTitle = booksList.filter((item) => {
                return Object.values(item).join("").toLowerCase().includes(searchBar.toLowerCase())
            })
            setFilteredResults(filteredTitle)
        } else {
            setFilteredResults(booksList)
        }
    }

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
                                <FormControl className="input-words" placeholder="Cari buku disini" onChange={(e) => searchTitle(e.target.value)} />
                            </InputGroup><br />
                        </section>
                        <section className="galeri-btns d-flex justify-content-around">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="galeri-btn">
                                    Jenis Buku
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="galeri-btn">
                                    Urutkan Abjad
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </section>
                    </Form>
                </section>
                <section className="galeri-books">
                    <Row>
                        {searchBar.length > 1 ? (
                            filteredResults.map((item) => {
                                return (
                                    <Col md={4} key={item.id}>
                                        <Link to={`/galeri-buku/${item.id}`} className="link-book">
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
                                )
                            })
                        ) : (
                            booksList.map(item =>
                                <Col md={4} key={item.id}>
                                    <Link to={`/galeri-buku/${item.id}`} className="link-book">
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
                            )
                        )}
                    </Row>
                </section>
            </Container>
        </>
    )
}
export default Galeri;