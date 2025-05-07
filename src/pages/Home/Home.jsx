import React, { useState  } from 'react';
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
import Headline from '../../components/Sections/Headline/Headline';
import Highlight from '../../components/Sections/Highlight/Highlight';
import Sponsors from '../../components/Sections/Sponsors/Sponsors';
import Categories from '../../components/Sections/Categories/Categories';
import Localization from '../../components/Sections/Localization';


function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
} = useForm();

const [showMap, setShowMap] = useState(false);

const onSubmit = (data) => {
    console.log('Form data:', data);
    reset();
};

  return (
    <main>

            <Headline />

            <div className="divider" id="divider__animated">
                <GiBaseballBat />
                <CiBaseball className="animated" />
                <PiBaseballHelmet />
            </div>

            <Highlight />
            <Sponsors />
            <Categories />
           

            <div className="divider">
                <PiBaseballHelmet />
                <GiBaseballGlove />
                <GiBaseballBat />
            </div>

            <Localization />    

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


    </main>
  );
}

export default Home;
