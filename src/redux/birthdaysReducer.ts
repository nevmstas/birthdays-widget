import { createAction, createReducer } from "@reduxjs/toolkit";

export interface User {
  id: number;
  name: string;
  avatarUrl: string;
  jobTitle: string;
  birthday: string
}

interface InitialStateType {
  users: User[];
  error: string;
  isLoading: boolean;
}

export interface FetchUsersProps {
  dateFrom: string;
  dateTo: string;
}

export const fetchUsers = createAction<FetchUsersProps>("FETCH_USERS");
export const fetchUsersSucceded = createAction<User[]>("FETCH_USERS_SUCCEDED");
export const fetchUsersFailed = createAction<string>("FETCH_USERS_FAILED");
export const setLoading = createAction<boolean>("SET_LOADING");

const initialState = {
  users: [],
  error: "",
  isLoading: false,
} as InitialStateType;

export const birhtdaysReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsersSucceded, (state, action) => {
      state.users = action.payload;
    })
    .addCase(fetchUsersFailed, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});
