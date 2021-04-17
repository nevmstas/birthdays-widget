import { Box, createStyles, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { UserCard } from "./components/UserCard";
import { fetchUsers } from "./redux/birthdaysReducer";
import { RootState } from "./redux/rootReducer";
import { getDataDto } from "./utils/dateUtils";

const useStyles = makeStyles(() => createStyles({
  root: {
    backgroundImage:' linear-gradient(#E8E8E8, white)'
  }
}))


function App() {
  const classes = useStyles()
  const { isLoading, users, error } = useSelector(
    (state: RootState) => state.birthdays,
    shallowEqual
  );
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    //const dateNow = getDataDto(new Date(Date.now()));
    const dateNow = getDataDto(new Date("1990-01-01"));
    dispatch(fetchUsers({ dateFrom: dateNow, dateTo: dateNow }));
  }, [dispatch]);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Header />
      <Box className={classes.root}>
        <Navbar />
        <Box display="flex" flexWrap='wrap' >
          {isLoading
            ? null
            : users.map((u, idx) => <UserCard user={u} key={idx} />)}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
