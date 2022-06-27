import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { Container, Row, Col, Nav, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar'
import '../styles/user/Profile/Profile.css'
import axios from 'axios';

export default function Profile() {
    const [provinsi, setProvinsi] = useState([])
    const [kota, setkota] = useState([])
    const [kecamatan, setkecamatan] = useState([])
    const [kelurahan, setkelurahan] = useState([])


    const getProvinsi = async () => {
        await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi").then((res) => {
            setProvinsi(res?.data?.provinsi)
        })
    }
    const getKota = async (valueId) => {
        const id = provinsi[valueId]?.id
        await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=` + id).then((res) => {
            console.log('res',res)
            setkota(res?.data?.kota_kabupaten)
        })
    }

    const getKecamatan = async (valueId) => {
        const id = kota[valueId]?.id
        await axios.get("https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=" + id).then((res) => {
            console.log('rescama',res)
            setkecamatan(res?.data?.kecamatan)
        })
    }
    const getKelurahan = async (valueId) => {
        const id = kecamatan[valueId]?.id
        console.log('id',id)
        await axios.get("https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=" + id).then((res) => {
            console.log('resle',res)
            setkelurahan(res?.data?.kelurahan)
        })
    }

    var selectProvinsi = document.querySelector('#select-provinsi'), valueIndexProvinsi = document.getElementById("select-provinsi")?.value;
  
    selectProvinsi?.addEventListener('change', function () {
        getKota(valueIndexProvinsi)
    });
    
    var selectKota = document.querySelector('#select-kota'), valueIndexKota = document.getElementById("select-kota")?.value;
    selectKota?.addEventListener('change', function () {
     getKecamatan(valueIndexKota)
    });

    var selectKecamatan = document.querySelector('#select-kecamatan'), valueIndexKecamatan = document.getElementById("select-kecamatan")?.value;
    selectKecamatan?.addEventListener('change', function () {
     getKelurahan(valueIndexKecamatan)
    });

    var selectKelurahan = document.querySelector('#select-kelurahan'), valueIndexKelurahan = document.getElementById("select-kelurahan")?.value;
    selectKelurahan?.addEventListener('change', function () {
        console.log('value kelurahan', kelurahan[valueIndexKelurahan]?.value)
    });
    
    useEffect(() => {
        getProvinsi()
    }, 50)

    return (
        <>
            <Header />
            <HeaderDashboard />
            <Container className="profile-content">
                <Row className="profile-bottom">
                    <Sidebar />
                    <Col className="content-data" xs={9} md={9}>
                        <h5>Profile Data Diri</h5>
                        <Form>
                            <Row className="data-image">
                                <Col md={2} className="image-add">
                                    <img src={require("../images/home.jpeg")} className="img-fluid rounded-circle"></img>
                                    <input type="file" name="photo" />
                                </Col>
                                <Col md={10} className="image-text">
                                    Ubah Photo
                                </Col>
                            </Row>
                            <Row className="data-user">
                                <Col className="user-left" xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Foto KTP</Form.Label>
                                        <Form.Control type="file" name="photo_ktp"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Nomor KTP</Form.Label>
                                        <Form.Control type="number" name="photo_ktp"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" name="fullname"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicNoTlp">
                                        <Form.Label>No. Telepon</Form.Label>
                                        <Form.Control type="number" name="phone_number"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email"
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password"
                                        />
                                    </Form.Group>

                                </Col>
                                <Col className="user-right" xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Provinsi</Form.Label>
                                        <Form.Select id='select-provinsi'>
                                             <option value="none" selected disabled hidden>Pilih Provinsi</option> 
                                            {
                                                provinsi?.length > 1 ? (
                                                    provinsi?.map((item, i) => {
                                                        return <option key={i} value={i} >{item.nama}</option>
                                                    })
                                                ) : <option>Pilih Provinsi</option>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kota/Kabupaten</Form.Label>
                                        <Form.Select id='select-kota'>
                                            <option value="none" selected disabled hidden>Pilih Kota/Kabupaten</option> 
                                             {
                                                kota?.length > 1 ? (
                                                    kota?.map((item, i) => {
                                                        return <option key={i} value={i} >{item?.nama}</option>
                                                    })
                                                ) : <option>Pilih Kota/Kabupaten</option>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kecamatan</Form.Label>
                                        <Form.Select id='select-kecamatan'>
                                             <option value="none" selected disabled hidden>Pilih Kecamatan</option> 
                                             {
                                                kecamatan?.length > 1 ? (
                                                    kecamatan?.map((item, i) => {
                                                        return <option key={i} value={i} >{item?.nama}</option>
                                                    })
                                                ) : <option>Pilih Kecamatan</option>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Kelurahan</Form.Label>
                                        <Form.Select id='select-kelurahan'>
                                            <option value="none" selected disabled hidden>Pilih Kelurahan</option> 
                                             {
                                                kelurahan?.length > 1 ? (
                                                    kelurahan?.map((item, i) => {
                                                        return <option key={i} value={i}>{item?.nama}</option>
                                                    })
                                                ) : <option>Pilih Kelurahan</option>
                                            }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Catatan</Form.Label>
                                        <Form.Control type="text" name="catatan" className="right-textbox"
                                        />
                                    </Form.Group>
                                    <Row>
                                        <Col className="text-end" md={12}>
                                            <Button type="submit">Simpan</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}