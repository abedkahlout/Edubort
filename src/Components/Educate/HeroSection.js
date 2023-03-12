import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./StyleEducat.css";
function HeroSection() {
	return (
		<div className="heroEduc">
			<Box className="contText">
				<Typography
					sx={{
						p: 1,
						bgcolor: "white",
						width: { sm: "100%", lg: "30%" },
						borderRadius: "50px",
					}}
				>
					New One to one video call using web browser{" "}
				</Typography>
				<Typography variant="h2" sx={{ fontWeight: 700, color: "white" }} mt={3}>
					Start learning from{" "}
				</Typography>
				<Typography variant="h2" my={2} sx={{ fontWeight: 700, color: "#FFC107" }}>
					best institutions{" "}
				</Typography>
				<Typography
					sx={{ width: { sm: "100%", lg: "50%" }, color: "white" }}
				>
					Demesne far-hearted suppose venture excited see had has. Dependent on so
					extremely delivered by. Yet no jokes worse her why.
				</Typography>
				<Button variant="contained" sx={{ mt: 2 }}>
					Get Started
				</Button>
			</Box>
			<figure className="img">
				<svg
					class="fill-white"
					width="100%"
					height="150"
					viewBox="0 0 500 150"
					preserveAspectRatio="none"
				>
					<path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
				</svg>
			</figure>
		</div>
	);
}

export default HeroSection;
