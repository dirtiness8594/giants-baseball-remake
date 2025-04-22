import { useState } from 'react'
import './App.css'
import { FaInstagram } from "react-icons/fa";
import { CiCircleInfo, CiBaseball, CiMemoPad, CiCirclePlus, CiHome, CiFacebook, CiChat1 } from "react-icons/ci";
import { BsStars, BsBookmarkHeart, BsFillHousesFill, BsFileText, BsPatchQuestion, BsWhatsapp } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { RiFacebookCircleLine } from "react-icons/ri";

import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { useForm } from 'react-hook-form';

function App() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [showMap, setShowMap] = useState(false);

    const onSubmit = (data) => {
        console.log('Form data:', data);
        reset(); // limpa o form depois de enviar
    };

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
                                <a href="" className="header__anchor">
                                    <BsBookmarkHeart />Formulário
                                </a>
                            </li>
                            <li className="header__item">
                                <a href="" className="header__anchor">
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

            <section className="headline">
                <div className="headline__text">
                    Bem-vindo ao <br />São Paulo <span>Giants!</span>
                </div>

                <div className="headline__info">
                    <BsStars />    O único time de beiseball de São Paulo.
                </div>

                <div className="headline__options">
                    <button className="headline__option">Localização</button>
                    <button className="headline__option">Fale conosco</button>
                    <button className="headline__option">Ajuda</button>
                </div>
            </section>

            <div className="divider">
                <CiBaseball />
                <CiBaseball />
                <CiBaseball />
            </div>

            <section className="highlight">
                <div className="highlight__title">Conheça nosso time</div>
                <div className="highlight__info">
                    <CiCircleInfo /> Nossa historia

                    <p>
                        A muito temop dedicamos nossa paixão pelo Beisebol. Fundados em 1998. Contando hje com tantos membros, somos.
                    </p>

                    <button className="localization__button">Ver história completa</button>

                </div>
                <div className="highlight__images">
                    <Swiper
                        // spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg" alt="" srcSet="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg" alt="" srcSet="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg" alt="" srcSet="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1224,h=560,fit=crop,trim=0;15.34688995215311;0;15.34688995215311/YrDXLjN9Kgf9k0GL/geral-Yle5L1JK75C1ND4J.jpeg" alt="" srcSet="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <div className="sponsors">
                <h2 className="sponsors__title">Nossos patrocinadores</h2>
                <p className="sponsor__info">
                <CiCircleInfo /> Nossa historia

                </p>
                <div className="sponsors__list">
                    <div className="sponsor">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=269,h=190,fit=crop/YrDXLjN9Kgf9k0GL/cloudace-A1aKkNbewXu5x5My.jpg" alt="Sponsor 1 Logo" className="sponsor__logo" />
                        <h3 className="sponsor__name">Cloud ICE</h3>
                        <p className="sponsor__description"></p>
                        <a href="https://www.sponsor1website.com" target="_blank" className="sponsor__link">Visit Website</a>
                    </div>

                    <div className="sponsor">
                        <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=293,h=163,fit=crop/YrDXLjN9Kgf9k0GL/maisesporte-m7VpLjR8DEHkpRlJ.png" alt="Sponsor 2 Logo" className="sponsor__logo" />
                        <h3 className="sponsor__name">+ Esporte - Remédio</h3>
                        <p className="sponsor__description"></p>
                        <a href="https://www.sponsor2website.com" target="_blank" className="sponsor__link">Visit Website</a>
                    </div>
                </div>
            </div>

            <div className="categories">

                <div className="categories__left">
                    <h2 className="categories__main-title">Categorias</h2>
                    <p className="categories__info">
                        <CiCircleInfo />Categorias de base que temos:
                    </p>
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/2022/2022688.png" alt="" srcSet="" /> */}
                    <table className="categories__table">
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th>Idade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tbol</td>
                                <td>5 a 8 anos</td>
                            </tr>
                            <tr>
                                <td>Pré-infantil</td>
                                <td>7 a 10 anos</td>
                            </tr>
                            <tr>
                                <td>Infantil</td>
                                <td>11 e 12 anos</td>
                            </tr>
                            <tr>
                                <td>Pré-júnior</td>
                                <td>13 e 14 anos</td>
                            </tr>
                            <tr>
                                <td>Júnior</td>
                                <td>15 e 16 anos</td>
                            </tr>
                            <tr>
                                <td>Juvenil</td>
                                <td>17 e 18 anos</td>
                            </tr>
                            <tr>
                                <td>Softbol</td>
                                <td>8 a 13 anos</td>
                            </tr>
                            <tr>
                                <td>Veteranos</td>
                                <td>50+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="categories__right">
                    <div className="categories__grid">
                        <img src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449" alt="Baseball 1" className="categories__image" />
                        <img src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449" alt="Baseball 2" className="categories__image" />
                        <img src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449" alt="Baseball 3" className="categories__image" />
                        <img src="https://images.unsplash.com/photo-1578432014316-48b448d79d57?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHw0fHxiYXNlYmFsbHxlbnwwfHx8fDE3MDczNDE4NzV8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=688&h=449" alt="Baseball 4" className="categories__image" />
                    </div>
                </div>
            </div>

            <div className="divider">
                <CiBaseball />
                <CiBaseball />
                <CiBaseball />
            </div>

            <div className="localization">
                <div className="localization__left">
                    <h2 className="localization__main-title">Localização</h2>
                    <div className="localization__section">
                        <h4 className="localization__subtitle">Endereço</h4>
                        <p>Av. Pres. Castelo Branco, 5446 - Bom Retiro, São Paulo - SP, 01142-300</p>
                        {!showMap && (
                            <button onClick={() => setShowMap(true)} className="localization__button">Ver no mapa</button>
                        )}
                    </div>
                    {showMap && (
                        <div className="localization__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58533.68750243117!2d-46.633793!3d-23.519714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5870724becd5%3A0x7775d441f9be4d5c!2sAv.%20Pres.%20Castelo%20Branco%2C%205446%20-%20Casa%20Verde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005034-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1744752460400!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    )}
                    <div className="localization__section">
                        <h4 className="localization__subtitle">Contatos</h4>
                        <p><a href="mailto:contato@giants.com.br">contato@giants.com.br</a> -     <a href="tel:+5511992901234">(11) 99290-1234 (Mark)</a></p>
                    </div>

                    <div className="localization__section">
                        <h4 className="localization__subtitle">Redes Sociais</h4>
                        <div className="localization__socials">
                            <a href="#" target="_blank">Facebook</a>
                            <a href="#" target="_blank">Instagram</a>
                            <a href="#" target="_blank">WhatsApp</a>
                        </div>
                    </div>
                </div>


            </div>

            <div className="contact">
                <div className="contact__container">
                    <h2 className="contact__main-title">Contact</h2>
                    <p className="contact__info">
                        <CiCircleInfo />Iremos responder seu contato em <b>em até 48h</b>, então escolha seu e-mail favorito.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
                        <div className="contact__field">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                {...register('name')}
                                placeholder="Your name"
                            />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="email">Email *</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <span className="contact__error">{errors.email.message}</span>
                            )}
                        </div>

                        {/* <div className="contact__field">
                            <label htmlFor="phone">Phone</label>
                            <input
                                id="phone"
                                type="tel"
                                {...register('phone')}
                                placeholder="(11) 91234-5678"
                            />
                        </div> */}

                        <div className="contact__field contact__field--message">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                rows="4"
                                {...register('message', { required: 'Message is required' })}
                                placeholder="Write your message here..."
                            ></textarea>
                            {errors.message && (
                                <span className="contact__error">{errors.message.message}</span>
                            )}
                        </div>
                        <div className="contact__send">
                            <button type="submit" className="contact__submit">Send</button>

                        </div>
                    </form>
                </div>
            </div>

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
