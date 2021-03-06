import React, { useState } from 'react'
import Header from '../components/Header';
import { Container, Row, Col, Nav, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import '../styles/user/History/History.css'

export default function History() {
    return (
        <>
            <Header />
            <HeaderDashboard />
            <Container className="profile-content">
                <Row className="profile-bottom">
                    <Sidebar />
                    <Col className="content-data" xs={9} md={9}>
                        <h5>History Peminjaman</h5>

                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Tanggal Pengajuan</th>
                                    <th>Nama Pepurstakaan</th>
                                    <th>Judul Buku</th>
                                    <th>Total Buku</th>
                                    <th>Total Biaya</th>
                                    <th>Alamat</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2 Mei 2022</td>
                                    <td>Perpustakaan Provinsi Kalimantan Timur</td>
                                    <td>Ayat-ayat Cinta</td>
                                    <td>3 pcs</td>
                                    <td>Rp 15.000</td>
                                    <td>Jl. Nusa</td>
                                    <td><Button className="btn-success">Selesai</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}