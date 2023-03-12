import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import StarsIcon from "@mui/icons-material/Stars";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import "./styleLayout.css";
import { useProduct } from "../../Api/fetchApi";

const useStyles = makeStyles({
	head: {
		color: "#24292D",
		fontWeight: "700 !important",
		fontSize: "56px !important",
	},
	par: {
		color: "#717577",
		fontSize: "20px !important",
	},
	icons: {
		color: "black",
		fontSize: "15px !important",
		display: "flex",
		alignItems: "center",
		gap: "10px",
	},
	reds: {
		background: "#d6293e1a !important",
		color: "#d6293e !important",
		fontWeight: "700 !important",
	},
	blue: {
		color: "#066AC9 !important",
		fontSize: "45px !important",
		boxShadow: "0 0 0 3px rgb(6 106 201 / 40%)",
		backgroundColor: " white",
		display: "flex",
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "space-between",
	},
});

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
	boxShadow: "0px 0px 0px 0px red",
}));

function HeroSection() {
	const classes = useStyles();
	// const data = useProduct();
	// console.log(data.data);

	return (
		<Container>
			<Box sx={{ flexGrow: 1, marginTop: 13 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={7}>
						<Item>
							<div>
								<Typography variant="h2" mt={15} align="left" className={classes.head}>
									Limitless learning at your fingertips
								</Typography>
								<Typography
									paragraph={true}
									mt={4}
									align="left"
									className={classes.par}
								>
									Online learning and teaching marketplace with 5K+ courses & 10M
									students. Taught by experts to help you acquire new skills.
								</Typography>

								<Typography
									paragraph={true}
									mt={7}
									align="left"
									className={classes.icons}
								>
									<Typography paragraph={true} align="left" className={classes.icons}>
										<StarsIcon />
										Learn with experts
									</Typography>
									<Typography paragraph={true} align="left" className={classes.icons}>
										<StarsIcon />
										Get certificate
									</Typography>
									<Typography paragraph={true} align="left" className={classes.icons}>
										<StarsIcon />
										Get membership
									</Typography>
								</Typography>

								<Typography
									paragraph={true}
									mt={3}
									align="left"
									className={classes.icons}
								>
									<Button size="large" className={classes.reds}>
										Get Started
									</Button>
									<Button size="large">
										<PlayCircleFilledWhiteIcon className={classes.blue} />
										<span> Watch Video</span>
									</Button>
								</Typography>
							</div>
						</Item>
					</Grid>
					<Grid item xs={12} md={5}>
						<Item>
							{" "}
							<div className="bckg-blue-cont">
								<img src="assets/07.webp" className="background-blue" />
							</div>{" "}
						</Item>
					</Grid>
				</Grid>
			</Box>

			{/* <div>
				{data?.data?.products.map((el) => (
					<div>{el.title}</div>
				))}
			</div> */}
		</Container>
	);
}

export default HeroSection;
