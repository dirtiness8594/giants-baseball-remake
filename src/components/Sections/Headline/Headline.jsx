import React from "react";
import { BsStars } from "react-icons/bs";

function Headline() {
    const headlineData = {
        title: "São Paulo",
        subtitle: "O único time de beiseball de São Paulo.",
        options: [
            { label: "Localização", action: "/localizacao" },
            { label: "Fale conosco", action: "/contato" },
            { label: "Ajuda", action: "/ajuda" },
        ],
    };

    return (
        <section className="headline">
            <div className="headline__text">
                Bem-vindo ao <br />
                {headlineData.title} <span>Giants!</span>
            </div>

            <div className="headline__info">
                <BsStars /> {headlineData.subtitle}
            </div>

            <div className="headline__options">
                {headlineData.options.map((option, index) => (
                    <button key={index} className="headline__option">
                        <a href={option.action}>{option.label}</a>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Headline;
