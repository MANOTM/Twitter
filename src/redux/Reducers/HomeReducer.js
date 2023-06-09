import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

// Async thunk to fetch all tweets
export const getAllTweets = createAsyncThunk(
  "tweets/getAllTweets",
  async () => {
    const response = await axios.get("/");
    return response.data.data;
  }
);

// Async thunk to fetch new tweets
export const getNewTweets = createAsyncThunk(
  "tweets/getNewTweets",
  async (_, { getState }) => {
    const { tweets } = getState().tweets;
    const response = await axios.get("/");
    const newTweets = response.data.data.filter(
      (tweet) => !tweets.some((oldTweet) => oldTweet.idTweet === tweet.idTweet)
    );
    return newTweets;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    tweets: [],
    newTweets: [],
    loading: true,
    error: null,
  },
  reducers: {
    mixTweets: (state) => {
      state.tweets = [...state.newTweets, ...state.tweets];
      state.newTweets = [];
    },
    removeTweet: (state, action) => {
      console.log('delete');
      const idTweet = action.payload;
      state.tweets = state.tweets.filter((tweet) => tweet.idTweet !== idTweet);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTweets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTweets.fulfilled, (state, action) => {
        state.loading = false;
        state.tweets = action.payload;
        state.newTweets = [];
      })
      .addCase(getAllTweets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getNewTweets.fulfilled, (state, action) => {
        state.loading = false;
        state.newTweets = action.payload;
      })
  },
});

export const { mixTweets, removeTweet } = homeSlice.actions;
export default homeSlice.reducer;
