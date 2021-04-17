import { Box, createStyles, Link, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: "#D80027",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "none",
        transform: "scale(1.1)",
      },
    },
  })
);

interface NavbarProps {
    onUpcoming: ()=>void
    onToday: ()=> void
    onPast: ()=>void
}

export const Navbar: React.FC<NavbarProps> = ({onUpcoming, onToday, onPast}) => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      width="400px"
      justifyContent="space-between"
      textAlign="center"
      ml="auto"
      mr="auto"
      mt="30px"
    >
      <Link className={classes.link} href="#" onClick={onPast}>
        PAST <br /> dates
      </Link>
      <Link className={classes.link} href="#" onClick={onToday}>
        TODAY
      </Link>
      <Link className={classes.link} href="#" onClick={onUpcoming}>
        UPCOMING <br /> dates
      </Link>
    </Box>
  );
};
