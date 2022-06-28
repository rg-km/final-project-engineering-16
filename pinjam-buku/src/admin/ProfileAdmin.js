

export default function ProfileAdmin() {

    return (
        <div className="col-lg-10">
            <div className="body-d">
                <div className="pt-3 ps-4">
                    <h5>Profile Perpustakaan</h5>
                </div>
                <div className="d-flex flex-row">
                    <img src={require("../images/profile.jfif")} 
                        className="img-fluid img-profile mt-2 mb-2 ms-4" alt="photo">
                    </img>
                    <p className="ps-4 mt-5 fw-light">Ubah Photo</p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="form ps-5">
                            <div>
                                <label className="rounded">Nama Perpustakaan</label>
                            </div>
                            <div>
                                <input type="text"  />
                            </div>

                            <div>
                                <label>Nama Perpustakaan</label>
                            </div>
                            <div>
                                <input type="number"/>
                            </div>

                            <div>
                                <label>Email</label>
                            </div>
                            <div>
                                <input type="email"/>
                            </div>

                            <div>
                                <label>Password</label>
                            </div>
                            <div>
                                <input type="password"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="form ps-5 pe-5">
                            <div>
                                <label className="rounded">Alamat Lengkap</label>
                            </div>
                            <div>
                                <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Pilih Provinsi</option>
                                    <option value="1">Jawa Barat</option>
                                    <option value="2">Jawa Timur</option>
                                    <option value="3">Yogayakarta</option>
                                </select>
                            </div>
                            <div>
                            <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Pilih Kota/Kabupaten</option>
                                    <option value="1">Bandung</option>
                                    <option value="2">Malang</option>
                                    <option value="3">Sleman</option>
                                </select>
                            </div>
                            <div>
                            <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Pilih Kecamatan</option>
                                    <option value="1">Kecamatan1</option>
                                    <option value="2">Kecamatan2</option>
                                    <option value="3">Kecamatan3</option>
                                </select>
                            </div>
                            <div>
                            <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Pilih Kelurahan</option>
                                    <option value="1">Kelurahan1</option>
                                    <option value="2">Kelurahan2</option>
                                    <option value="3">Kelurahan3</option>
                                </select>
                            </div>
                            <div>
                            <select class="form-select" id="inputGroupSelect01">
                                    <option selected>Pilih Jalan</option>
                                    <option value="1">Jalan1</option>
                                    <option value="2">Jalan2</option>
                                    <option value="3">Jalan3</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder="Catatan" className="catatan"/>
                            </div>
                        </div>
                        <button class="btn btn-primary float-end mb-3 mt-3 me-5" type="button">Simpan</button>
                    </div>
                </div>
                
             </div>
        </div>
    )
    
}