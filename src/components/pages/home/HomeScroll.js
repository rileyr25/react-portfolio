import React from 'react'
import {content} from '../../../data/content'
import { Link } from 'react-router-dom';
// Core modules imports are same as usual
import { Navigation, Pagination, EffectCoverflow } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
// import 'swiper/modules/effect-coverflow/effect-coverflow.scss';
// import 'swiper/css/effect-coverflow';

// // import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
// import { Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/swiper-bundle.min.css'

// // swiper core styles
// import 'swiper/swiper.min.css'

// // modules styles
// import 'swiper/components/navigation/navigation.min.css'
// import 'swiper/components/pagination/pagination.min.css'

function HomeScroll() {
    let proData = content.projects.landingContent
    let labData = content.lab.landingContent

    const IMG_PATH = '/assets/images/'

    return (
        <div className='HomeScroll'>
            <section id='projects' className="home-projects">
                <h2>{proData.title}</h2>
                <p>{proData.excerpt}</p>
                <div className="swiper-container">
                    <Swiper
                        modules={[Navigation, Pagination, EffectCoverflow]}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={swiper => console.log(swiper)}
                        >
                        <SwiperSlide><img src={`${IMG_PATH}${proData.images.img1}`} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={`${IMG_PATH}${proData.images.img2}`} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={`${IMG_PATH}${proData.images.img3}`} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <Link to='/projects'>View Projects</Link>
            </section>

            <section id='lab' className="home-lab">
                <h2>{labData.title}</h2>
                <p>{labData.excerpt}</p>
                <div className="lab-images">
                    <img  src={`${IMG_PATH}${labData.images.img1}`} alt="" />
                    <img  src={`${IMG_PATH}${labData.images.img2}`} alt="" />
                    <img  src={`${IMG_PATH}${labData.images.img3}`} alt="" />
                </div>
                <Link to='/lab'>Visit Lab</Link>
            </section> 
        </div>
    )
}

export default HomeScroll
