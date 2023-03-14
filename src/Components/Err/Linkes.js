import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./StyleErr.css"
function Linkes() {
	return (
		<Container>
			<Stack direction="row" alignItems="center" justifyContent="space-between">
				<Box>
					<img src="assets/logo.svg" width={100} height={100} />
				</Box>
				<Stack direction="row" className="linkesErr" alignItems="center" gap={10}>
					<Link to='home'>Home</Link>
					<Link to='Education'>Educations</Link>
				</Stack>
			</Stack>
		</Container>
	);
}

export default Linkes;
