import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import sample_img from "../../../assets/images/question.jpg";

class MyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card
        sx={{ maxWidth: 380 }}
        className={classes.card}
        // style={{
        //   backgroundColor: "trasnparent",
        // }}
      >
        <CardActionArea className={classes.card__action__area}>
          <div className={classes.card__img}>
            <CardMedia
              component="img"
              height="240"
              image={sample_img}
              alt="green iguana"
              icon={<PersonIcon />}
            />
          </div>

          {/* <CardMedia icon={<PersonIcon />} /> */}
          <CardContent className={classes.card__content}>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.title}
            </Typography>
            <Typography variant="h2" color="text.secondary">
              {this.props.count}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styleSheet)(MyCard);
