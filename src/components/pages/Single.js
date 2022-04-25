import { useLocation } from "react-router-dom"
import Icon from "../global/Icon"


function Single() {
    const location = useLocation()
    const data = location.state

    const IMG_PATH = '/assets/images/'

    return (
        <main className="w-4/5 m-auto h-screen max-w-4xl">
            <div className="single-header w-full flex items-center justify-between mt-16">
                <h1 className="font-semibold text-3xl xs:text-4xl max-w-[53%] sm:max-w-[70%]">{data.title}</h1>
                <div className="links flex items-center">
                    {data.repo
                    ?   <div className="project-link flex items-center space-x-2 px-3 py-1 xs:py-2 bg-blue-500 rounded-lg">
                        <a href={data.liveLink} target='_blank' className="site-link transition-colors pr-3 py-2 border-r border-blue-600 text-white hover:text-gray-300 font-semibold">Live Site</a>
                        <a href={data.repo} target='_blank' className="" ><Icon name='GitHub' class='transition-colors text-2xl mx-1 text-white hover:text-gray-300' /></a>
                        </div>
                    :   <div className="project-link flex items-center space-x-2 px-3 py-1 xs:py-2 bg-blue-500 rounded-lg">
                        <a href={data.liveLink} target='_blank' className="site-link transition-colors py-2 text-white hover:text-gray-300 font-semibold">Live Site</a>
                        </div>
                    }
                </div>
            </div>
            <div className="project-display pb-8">
                <img src={`${IMG_PATH}${data.images.img2}`} alt="" />
                <ul className="flex justify-evenly flex-wrap sm:text-xl">
                {data.skills.map(skill => 
                    <li className="flex px-2 items-center"><Icon name={skill} class='text-2xl mr-1 sm:mr-2' />{skill}</li>
                )}
                </ul>
            </div>
            <div className="overview">
                <h2 className="text-2xl sm:text-3xl">Overview</h2>
                <p className="text-lg">{data.about}</p>
            </div>
            {data.feat
            ?   <div className="features pt-7">
                <h2 className="text-2xl sm:text-3xl">Features</h2>
                <p>{data.feat}</p>
                </div>
            :   <div></div>
            }
            {data.exp
            ?   <div className="experience pt-7">
                <h2 className="text-2xl sm:text-3xl">Experience</h2>
                <p>{data.exp}</p>
                </div>
            :   <div></div>
            }
        </main>
    )
}

export default Single