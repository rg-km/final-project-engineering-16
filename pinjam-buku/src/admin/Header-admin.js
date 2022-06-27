import "../styles/admin/NavAdmin.css"
import "../styles/admin/Dashboard/Dashboard.css"

export default function HeadAdmin () {
    const name = "Perpustakaan DKI Jakarta"
    return (
        <div className="container">
                <div className="row">
                    <div className="col-xxl-12 head">
                        <img src={require("../images/profile.jfif")} 
                            className="img-fluid img-nav mt-2 mb-2 ms-2 float-start" alt="photo">
                        </img>
                        <p className="mt-3 mb-2 welcome">Selamat Datang, {name}</p>
                    </div>
                </div>
        </div>
    )
}