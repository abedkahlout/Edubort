import {  Container, Stack, Typography } from "@mui/material";
import React from "react";
import "./styleLayout.css";

function Instructor() {
	return (
		<Container className="bg-blue">
			<Stack direction="row" justifyContent="space-evenly">
				<div>
					<Typography variant="h4" my={1} ml={8} sx={{ fontWeight: 700 }}>
						Become an Instructor!
					</Typography>
					<Typography ml={8} sx={{ width: "70%" }}>
						Speedily say has suitable disposal add boy. On forth doubt miles of child.
						Exercise joy man children rejoiced. Yet uncommonly his ten who diminution
						astonished.
					</Typography>
				</div>
			</Stack>
		</Container>
	);
}

export default Instructor;
