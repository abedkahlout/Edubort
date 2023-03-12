import { Box, Typography } from "@mui/material";
import React from "react";
import "./StyleLogin.css";

function RightSection() {
	return (
		<Box className="cont-img">
			<Typography className="text-cover">
				<Typography variant="h4"> EDUPORT </Typography>
				<Typography variant="subtitle1" sx={{ width: "70%" }}>
					{" "}
					Online learning and teaching marketplace with 5K+ courses & 10M students.
					Taught by experts to help you acquire new skills.
				</Typography>
			</Typography>
		</Box>
	);
}

export default RightSection;
