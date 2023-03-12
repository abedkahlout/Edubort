import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PersonIcon from "@mui/icons-material/Person";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
function Learn() {
	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12} md={5}>
					<Typography variant="h4" sx={{ fontWeight: 700, my: 2 }}>
						Find Out More About us, <span className="yellow">Eduport</span> insides.
					</Typography>
					<img
						src="/assets/learn.webp"
						className="learn"
						width="100%"
						height="250px"
					/>
				</Grid>
				<Grid item xs={12} md={7}>
					<Stack direction="row" justifyContent={{ xs: 'center', md: "space-between" }} gap='20px' flexWrap="wrap">
						<Box sx={{width:"48%"}}>
                        <Typography variant="h3"  mt={3}  className="icon-g"><PersonIcon /></Typography>
                        <Typography variant="h5" my={1} className="weight">Learn with Experts</Typography>
							<Typography variant="body2" className="gray">
								In no impression assistance contrasted Manners she wishing justice
								hastily new anxious At discovery objection we
							</Typography>
						</Box>
                        <Box sx={{width:"48%"}}>
                        <Typography variant="h3" mt={3} className="icon-y"><BookmarksIcon /></Typography>

							<Typography variant="h5" my={1} className="weight">Learn Anything</Typography>
							<Typography variant="body2" className="gray">
								In no impression assistance contrasted Manners she wishing justice
								hastily new anxious At discovery objection we
							</Typography>
						</Box>
                        <Box sx={{width:"48%"}}>
                        <Typography variant="h3" mt={3} className="icon-p"><AccessAlarmIcon /></Typography>

							<Typography variant="h5" my={1} className="weight">Flexible Learning</Typography>
							<Typography variant="body2" className="gray">
								In no impression assistance contrasted Manners she wishing justice
								hastily new anxious At discovery objection we
							</Typography>
						</Box>
                        <Box sx={{width:"48%"}}>
                        <Typography variant="h3" mt={3} className="icon-b"><HomeIcon /></Typography>

							<Typography variant="h5" my={1} className="weight">Industrial Standards</Typography>
							<Typography variant="body2"  className="gray">
								In no impression assistance contrasted Manners she wishing justice
								hastily new anxious At discovery objection we
							</Typography>
						</Box>					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Learn;
