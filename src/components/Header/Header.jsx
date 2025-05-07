import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import {
  BsList,
  BsBookmarkHeart,
  BsFillHousesFill,
  BsFileText,
  BsPatchQuestion,
  BsWhatsapp,
} from "react-icons/bs";
import { RiFacebookCircleLine } from "react-icons/ri";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { href: "", icon: <BsFillHousesFill />, label: "Home" },
    { href: "#", icon: <BsBookmarkHeart />, label: "Formulário" },
    { href: "#about", icon: <BsFileText />, label: "Sobre" },
    { href: "", icon: <BsPatchQuestion />, label: "Ajuda" },
  ];

  const socialLinks = [
    { href: "#", icon: <FaInstagram /> },
    { href: "#", icon: <RiFacebookCircleLine /> },
    { href: "#", icon: <BsWhatsapp /> },
  ];

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__name">
          São Paulo Giants Beiseball & Softball
        </div>
        <div className="header__website">
          <a href="">giants.com.br</a>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__logo">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=97,h=41,fit=crop,trim=0;0;13.738095238095237;0/YrDXLjN9Kgf9k0GL/logo-gts-AGBvrJ7MzkUq35e4.png"
            alt=""
            srcSet=""
            loading="lazy"
          />
        </div>
        <button
          className="header__mobile-toggle"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <BsX /> : <BsList />}
        </button>
        <nav className={`header__nav ${isMobileMenuOpen ? "is-active" : ""}`}>
          <ul className="header__list header__list--pages">
            {pages.map((page, index) => (
              <li className="header__item" key={index}>
                <a href={page.href} className="header__anchor">
                  {page.icon}
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="header__list header__list--social">
            {socialLinks.map((social, index) => (
              <li className="header__item" key={index}>
                <a className="header__anchor" href={social.href}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
