import React from "react";
import NavBar from '../component/navbar'
import Jumbotron from "./jumbotron";
import CardBite from "./CardBite";
import Gallery from "./gallery";
import FeedbackCarousel from "./FeedbackCarousel";
import Footer from "./footer"

const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<CardBite />
			<Gallery />
			<FeedbackCarousel />
			<Footer />
		</div>
	);
};

export default Home;
