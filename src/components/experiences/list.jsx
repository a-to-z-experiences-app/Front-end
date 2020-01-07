import React from "react";
import { useEffect } from "react";
import { loadExperiences } from "../../state/actionCreators";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
	card: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

const Experiences = ({ experiences, loadExperiences }) => {
	useEffect(() => {
		loadExperiences();
	}, []);

	const classes = useStyles();

	return (
		<>
			<h1 style={{ fontWeight: "bold", color: "#555" }}>
				One-of-a-kind activities <br /> hosted by locals:{" "}
			</h1>
			<Grid container spacing={2}>
				{experiences.map(experience => (
					<Grid item xs={2}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={
										"https://picsum.photos/seed/" +
										Math.floor(Math.random() * 100) +
										"/200/300"
									}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										{experience.title}
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
									>
										{experience.description}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								{/* <Button size="small" color="primary">
									Share
								</Button> */}
								<Button size="small" color="primary">
									Learn More
								</Button>
								<Button
									size="small"
									color="primary"
									style={{ marginLeft: "auto" }}
								>
									<DeleteIcon />
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
};

// Step 8: Use "connect" to plug the component to redux
// Step 9: Plug the action creators into the component
export default connect(state => state, { loadExperiences })(Experiences);
