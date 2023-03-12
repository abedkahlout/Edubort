import { Button, Stack } from "@mui/material";
import React from "react";
import LeftSection from "../Components/LoginComp/LeftSection";
import RightSection from "../Components/LoginComp/RightSection";
import { Link } from "react-router-dom";

function Login() {
	return (
		<Stack direction="row" justifyContent="space-between">
			<div>
				<LeftSection />
			</div>
			<div>
				<RightSection />
			</div>
		</Stack>
	);
}

export default Login;
