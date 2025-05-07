import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=97,h=41,fit=crop,trim=0;0;13.738095238095237;0/YrDXLjN9Kgf9k0GL/logo-gts-AGBvrJ7MzkUq35e4.png"
            alt="Logo São Paulo Giants"
            loading="lazy"
          />
        </div>
        <div className="footer__rights">
          © {new Date().getFullYear()} São Paulo Giants Beiseball & Softball.
          Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
