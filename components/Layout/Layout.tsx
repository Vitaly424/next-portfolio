import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);

export default Layout;
