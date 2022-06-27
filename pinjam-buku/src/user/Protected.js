import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const getLocal = JSON.parse(localStorage.getItem('myData'))

    if (getLocal === null) {
        return <Navigate to="/masuk" replace />;
    }
    return children;
}

export default Protected;