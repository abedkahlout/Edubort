import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addUser({ name, email }));
		navigate("home");
	};

	return (
		<Container component="main" >
			<Box
				sx={{
					marginTop: 12,
					width:"90%",
					ml:3
				}}
			>
				<Typography component="h1" variant="h4" >
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={(e) => handleSubmit(e)}
					noValidate
					sx={{ mt: 5 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						variant="filled"
						onChange={(e) => setName(e.target.value)}
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						sx={{borderRadius:"15px"}}
						autoFocus
					/>
					<TextField
						margin="normal"
						variant="filled"
						required
						fullWidth
						onChange={(e) => setEmail(e.target.value)}
						name="name"
						label="name"
						type="name"
						sx={{borderRadius:"15px" , mt:2}}
						id="name"
						autoComplete="current-name"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign In
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
