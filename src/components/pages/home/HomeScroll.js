import React from 'react'
import {content} from '../../../data/content'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, EffectCoverflow, Navigation } from "swiper";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import 'swiper/css'


function HomeScroll() {
    let proData = content.projects.landingContent
    let labData = content.lab.landingContent

    const IMG_PATH = '/assets/images/'

    return (
        <section className='home-scroll pt-12 px-6 max-w-45rem m-auto'>
            <section id='projects' className="home-projects text-center pb-8">
                <h2 className='font-semibold text-3xl p-5'>{proData.title}</h2>
                <p className='md:text-lg'>{proData.excerpt}</p>
                <div className="swiper-container py-10">
                    <Swiper
                    slidesPerView={1}
                    loop={true}
                    grabCursor={true}
                    effect={"cards"}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCards, Autoplay]}
                    className="project-images">
                        <SwiperSlide><img className='h-64 sm:h-[400px] m-auto' src={`${IMG_PATH}${proData.images.img1}`} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-64 sm:h-[400px] m-auto' src={`${IMG_PATH}${proData.images.img2}`} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='h-64 sm:h-[400px] m-auto' src={`${IMG_PATH}${proData.images.img3}`} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <Link to='/projects' className='w-full '>View Projects</Link>
            </section>

            <section id='lab' className="home-lab text-center pb-8">
                <h2 className='font-semibold text-3xl p-5'>{labData.title}</h2>
                <p className='md:text-lg'>{labData.excerpt}</p>
                <Swiper
                effect={"coverflow"}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                grabCursor={true}
                navigation={true}
                modules={[EffectCoverflow, Navigation]}
                className="lab-images">
                    <SwiperSlide><img  src={`${IMG_PATH}${labData.images.img1}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img  src={`${IMG_PATH}${labData.images.img2}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img  src={`${IMG_PATH}${labData.images.img3}`} alt="" /></SwiperSlide>
                </Swiper>
                <Link to='/lab' className='w-full text-center'>Visit Lab</Link>
            </section> 
        </section>
    )
}

export default HomeScroll
