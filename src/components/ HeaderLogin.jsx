import React from "react";
import '../assets/Login.css';

const HeaderLogin = () => {
    return (
        <>
        <div className="container-fluid">
            <nav className="navbar d-flex justify-content-between align-items-center bg-light">
            <a  href="https://clickup.com/?noRedirect=true"  target="_blank"  rel="noopener noreferrer"  className="navbar-brand d-flex flex-column align-items-center" >
                <img  src="https://app-cdn.clickup.com/clickup_color-new.6bdf034d4532f5506afbfd1908e3ea03.svg" width={200} alt="ClickUp - Home"  className="logo-branding mb-1"  />
                <div className="logo-text fs-6"> The everything app for work. </div>
            </a>
                <div className="d-flex align-items-center gap-3">
                    <span className="">Don't have an account?</span>
                    <a href="https://app.clickup.com/signup" className="btn btn-primary">
                        Sign up
                    </a>
                </div>
            </nav>
        </div>
        </>
    );
};

export default HeaderLogin;