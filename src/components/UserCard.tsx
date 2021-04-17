import { Box, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { DEV_ENDPOINT } from "../api/api";
import { User } from "../redux/birthdaysReducer";
import { getParseDate } from "../utils/dateUtils";

interface UserCardProps {
  user: User;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    avatar: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginRight: "10px",
    },
  })
);

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const classes = useStyles();
  return (
    <Box display="flex" m='5px' alignItems="center" width='300px'>
      <img
        src={DEV_ENDPOINT + user.avatarUrl}
        alt="avatar pic"
        className={classes.avatar}
      />
      <Box display="flex" flexDirection="column">
        <span>{user.name}</span>
        <span style={{color: '#666666'}}>{user.jobTitle}</span>
        <Box mt="20px"></Box>
        <b><span>{getParseDate(user.birthday)}</span></b>
      </Box>
    </Box>
  );
};
