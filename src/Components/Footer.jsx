import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <footer className="bg-light text-center text-lg-start">
                            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                                © 2020 Copyright:
                                <Link className="text-dark text-decoration-none" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
