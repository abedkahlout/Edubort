import * as React from "react";
import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "../styleLayout.css"
export default function AlignItemsList() {
	return (
		<List
			sx={{
				borderRadius: 2,
				width: "50%",
				maxWidth: 270,
				color: "white",
				textAlign: "center",
			
			}}
      className="bg-bluer"
		>
			<Typography variant="h5" sx={{fontWeight:700}}>4.5/5.0</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					my: 1,
				}}
			>
				<Rating
					name="text-feedback"
					value={4.5}
					readOnly
					precision={0.5}
					emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
				/>
			</Box>{" "}
			<Typography>Based on 3265 ratings</Typography>
		</List>
	);
}
