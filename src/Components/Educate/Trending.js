import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import CardTrends from "./CardTrends";
import "./StyleEducat.css";

const cardsMap = [
	{
		title: "The Complete Digital Marketing Course - 12 Courses in 1",
		money: "140",
		amg: "/assets/4.webp",
	},
	{
		title: "Fundamentals of Business Analysis",
		money: "155",
		amg: "/assets/3.webp",
	},
	{
		title: "Google Ads Training: Become a PPC Expert",
		money: "221",
		amg: "/assets/55.webp",
	},
	{
		title: "Behavior, Psychology and Care Training",
		money: "158",
		amg: "/assets/66.webp",
	},
	{
		title: "Microsoft Excel - Excel from Beginner to Advanced",
		money: "250",
		amg: "/assets/77.webp",
	},
	{
		title: "Twitter Marketing & Twitter Ads For Beginners",
		money: "300",
		amg: "/assets/3.webp",
	},
];
function Trending() {
	return (
		<Container sx={{mb:7}}>
			<Typography variant="h4" mt={12} sx={{ fontWeight: 700, mb: 0 }}>
				Our <span className="yellow">Trending</span> Courses.
			</Typography>
			<Typography variant="body2" sx={{ margin: "5px" }}>
				Check out most 🔥 courses in the market
			</Typography>
			<Stack direction="row" justifyContent="space-between" flexWrap="wrap">
				{cardsMap.map((e) => (
					<CardTrends amg={e.amg} title={e.title} money={e.money} />
				))}
			</Stack>
		</Container>
	);
}

export default Trending;
