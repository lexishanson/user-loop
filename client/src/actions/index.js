import axios from "axios";
import { FETCH_USER, SUBMIT_SURVEY } from "./types";

// whenever the action creator is called, it will return a function
// if redux-thunk sees we're returning a function, it'll automatically call function w/ "dispatch" function as an argument
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  return { type: FETCH_USER, payload: res.data };
};
