import { Box, Container, ListItemText, Stack } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import "./styleLayout.css";
// data
const card_item = [
	{ number: "10k", bg: "#FFF8D5", secnd: "Online Courses" },
	{ number: "60k+", bg: "#DEE2E6", secnd: "Expert Tutors" },
	{ number: "6k+", bg: "#D9D7F1", secnd: "Online Students" },
	{ number: "50k", bg: "#CAF0F8", secnd: "Certified Courses" },
];

function Cards() {
	return (
		<div>
			<Container>
				{" "}
				<Box decoration="row">
					<Stack
						direction="row"
						alignItems="center"
						justifyContent="space-between"
						className="cards"
						flexWrap='wrap'
						sx={{ px: 2, py: 1, mt: 4 }}
					>
						{card_item.map((item) => (
							<>
								<ListItemText
									sx={{
										p: 4,
										bgcolor: item.bg,
										borderRadius: 2,
										margin: 1,
										textAlign: "center",
									}}
									className="cards"
									primary={item.number}
									secondary={item.secnd}
								/>
							</>
						))}
					</Stack>
				</Box>
			</Container>
		</div>
	);
}

export default Cards;
