import React from 'react'
import {content} from '../../../data/content'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, EffectCoverflow } from "swiper";
import "swiper/css/effect-cards";
import 'swiper/css'


function HomeScroll() {
    let proData = content.projects.landingContent
    let labData = content.lab.landingContent

    const IMG_PATH = '/assets/images/'

    return (
        <section className='home-scroll pt-12'>
            <section id='projects' className="home-projects">
                <h2 className='text-center font-semibold text-2xl'>{proData.title}</h2>
                <p>{proData.excerpt}</p>
                <Swiper
                effect={"cards"}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="project-images">
                    <SwiperSlide><img src={`${IMG_PATH}${proData.images.img1}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={`${IMG_PATH}${proData.images.img2}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={`${IMG_PATH}${proData.images.img3}`} alt="" /></SwiperSlide>
                </Swiper>
                <Link to='/projects'>View Projects</Link>
            </section>

            <section id='lab' className="home-lab">
                <h2 className='text-center font-semibold text-2xl'>{labData.title}</h2>
                <p>{labData.excerpt}</p>
                <Swiper
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="lab-images">
                    <SwiperSlide><img  src={`${IMG_PATH}${labData.images.img1}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img  src={`${IMG_PATH}${labData.images.img2}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img  src={`${IMG_PATH}${labData.images.img3}`} alt="" /></SwiperSlide>
                </Swiper>
                <Link to='/lab'>Visit Lab</Link>
            </section> 
        </section>
    )
}

export default HomeScroll
