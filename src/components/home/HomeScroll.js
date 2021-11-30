import React from 'react'
import {content} from '../../data/content'
  // core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import img from '../../images/binger.png'


  // configure Swiper to use modules


// Copy with options

// let data = {testData}.json

function HomeScroll() {
    console.log(content)
    let proData = content.projects.landingContent
    let labData = content.lab.landingContent

    return (
        <div className='HomeScroll'>
            <section className="home-projects">
                <h1>{proData.title}</h1>
                <p>{proData.excerpt}</p>

                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    centeredSlides
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={swiper => console.log(swiper)}
                    >
                    <SwiperSlide><img src={img} alt="" /></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
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
