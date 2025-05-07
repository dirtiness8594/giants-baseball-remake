import React, { useState } from 'react';

function Localization() {
    const [showMap, setShowMap] = useState(false);

    return (
        <div className="localization">
            <div className="localization__left">
                <h2 className="localization__main-title">Localização</h2>
                <div className="localization__section">
                    <h4 className="localization__subtitle">Endereço</h4>
                    <p>Av. Pres. Castelo Branco, 5446 - Bom Retiro, São Paulo - SP, 01142-300</p>
                    {!showMap && (
                        <button onClick={() => setShowMap(true)} className="localization__button">
                            Ver no mapa
                        </button>
                    )}
                </div>

                {showMap && (
                    <div className="localization__map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58533.68750243117!2d-46.633793!3d-23.519714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5870724becd5%3A0x7775d441f9be4d5c!2sAv.%20Pres.%20Castelo%20Branco%2C%205446%20-%20Casa%20Verde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005034-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1744752460400!5m2!1sen!2sus"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização"
                        ></iframe>
                    </div>
                )}

                <div className="localization__section">
                    <h4 className="localization__subtitle">Contatos</h4>
                    <p>
                        <a href="mailto:contato@giants.com.br">contato@giants.com.br</a> -{' '}
                        <a href="tel:+5511992901234">(11) 99290-1234 (Mark)</a>
                    </p>
                </div>

                <div className="localization__section">
                    <h4 className="localization__subtitle">Redes Sociais</h4>
                    <div className="localization__socials">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                        <a href="https://wa.me/5511992901234" target="_blank" rel="noopener noreferrer">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Localization;
