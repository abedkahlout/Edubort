import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import './styleLayout.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
	due: {
			fontWeight:"600 !important"
	},
});

const drawerWidth = 240;
const navItems = [
	"home",
	"Education",
	"Academy",
	"Course",
	"University",
	"Tutor",
	"School",
	"Abroad",
];

function DrawerAppBar(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				<img src="/assets/logo.svg" width="150px" height="60px" />
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	const classes = useStyles();
				const {user} = useSelector((state) =>state.users)
					
	return (
		
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				component="nav"
				color="transparent"
				className={classes.due}
				position="fixed"
				style={{ boxShadow: "00 0 40px rgb(29 58 83 / 15%) " , background:"white"}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
					>
						<img src="/assets/logo.svg" width="150px" height="25px" />
					</Typography>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: "gray" }}>
								            <Link className="links" to={"/" + item }>{item}</Link>
							</Button>
						))}
					</Box>
					<p>{user?.name}</p>
				</Toolbar>
			</AppBar>
			<Box component="nav" color="secondary">
				<Drawer
					color="secondary"
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, 
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

DrawerAppBar.propTypes = {

	window: PropTypes.func,
};

export default DrawerAppBar;
