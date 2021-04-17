import { Box, createStyles, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { UserCard } from "./components/UserCard";
import { fetchUsers, FetchUsersProps } from "./redux/birthdaysReducer";
import { RootState } from "./redux/rootReducer";
import { sortByNameFunc } from "./utils/dateUtils";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundImage: " linear-gradient(#E8E8E8, white)",
    },
  })
);

type Tabs = "today" | "past" | "upcoming";

function App() {
  const classes = useStyles();
  // const dateNow = getDataDto(new Date(Date.now()));
  const dateNow = "01.01";
  const { isLoading, error, users } = useSelector(
    (state: RootState) => state.birthdays,
    shallowEqual
  );

  const [limit, setLimit] = useState(6);
  const [timeFragment, setTimeFragment] = useState<FetchUsersProps>({
    dateFrom: dateNow,
    dateTo: dateNow,
  });

  const handleTodayDates = () => {
    setTimeFragment({
      dateFrom: dateNow,
      dateTo: dateNow,
    });
  };

  const handlePastDates = () => {
    //setTimeFragment
    //logic here
  };

  const handleUpcomingDates = () => {
    //setTimeFragment
    //logic here
  };

  const incrementLimit = () => {
    setLimit(limit + 6);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers(timeFragment));
  }, [dispatch]);

  const filterUsers = users.slice(0, limit);

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Header />
      <Box className={classes.root}>
        <Navbar
          onToday={handleTodayDates}
          onPast={handlePastDates}
          onUpcoming={handleUpcomingDates}
        />
        <Box display="flex" flexWrap="wrap" width="650px">
          {isLoading && users ? (
            <span>
              Unfortunately there is no users with birthdays on these dates
            </span>
          ) : (
            filterUsers
              .sort(sortByNameFunc)
              .map((u, idx) => <UserCard user={u} key={idx} />)
          )}
        </Box>
      </Box>
      {limit <= users.length ? (
        <button onClick={incrementLimit}>show more</button>
      ) : null}
    </Box>
  );
}

export default App;
