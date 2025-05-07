import React from "react";
import { CiCircleInfo } from "react-icons/ci";

function Sponsors() {
  const sponsorsData = [
    {
      name: "Cloud ICE",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=269,h=190,fit=crop/YrDXLjN9Kgf9k0GL/cloudace-A1aKkNbewXu5x5My.jpg",
      website: "https://www.sponsor1website.com",
      description: "Descrição do patrocinador 1",
    },
    {
      name: "+ Esporte - Remédio",
      logo: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=293,h=163,fit=crop/YrDXLjN9Kgf9k0GL/maisesporte-m7VpLjR8DEHkpRlJ.png",
      website: "https://www.sponsor2website.com",
      description: "Descrição do patrocinador 2",
    },
  ];

  return (
    <div className="sponsors">
      <h2 className="sponsors__title">Nossos patrocinadores</h2>
      <p className="sponsor__info">
        <CiCircleInfo /> As empresas que nos apoiam
      </p>
      <div className="sponsors__list">
        {sponsorsData.map((sponsor, index) => (
          <div className="sponsor" key={index}>
            <img
              src={sponsor.logo}
              alt={`${sponsor.name} Logo`}
              className="sponsor__logo"
              loading="lazy"
            />
            <h3 className="sponsor__name">{sponsor.name}</h3>
            <p className="sponsor__description">{sponsor.description}</p>
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor__link"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
