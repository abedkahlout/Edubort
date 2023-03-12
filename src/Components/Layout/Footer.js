import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./styleLayout.css";

function Footer() {
	return (
		<div className="footerCont">
			<Container sx={{p:2 , mt:2}}>
				<Grid container>
					<Grid textAlign="center" item xs={6}  md={3}>
						<Typography sx={{fontWeight:700}} variant="h5">Company</Typography>
						<Typography my={2} variant="body1">
							About us
						</Typography>
						<Typography my={2} variant="body1">
							Contact us
						</Typography>
						<Typography my={2} variant="body1">
							News and Blogs
						</Typography>
						<Typography my={2} variant="body1">
							Library
						</Typography>
						<Typography my={2} variant="body1">
							Career{" "}
						</Typography>
					</Grid>
					<Grid textAlign="center" item xs={6}  md={3}>
						<Typography sx={{fontWeight:700}} variant="h5">Community</Typography>

						<Typography my={2} variant="body1">
							Documentation
						</Typography>

						<Typography my={2} variant="body1">
							Faq
						</Typography>

						<Typography my={2} variant="body1">
							Forum
						</Typography>

						<Typography my={2} variant="body1">
							Sitemap{" "}
						</Typography>
					</Grid>
					<Grid textAlign="center" item xs={6}  md={3}>
						<Typography sx={{fontWeight:700}} variant="h5">Teaching</Typography>

						<Typography my={2} variant="body1">
							Become a teacher
						</Typography>

						<Typography my={2} variant="body1">
							How to guide
						</Typography>

						<Typography my={2} variant="body1">
							Terms & Conditions{" "}
						</Typography>
					</Grid>
					<Grid textAlign="center" item xs={6}  md={3}>
						<Typography sx={{fontWeight:700}} variant="h5">Contact</Typography>

						<Typography color='secondary' my={2} variant="body1">
							Toll free: +1234 568 963 <br/>(9:AM to 8:PM IST){" "}
						</Typography>

						<Typography  my={2} variant="body1">
							Email: example@gmail.com
						</Typography>

						<Typography my={2} variant="body1">
                        <img src="/assets/google-play.svg"  width="100px" />
                        <img src="/assets/app-store.svg"  width="100px" />
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Footer;
