import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Container, Divider, Rating, Stack } from "@mui/material";
import CardTab from "./TabPanel/CardTab";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const labels = [
	{
		title: "Sketch from A to Z: for app designer",
		star: "4",
		imgs: "/assets/01.webp",
		wid: "270px",
	},
	{
		title: "Sketch from A to Z: for app designer",
		star: "4",
		imgs: "/assets/02.webp",
		wid: "270px",
	},
	{
		title: "Graphic Design Masterclass",
		star: "4",
		imgs: "/assets/03.webp",
		wid: "270px",
	},
	{
		title: "Deep Learning with React-Native",
		star: "5",
		imgs: "/assets/04.webp",
		wid: "270px",
	},
	{
		title: "Build Responsive Websites with HTML	",
		star: "4",
		imgs: "/assets/05.webp",
		wid: "270px",
	},
	{
		title: "Build Websites with CSS And Nice Style",
		star: "4",
		imgs: "/assets/06.webp",
		wid: "270px",
	},
	{
		title: "Learn Invision Full courses for you ",
		star: "4",
		imgs: "/assets/08.webp",
		wid: "270px",
	},
	{
		title: "JavaScript: Full Understanding",
		star: "4",
		imgs: "/assets/09.webp",
		wid: "270px",
	},
];

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Container>
				<Typography
					variant="h4"
					sx={{ mt: 15, textAlign: "center", fontWeight: "bold" }}
				>
					Most Popular Courses
				</Typography>
				<Typography variant="h6" sx={{ m: 2, textAlign: "center", color: "gray" }}>
					Choose from hundreds of courses from specialist organizations
				</Typography>
				<Box sx={{ bgcolor: "#066bc927", p: 1, fontWeight: "bold" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
						centered
					>
						<Tab label="Web Design" {...a11yProps(0)} />
						<Tab label="Development" {...a11yProps(1)} />
						<Tab label="Graphic Design" {...a11yProps(2)} />
						<Tab label="Marketing" {...a11yProps(3)} />
						<Tab label="Finance" {...a11yProps(4)} />
					</Tabs>
				</Box>
			</Container>
			<Container>
				<TabPanel value={value} index={0}>
					<Stack direction="row" gap={3} flexWrap="wrap">
						{labels.map((e) => (
							<CardTab width={e.wid} title={e.title} star={e.star} imgs={e.imgs} />
						))}
					</Stack>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Stack direction="row" gap={3} flexWrap="wrap">
						{labels.map((e) => (
							<CardTab width={e.wid} title={e.title} star={e.star} imgs={e.imgs} />
						))}
					</Stack>
				</TabPanel>
				<TabPanel value={value} index={2}>
					<Stack direction="row" gap={3} flexWrap="wrap">
						{labels.map((e) => (
							<CardTab width={e.wid} title={e.title} star={e.star} imgs={e.imgs} />
						))}
					</Stack>
				</TabPanel>
				<TabPanel value={value} index={3}>
					<Stack direction="row" gap={3} flexWrap="wrap">
						{labels.map((e) => (
							<CardTab width={e.wid} title={e.title} star={e.star} imgs={e.imgs} />
						))}
					</Stack>
				</TabPanel>
				<TabPanel value={value} index={4}>
					<Stack direction="row" gap={3} flexWrap="wrap">
						{labels.map((e) => (
							<CardTab title={e.title} star={e.star} imgs={e.imgs} />
						))}
					</Stack>
				</TabPanel>
			</Container>
		</Box>
	);
}
