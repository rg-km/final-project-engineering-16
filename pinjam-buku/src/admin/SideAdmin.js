import { Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function SideAdmin() {

    return (
        <div className="col-lg-2 g-0">
            <ul className="list-unstyled sidenav">
                <li className="pt-1">
                    <Nav.Link href="/profile-admin" className="side-profile">Profile</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/data-buku" className="side-profile">Data Buku</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="/ajuan-pinjam" className="side-profile">Ajuan Pinjaman</Nav.Link>
                </li>
                <li className="keluar pb-2">
                    <Nav.Link href="/" className="side-profile">Logout</Nav.Link>
                </li>
            </ul>
        </div>
    )
}