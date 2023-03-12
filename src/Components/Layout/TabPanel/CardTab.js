import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Stack } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";
import { Card, Divider, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../styleLayout.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
const labels = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+",
};
function CardTab(props) {
	const star = props.star;

	return (
		<Card
			sx={{ maxWidth: props.width, boxShadow: "0 0 40px rgb(29 58 83 / 5%)" }}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="250"
					image={props.imgs}
					alt="green iguana"
				/>
				<CardContent>
					<Stack direction="row" justifyContent="space-between">
						<Typography className="allLevel" component="div">
							all level
						</Typography>
						<Typography className="" component="div">
							<FavoriteBorderIcon />
						</Typography>
					</Stack>

					<Typography
						sx={{ my: 2, fontWeight: 600, fontSize: 20 }}
						gutterBottom
						variant="h5"
						component="div"
					>
						{props.title}
					</Typography>
					<Typography sx={{ my: 2 }} variant="body2" color="text.secondary">
						Proposal indulged no do sociable he throwing settling.
					</Typography>
					<Box
						sx={{
							width: 200,
							display: "flex",
							alignItems: "center",
						}}
					>
						<Rating
							name="text-feedback"
							value={star}
							readOnly
							precision={0.5}
							emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
						/>
						<Box sx={{ ml: 2 }}>{labels[star]}</Box>
					</Box>
					<Divider sx={{ my: 2 }}></Divider>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Typography className="" component="div">
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								spacing={1}
							>
								<AccessTimeIcon /> 12h 56m
							</Stack>
						</Typography>
						<Typography className="" component="div">
							<Stack
								direction="row"
								justifyContent="space-between"
								alignItems="center"
								spacing={1}
							>
								<CalendarTodayOutlinedIcon /> 15 lecture
							</Stack>
						</Typography>
					</Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default CardTab;
