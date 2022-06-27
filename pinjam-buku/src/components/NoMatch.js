import React from 'react'
import Header from '../components/Header';
import { Container } from 'react-bootstrap'
import '../styles/user/Galeri/Galeri.css'

export default function Profile() {

    return (
        <>
            <Header />
            <Container className="galeri-page">
                <h1 className="text-center" style={{ padding: "10rem" }}><b>Tidak ada halaman yang cocok.</b></h1>
            </Container>
        </>
    )
}