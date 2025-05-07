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

import { BsList, BsX } from 'react-icons/bs'; // Ícones para abrir/fechar menu
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>

            <Header />  
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/page/:id" element={<Page />} />
                </Routes>
            </Router>
            <Footer />

        </>
    )
}

export default App
