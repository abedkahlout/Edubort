import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function GraySection() {
	return (
		<Box className="Graysec">
			<Container sx={{ height: "100%" }}>
				<Stack
					height="100%"
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					flexWrap="wrap"
				>
					<Typography
						sx={{
							fontWeight: 700,
							fontSize: "40px",
							width: { sm: "100%", lg: "45%" },
						}}
						my={2}
					>
						Study whenever you want, from any place in the world.
					</Typography>
					<Typography sx={{ mt: 4 }}>
						<img src="/assets/headphone.webp" width="450px" height="250px" />
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}

export default GraySection;
