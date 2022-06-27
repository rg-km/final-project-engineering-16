import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import { Container, Row, Col, Nav, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import '../styles/user/Status/Status.css';
import axios from 'axios';
const API_URL = "https://api-dev.pinjambuku.me/api/v1/borrowing/";

const Status = () => {
    const getLocal = JSON.parse(localStorage.getItem('myData'))
    const [status, setStatus] = useState([])

    const getBorrowing = () => {
        axios.get(API_URL, {
            headers: { Authorization: `Bearer${getLocal.token}` }
        }).then((res) => {
            const borrowList = res.data.data
            console.log("borrow list", borrowList)
            setStatus(borrowList)
        }).catch((err) => {
            console.log("error get data borrowing : ", err)
        })
    }

    useEffect(() => {
        getBorrowing()
    }, [])

    return (
        <>
            <Header />
            <HeaderDashboard />
            <Container className="profile-content">
                <Row className="profile-bottom">
                    <Sidebar />
                    <Col className="content-data" xs={9} md={9}>
                        <h5>Status Peminjaman</h5>

                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Tanggal Pengajuan</th>
                                    <th>Nama Pepurstakaan</th>
                                    <th>Judul Buku</th>
                                    <th>Total Biaya</th>
                                    <th>Alamat</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {status === null &&
                                    <tr>
                                        <td colSpan={7}>
                                            <h4 className='text-center p-3'>Tidak ada data peminjaman</h4>
                                        </td>
                                    </tr>
                                }
                                {status !== null &&
                                    status.map((item, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.borrowingDate}</td>
                                            <td>{item.library.name}</td>
                                            <td>{item.book.title}</td>
                                            <td>Rp {item.totalCost + item.totalDeposit}</td>
                                            <td>{item.library.address}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Status;