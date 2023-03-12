import { Avatar, Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function RecipeReviewCard() {
	const value = 4.5;

	return (
		<Box
			component="div"
			sx={{
				p: 4,
				bgcolor: "white",
				borderRadius: 2,
				textAlign: "center",
				boxShadow: "0 0 40px rgb(29 58 83 / 15%)",
			}}
		>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				gap="15px"
			>
				<Avatar
					alt="Remy Sharp"
					src="/assets/033.webp"
					sx={{ width: 66, height: 66 }}
				/>{" "}
				<Typography variant="body2">
					<FormatQuoteIcon sx={{ color: "gray" }} />
					At weddings believed laughing although the Moonlight newspaper up its
					enjoyment agreeable depending.
					<FormatQuoteIcon sx={{ color: "gray" }} />
				</Typography>
				<Box
					sx={{
						width: 200,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Rating
						name="text-feedback"
						value={value}
						readOnly
						precision={0.5}
						emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
					/>
				</Box>
				<Typography sx={{ fontWeight: 700 }}>Dennis Barrett</Typography>
			</Stack>
		</Box>
	);
}
