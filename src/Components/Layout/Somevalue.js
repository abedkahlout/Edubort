import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import "./styleLayout.css";
import RecipeReviewCard from "./TabPanel/AlignListed";
import ActionAreaCard from "./TabPanel/CardLayouts";
import AlignItemsList from "./TabPanel/Listes";
function Somevalue() {
	return (
		<div className="bg-contaienr">
			<Container sx={{ my: 5 }}>
				<Grid container spacing={5}>
					<Grid item xs={12} md={7}>
						<Stack
							direction={{ sm: "column", lg: "row" }}
							alignItems="center"
							spacing={3}
						>
							<Stack direction="column" alignItems="end" spacing={3}>
								<ActionAreaCard />
								<AlignItemsList />
							</Stack>
							<Stack direction="column" alignItems="center" spacing={3}>
								<RecipeReviewCard />
							</Stack>
						</Stack>
					</Grid>
					<Grid item xs={12} md={5}>
						<Typography variant="h5" mt={12} sx={{ fontSize: 50, fontWeight: 700 }}>
							Some valuable feedback from our students
						</Typography>
						<Typography sx={{ fontSize: 18, my: 3 }}>
							Supposing so be resolving breakfast am or perfectly. It drew a hill from
							me. Valley by oh twenty direct me so. Departure defective arranging
							rapturous did believe him all had supported. Family months lasted simple
							set nature vulgar him. Picture for attempt joy excited ten carried
							manners talking how.
						</Typography>
						<Button variant="contained">View Review</Button>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Somevalue;
