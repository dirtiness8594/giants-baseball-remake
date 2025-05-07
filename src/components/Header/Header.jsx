import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { BsList, BsBookmarkHeart, BsFillHousesFill, BsFileText, BsPatchQuestion, BsWhatsapp } from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";

function Header() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


    return (

        <header className="header">
            <div className="header__top">
                <div className="header__name">São Paulo Giants Beiseball & Softball</div>
                <div className="header__website">
                    <a href="">giants.com.br</a>
                </div>
            </div>

            <div className="header__bottom">
                <div className="header__logo">
                    <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=97,h=41,fit=crop,trim=0;0;13.738095238095237;0/YrDXLjN9Kgf9k0GL/logo-gts-AGBvrJ7MzkUq35e4.png" alt="" srcSet="" />
                </div>

                {/* Botão do menu mobile */}
                <button
                    className="header__mobile-toggle"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <BsX /> : <BsList />}
                </button>

                {/* Menu principal */}
                <nav className={`header__nav ${isMobileMenuOpen ? 'is-active' : ''}`}>
                    <ul className="header__list header__list--pages">
                        <li className="header__item"><a href="" className="header__anchor"><BsFillHousesFill />Home</a></li>
                        <li className="header__item"><a href="#" className="header__anchor"><BsBookmarkHeart />Formulário</a></li>
                        <li className="header__item"><a href="#about" className="header__anchor"><BsFileText />Sobre</a></li>
                        <li className="header__item"><a href="" className="header__anchor"><BsPatchQuestion />Ajuda</a></li>
                    </ul>
                    <ul className="header__list header__list--social">
                        <li className="header__item"><a className="header__anchor" href="#"><FaInstagram /></a></li>
                        <li className="header__item"><a className="header__anchor" href="#"><RiFacebookCircleLine /></a></li>
                        <li className="header__item"><a className="header__anchor" href="#"><BsWhatsapp /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
