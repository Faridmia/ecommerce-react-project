import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/SharedComponents/Header/Header";
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
}

export default Root;