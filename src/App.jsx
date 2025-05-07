import { useState } from 'react'
import './App.css'
import { FaInstagram } from "react-icons/fa";
import { CiCircleInfo, CiBaseball, CiMemoPad, CiCirclePlus, CiHome, CiFacebook, CiChat1 } from "react-icons/ci";
import { BsStars, BsBookmarkHeart, BsFillHousesFill, BsFileText, BsPatchQuestion, BsWhatsapp } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { GiBaseballBat, GiBaseballGlove } from "react-icons/gi";
import 'swiper/css';
import { PiBaseballHelmet } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";

import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useForm } from 'react-hook-form';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Page from "./pages/Page"
import Home from "./pages/Home"

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
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=97,h=41,fit=crop,trim=0;0;13.738095238095237;0/YrDXLjN9Kgf9k0GL/logo-gts-AGBvrJ7MzkUq35e4.png" alt="" srcSet="" />
                    </div>
                    <nav className="header__nav">
                        <ul className="header__list header__list--pages">
                            <li className="header__item">
                                <a href="" className="header__anchor">
                                    <BsFillHousesFill />Home
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#" className="header__anchor">
                                    <BsBookmarkHeart />Formulário
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="#about" className="header__anchor">
                                    <BsFileText />
                                    Sobre
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="" className="header__anchor">
                                    <BsPatchQuestion />Ajuda
                                </a>
                            </li>
                        </ul>
                        <ul className="header__list header__list--social">
                            <li className="header__item">
                                <a className="header__anchor" href="http://" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li className="header__item">
                                <a className="header__anchor" href="http://" target="_blank" rel="noopener noreferrer">
                                    <RiFacebookCircleLine />
                                </a>
                            </li>
                            <li className="header__item">
                                <a className="header__anchor" href="http://" target="_blank" rel="noopener noreferrer">
                                    <BsWhatsapp />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__container">
                </div>
            </header>

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page/:id" element={<Page />} />
                </Routes>
            </Router>

            <footer className="footer">
                <div className="footer__content">
                    <div className="footer__logo">
                        <img
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=97,h=41,fit=crop,trim=0;0;13.738095238095237;0/YrDXLjN9Kgf9k0GL/logo-gts-AGBvrJ7MzkUq35e4.png"
                            alt="Logo São Paulo Giants"
                        />
                    </div>
                    <div className="footer__rights">
                        © {new Date().getFullYear()} São Paulo Giants Beiseball & Softball. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
