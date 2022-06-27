import React from "react";
import "../styles/admin/NavAdmin.css"

export default function NavAdmin(){

    return (
        <div className="container-xxl border-bottom navadmin">
            <div className="row">
                <div className="col-lg-9">
                    <p className="logo mt-1 mb-1">PINJAMBUKU</p>
                </div>
                <div className="col-lg-3">
                    <img src={require("../images/profile.jfif")} 
                    className="img-fluid img-nav mt-1 mb-1 float-end" alt="photo"></img>
                </div>
            </div>
        </div>
    )
}