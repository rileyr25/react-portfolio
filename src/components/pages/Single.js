import { useLocation } from "react-router-dom"
import Icon from "../global/Icon"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import 'swiper/css'

function Single() {
    const location = useLocation()
    const data = location.state

    const IMG_PATH = '/assets/images/'

    return (
        <main className="w-4/5 m-auto h-screen max-w-4xl">
            <div className="single-header w-full flex items-center justify-between mt-16">
                <h1 className="font-semibold text-2xl xs:text-3xl sm:text-4xl">{data.title}</h1>
                <div className="links flex items-center">
                    <a href={data.liveLink} target='_blank' className="site-link px-3 py-2 sm:px-4 sm:py-3 bg-blue-500 rounded-lg text-white font-semibold">Live Site</a>
                    <a href={data.repo} target='_blank' className="p-2 ml-2 sm:ml-3" ><Icon name='github' class='text-2xl sm:text-4xl transition-colors text-blue-500 hover:text-blue-700' /></a>
                </div>
            </div>
            <div className="project-display">
                <img src={`${IMG_PATH}${data.images.img2}`} alt="" />
            </div>
            <div className="overview">
                <h2 className="text-2xl sm:text-3xl">Overview</h2>
                <p className="text-lg">{data.about}</p>
            </div>
        </main>
    )
}

export default Single