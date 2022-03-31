import React from 'react'
import {content} from '../../../data/content'
import { Link } from 'react-router-dom';

function HomeScroll() {
    let proData = content.projects.landingContent
    let labData = content.lab.landingContent

    const IMG_PATH = '/assets/images/'

    // <SwiperSlide><img src={`${IMG_PATH}${proData.images.img1}`} alt="" /></SwiperSlide>
    // <SwiperSlide><img src={`${IMG_PATH}${proData.images.img2}`} alt="" /></SwiperSlide>
    // <SwiperSlide><img src={`${IMG_PATH}${proData.images.img3}`} alt="" /></SwiperSlide>

    return (
        <div className='home-scroll pt-12'>
            <section id='projects' className="home-projects">
                <h2>{proData.title}</h2>
                <p>{proData.excerpt}</p>
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
