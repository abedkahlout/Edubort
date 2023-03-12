import React from 'react'
import Cards from '../Components/Layout/Cards'
import DrawerAppBar from '../Components/Layout/DrawerAppBar'
import Footer from '../Components/Layout/Footer'
import HeroSection from '../Components/Layout/HeroSection'
import Instructor from '../Components/Layout/Instructor'
import SliderCard from '../Components/Layout/SliderCards'
import Somevalue from '../Components/Layout/Somevalue'
import TabPanel from '../Components/Layout/TabPanel'

function Home() {
  return (
    <div>
        <DrawerAppBar />
        <HeroSection />
        <Cards />
        <TabPanel />
        <Instructor />
        <SliderCard />
        <Somevalue />
        <Footer />
    </div>
  )
}

export default Home