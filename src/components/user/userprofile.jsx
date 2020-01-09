import React from "react";

import { getUserProfile } from "../../state/actionCreators";
import { connect } from "react-redux";
import { useParams } from "react-router";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  fab: {
    margin: theme.spacing(2),
    position: "fixed",
    bottom: 0,
    right: 0
  },
  names: {
    color: "red"
  }
}));

const UserProfile = ({
  getUserProfile,
  location,
  userProfile,
  isDashboard = false
}) => {
  let { id } = useParams();

  React.useEffect(() => {
    getUserProfile(id);
  }, []);

  const classes = useStyles();

  return (
    <>
      <CardContent className={classes.names}>
        <Typography gutterBottom variant="h5" component="h1">
          <h1>{userProfile.first_name + " " + userProfile.last_name}</h1>
        </Typography>
      </CardContent>
      <br />
      <br />
      <Grid container spacing={2}>
        {userProfile.experiences !== undefined &&
          userProfile.experiences.map(experience => (
            //   <>Title: {experience.title}</>
            <Grid item xs={3} key={experience.id}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={
                      "https://picsum.photos/seed/" + experience.id + "/600/300"
                    }
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
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
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                  {isDashboard === true ? <></> : ""}
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
export default connect(state => state, { getUserProfile })(UserProfile);
