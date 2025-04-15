import { useState } from 'react'
import './App.css'
import { FaInstagram } from "react-icons/fa";
import { CiCircleInfo, CiMemoPad, CiCirclePlus, CiHome, CiFacebook, CiChat1 } from "react-icons/ci";



function App() {

    return (
        <>

        <header className="header">
                <div className="header__top">
                    <div className="header__name">
                        São Paulo Giants Beiseball & Softball
                    </div>
                    <div className="header__website">
                        <a href="">
                        giants.com.br
                        </a>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__logo">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=700,fit=crop,q=95/YrDXLjN9Kgf9k0GL/logo1-mv0lxv8ywrfGzpkd.jpg" alt="" srcset="" />
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list header__list--pages">
                            <li className="header__item">
                                <a href="" className="header__anchor">
                                    Home
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="" className="header__anchor">
                                    Formulário
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="" className="header__anchor">
                                    Sobre
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="" className="header__anchor">
                                    Ajuda
                                </a>
                            </li>
                        </ul>
                        <ul className="header__list header__list--social">
                            <li className="header__item">
                                <FaInstagram />
                            </li>
                            <li className="header__item">
                                <CiFacebook />
                            </li>
                            <li className="header__item">
                                <CiChat1 />
                            </li>
                        </ul>
                    </nav>
                </div>
            <div className="header__container">
            </div>
        </header>

        </>
    )
}

export default App
