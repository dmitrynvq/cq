import {Route, Routes} from "react-router-dom";
import Main from "../pages/main";
import Profile from "../pages/profile";
import React from "react";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )

}
export default Routers