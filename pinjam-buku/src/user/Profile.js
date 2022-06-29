import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import { Container, Row, Col, Nav, Button, Form } from 'react-bootstrap'
import HeaderDashboard from '../components/HeaderDashboard';
import Sidebar from '../components/Sidebar'
import '../styles/user/Profile/Profile.css'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Profile() {
    const getLocal = JSON.parse(localStorage.getItem('myData'))
    const [provinsi, setProvinsi] = useState([])
    const [kota, setkota] = useState([])
    const [kecamatan, setkecamatan] = useState([])
    const [kelurahan, setkelurahan] = useState([])
    const [imageProfile, setImageProfile] = useState("")
    const [urlImageProfile, setUrlImageProfile] = useState("")
    // data user update API
    const [picture_profile, setPP] = useState("")
    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [phone_number, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [id, setID] = useState("")

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

    const getProvinsi = async () => {
        await axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi").then((res) => {
            setProvinsi(res?.data?.provinsi)
        })
    }
    const getKota = async (valueId) => {
        const id = provinsi[valueId]?.id
        await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=` + id).then((res) => {
            console.log('res', res)
            setkota(res?.data?.kota_kabupaten)
        })
    }

    const getKecamatan = async (valueId) => {
        const id = kota[valueId]?.id
        await axios.get("https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=" + id).then((res) => {
            console.log('rescama', res)
            setkecamatan(res?.data?.kecamatan)
        })
    }
    const getKelurahan = async (valueId) => {
        const id = kecamatan[valueId]?.id
        console.log('id', id)
        await axios.get("https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=" + id).then((res) => {
            console.log('resle', res)
            setkelurahan(res?.data?.kelurahan)
        })
    }

    const handleProvinsi = (e) => {
        getKota(e.target.value)
    }

    const handleKota = (e) => {
        getKecamatan(e.target.value)
    }

    const handleKecamatan = (e) => {
        getKelurahan(e.target.value)
    }

    const handleKelurahan = (e) => {
        console.log('value kelurahan ', kelurahan[e.target.value].nama)
        setAddress(kelurahan[e.target.value].nama)
    }

    // post API
    const uploadForm = (files) => {
        const formDatauser = new FormData()
        formDatauser.append('picture_profile', urlImageProfile)
        formDatauser.append('fullname', fullname)
        formDatauser.append('phone_number', phone_number)
        formDatauser.append('address', address)

        axios.put("https://api-dev.pinjambuku.me/api/v1/user/" + getLocal.id, formDatauser,
            {
                headers: {
                    Authorization: `Bearer${getLocal.token}`
                }
            }).then((res) => {
                console.log("ini data user ", res)
                getUsers()
                Toast.fire({
                    icon: 'success',
                    title: 'Data diri berhasil disimpan!'
                })
            }).catch((err) => {
                console.log("error update user ", err)
            })

        const formProfile = new FormData()
        formProfile.append("file", imageProfile)
        formProfile.append("upload_preset", "guobl0vj")
        axios.post("https://api.cloudinary.com/v1_1/dh3dgxadu/image/upload", formProfile)
            .then((res) => {
                console.log("ini url foto profile ", res.data.secure_url)
                setUrlImageProfile(res.data.secure_url)
            })
    }

    const getUsers = () => {
        axios.get("https://api-dev.pinjambuku.me/api/v1/user/" + getLocal.id,
            {
                headers: { Authorization: `Bearer${getLocal.token}` }
            }).then((result) => {
                setPP(result.data.data.profile_picture)
                setEmail(result.data.data.email)
                setFullname(result.data.data.fullname)
                setPhone(result.data.data.phone_number)
                setAddress(result.data.data.address)
                setID(result.data.data.id)
            }).catch((err) => {
                console.log("error get data user ", err)
            })
    }

    useEffect(() => {
        getUsers()
        getProvinsi()
    }, [])

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
                                    <input type="file" name="picture_profile" value={picture_profile}
                                        onChange={(e) => {
                                            setImageProfile(e.target.files[0])
                                        }} />
                                </Col>
                                <Col md={10} className="image-text">
                                    Ubah Photo
                                </Col>
                            </Row>
                            <Row className="data-user">
                                <Col className="user-left" xs={12} md={6}>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control type="text" name="fullname" value={fullname}
                                            onChange={(e) => { setFullname(e.target.value) }}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicNoTlp">
                                        <Form.Label>No. Telepon</Form.Label>
                                        <Form.Control type="number" name="phone_number" value={phone_number}
                                            onChange={(e) => { setPhone(e.target.value) }}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" value={email} disabled
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" disabled
                                        />
                                    </Form.Group>

                                </Col>
                                <Col className="user-right" xs={12} md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Provinsi</Form.Label>
                                        <Form.Select id='select-provinsi' onChange={(e) => handleProvinsi(e)}>
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
                                        <Form.Select id='select-kota' onChange={(e) => handleKota(e)}>
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
                                        <Form.Select id='select-kecamatan' onChange={(e) => handleKecamatan(e)}>
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
                                        <Form.Select id='select-kelurahan' onChange={(e) => handleKelurahan(e)}>
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
                                    <Row>
                                        <Col className="text-end" md={12}>
                                            <Button onClick={uploadForm}>Simpan</Button>
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