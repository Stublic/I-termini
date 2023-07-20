"use client";
import { Footer, Navbar } from '/components';
import { About, Explore, Pricing, GetStarted, Hero} from '/sections';

const Brijacnica = () => {
  return (
    <div className='bg-primary-black overflow-hidder'>
    <Navbar/>
    <Hero />
    <div className='relative'>
    <About />
    <div className='gradient-03 z-0'/>
    <Explore />
    </div>
    <div className='relative'>
    <div className='gradient-04 z-0'/>
    <Footer />
    </div>
  </div>
  )
}

export default Brijacnica