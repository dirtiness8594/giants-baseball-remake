import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiCircleInfo } from "react-icons/ci";

function Highlight() {
    const highlightData = {
        title: "Conheça nosso time",
        info: "Entenda como surgimos",
        description:
            "A muito tempo dedicamos nossa paixão pelo Beisebol. Fundados em 1998. Contando hoje com tantos membros, somos.",
        buttonLabel: "Ver história completa",
        images: [
            "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg",
            "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg",
            "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg",
            "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg",
        ],
    };

    return (
        <section className="highlight" id="about">
            <div className="highlight__title">{highlightData.title}</div>
            <div className="highlight__info">
                <CiCircleInfo /> {highlightData.info}
                <p>{highlightData.description}</p>
                <button className="localization__button">
                    {highlightData.buttonLabel}
                </button>
            </div>

            <div className="highlight__images">
                <Swiper
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {highlightData.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Imagem ${index + 1}`}
                                loading="lazy"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Highlight;
