import Landing from './home/Landing'
import HomeScroll from './home/HomeScroll'
import ContactCta from '../global/ContactCta'

function Home() {

    return (
        <main className='home'>
            <Landing />
            <HomeScroll />
            <ContactCta />
        </main>
    )
}

export default Home
