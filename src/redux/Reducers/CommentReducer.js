import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useFetch from '../../hooks/useFetch';
import axios from '../../api/axios';

// Fetch tweet async thunk
export const fetchTweet = createAsyncThunk('comment/fetchTweet', async (idTweet) => {
  const response = await axios.get('tweet/' + idTweet);
  return response?.data?.data;
});
// get new comment 
export const GetComment = createAsyncThunk('comment/getComment', async (idTweet,idUser) => {
  const response = await axios.get('tweet/' + idTweet);
  return response?.data?.data;
});

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    loading: false,
    tweet: null,
    comments: [],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTweet.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTweet.fulfilled, (state, action) => {
        state.loading = false;
        // state.tweet = null;
        // state.comments = [];
        state.tweet = action.payload?.tweet;
        state.comments = action.payload.comments;
      })
      .addCase(fetchTweet.rejected, (state) => {
        state.loading = false;
        state.tweet = null;
        state.comments = [];
      })
      .addCase(GetComment.fulfilled, (state, action) => {
        const { id } = JSON.parse(localStorage.getItem('user_info'));
        const comment = action.payload?.comments.find((one) => one.idUser === (id || null));
        if (comment) {
          state.comments.unshift(comment);
        }
      });
  },
});

export default commentSlice.reducer;