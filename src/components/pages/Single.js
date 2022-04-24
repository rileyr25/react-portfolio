import { useLocation } from "react-router-dom"

function Single() {
    const location = useLocation()
    const data = location.state

    return (
        <main className="w-3/4 m-auto h-screen">
            <div className="single-header w-full flex items-center justify-between mt-16">
                <h1>{data.title}</h1>
                <a href={data.liveLink} target='_blank' className="site-link p-2 bg-blue-500 rounded-lg text-white font-semibold">Live Site</a>
            </div>
        </main>
    )
}

export default Single