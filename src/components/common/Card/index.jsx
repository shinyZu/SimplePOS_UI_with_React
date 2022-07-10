import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";
import sample_img from "../../../assets/images/question1.png";

class MyCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <Card sx={{ maxWidth: 380 }} className={classes.card}>
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
            <Typography
              className={classes.card__text}
              // gutterBottom
              variant="h6"
              component="div"
            >
              {this.props.title}
            </Typography>
            <Typography className={classes.card__text} variant="h2">
              {this.props.count}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styleSheet)(MyCard);
