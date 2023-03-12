import React from "react";
import GraySection from "../Components/Educate/GraySection";
import HeroSection from "../Components/Educate/HeroSection";
import Learn from "../Components/Educate/Learn";
import Partner from "../Components/Educate/Partner";
import Trending from "../Components/Educate/Trending";
import DrawerAppBar from "../Components/Layout/DrawerAppBar";
import Footer from "../Components/Layout/Footer";
import SliderCard from "../Components/Layout/SliderCards";

function Educate() {
	return (
		<div>
			<DrawerAppBar />
			<HeroSection />
			<Partner />
			<Learn />
			<Trending />
			<SliderCard />
			<GraySection />
			<Footer />
			
		</div>
	);
}

export default Educate;
