import { createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import HeaderImg from "../assets/icons/gift.png";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: 'column'
    },
    image: {
      width: "300px",
    },
    line: {
      backgroundColor: "#D80027",
      height: "10px",
      width: "100%",
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <img src={HeaderImg} className={classes.image} />
      <div className={classes.line}></div>
    </header>
  );
};
