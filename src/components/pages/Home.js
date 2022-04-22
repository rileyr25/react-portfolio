import Landing from './home/Landing'
import HomeScroll from './home/HomeScroll'
import ContactCta from '../global/ContactCta'

function Home() {

    return (
        <main className='home pb-20'>
            <Landing />
            <HomeScroll />
            <ContactCta />
        </main>
    )
}

export default Home
