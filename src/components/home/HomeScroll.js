import React from 'react'
import {content} from '../../data/content'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'


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

                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={swiper => console.log(swiper)}
                    >
                    <SwiperSlide><img src={`${IMG_PATH}${proData.images.img1}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={`${IMG_PATH}${proData.images.img2}`} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={`${IMG_PATH}${proData.images.img3}`} alt="" /></SwiperSlide>
                </Swiper>
            </section>

            <section className="home-lab">
                <h1>{labData.title}</h1>
                <p>{labData.excerpt}</p>
                
            </section>
        </div>
    )
}

export default HomeScroll
