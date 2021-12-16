import React from 'react'
import {content} from '../../data/content'

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
    console.log(content)
    let proData = content.projects.landingContent
    let labData = content.lab.landingContent

    const IMG_PATH = '/assets/images/'

    return (
        <div className='HomeScroll'>
            <section className="home-projects">
                <h1>{proData.title}</h1>
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
            </section>

            <section className="home-lab">
                <h1>{labData.title}</h1>
                <p>{labData.excerpt}</p>
                <img  src={`${IMG_PATH}${labData.images.img1}`} alt="" />
                <img  src={`${IMG_PATH}${labData.images.img2}`} alt="" />
                <img  src={`${IMG_PATH}${labData.images.img3}`} alt="" />
            </section>
        </div>
    )
}

export default HomeScroll
