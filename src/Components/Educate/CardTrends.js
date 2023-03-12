import { Container, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import "./StyleEducat.css";

function CardTrends(props) {
	return (
		<div className="card-trends">
			<img src={props.amg} className="card-trends-img" />
			<Container>
				<Divider />
				<Typography sx={{ fontWeight: 700, fontSize: 18 , mt:2}}>
                    {props.title}
				</Typography>
				<Stack direction='row' mt={2} alignItems="center" justifyContent='space-between'>
					<Typography sx={{bgcolor:"#17a2b81a",color:'rgb(23 162 184)' , px:2}}>Personal Development</Typography>
					<Typography sx={{fontSize:"28px" , color:"#0CBC87" , fontWeight:500}}>{props.money}$</Typography>
				</Stack>
			</Container>
		</div>
	);
}

export default CardTrends;
