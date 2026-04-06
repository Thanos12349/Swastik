import React from 'react'
import Header from '../Components/Header'
import HeroSlider from '../Components/HeroSlider'
import Programs from '../Components/Programs'
import Testimonials from '../Components/Testimonials'
import HeroVideo from '../Components/HeroVideo'
import Spaces from '../Components/Spaces'
import Associations from '../Components/Associations'
import SwastikLiving from '../Components/SwastikLiving'
import Footer from '../Components/Footer'
const Home = () => {
    return (
        <>
            <Header />
            <HeroSlider />
            <Programs />
            <HeroVideo />
            <SwastikLiving />
            <Spaces />
            <Testimonials />
            <Associations />
            <Footer />
        </>
    )
}
export default Home