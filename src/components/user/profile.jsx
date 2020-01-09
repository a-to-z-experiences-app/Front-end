// import React from "react";
// import { useEffect } from "react";
// import {
//   loadUserExperiences,
//   loadExperiences,
//   deleteExperience
// } from "../../state/actionCreators";
// import { connect } from "react-redux";
// import { Link, useHistory } from "react-router-dom";

// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// import DeleteIcon from "@material-ui/icons/Delete";
// import EditIcon from "@material-ui/icons/Edit";
// import AddIcon from "@material-ui/icons/Add";
// import Fab from "@material-ui/core/Fab";
// import add from "./add";

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 345
//   },
//   media: {
//     height: 140
//   },
//   fab: {
//     margin: theme.spacing(2),
//     position: "fixed",
//     bottom: 0,
//     right: 0
//   }
// }));

// const Experiences = ({
//   experiences,
//   loadExperiences,
//   deleteExperience,
//   isDashboard = false,
//   user,
//   loadUserExperiences
// }) => {
//   useEffect(() => {
//     isDashboard ? loadUserExperiences(user.id) : loadExperiences();
//   }, []);

//   const classes = useStyles();
//   const token = localStorage.getItem("token");
//   console.log(token);

//   // const deleteExperienceFunc = id => {
//   // 	console.log("delete");
//   // 	deleteExperience(id);
//   // };

//   let history = useHistory();

//   function Add(params) {
//     history.push("/add");
//   }

//   return (
//     <>
//       <h1>
//         One-of-a-kind activities <br /> hosted by locals:{" "}
//       </h1>
//       <br />
//       <Grid container spacing={2}>
//         <Fab
//           color="primary"
//           aria-label="add"
//           className={classes.fab}
//           onClick={e => {
//             Add();
//           }}
//         >
//           <AddIcon />
//         </Fab>
//         {experiences.length === 0 ? "No experiences atm" : ""}
//         {experiences.map(experience => (
//           <Grid item xs={3} key={experience.id}>
//             <Card className={classes.card}>
//               <CardActionArea>
//                 <CardMedia
//                   className={classes.media}
//                   image={
//                     "https://picsum.photos/seed/" + experience.id + "/600/300"
//                   }
//                   title="Contemplative Reptile"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="h2">
//                     {experience.title}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     {experience.description}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 {/* <Button size="small" color="primary">
// 									Share
// 								</Button> */}
//                 <Button size="small" color="primary">
//                   Learn More
//                 </Button>
//                 {isDashboard === true ? (
//                   <>
//                     <Button
//                       size="small"
//                       color="primary"
//                       style={{ marginLeft: "auto" }}
//                     >
//                       <Link to={`/edit/${experience.id}`}>
//                         <EditIcon />
//                       </Link>
//                     </Button>
//                     <Button size="small" color="primary">
//                       <DeleteIcon
//                         onClick={e => deleteExperience(experience.id)}
//                       />
//                     </Button>
//                   </>
//                 ) : (
//                   ""
//                 )}
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// };

// // Step 8: Use "connect" to plug the component to redux
// // Step 9: Plug the action creators into the component
// export default connect(state => state, {
//   loadUserExperiences,
//   loadExperiences,
//   deleteExperience
// })(Experiences);
