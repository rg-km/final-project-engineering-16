import React, { Fragment } from "react";
import NavAdmin from "../components/NavAdmin";
import "../styles/admin/NavAdmin.css"
import "../styles/admin/Dashboard/Dashboard.css"
import HeadAdmin from "./Header-admin";
import SideAdmin from "./SideAdmin";
import ProfileAdmin from "./ProfileAdmin";

export default function DashboardAdmin (){

    return (
        <Fragment>
            <NavAdmin />
            <HeadAdmin />

            <div className="container mt-4">
                <div className="row layout">
                    <SideAdmin />
                    <ProfileAdmin />
                </div>
            </div>
        </Fragment>
    )
}