import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios';


const fetchReplies = createAsyncThunk('reply/fetchReplies', async (idComment) => {
    const response = await axios.get(`replies/${idComment}`);
    return response.data;
});

// get new reply 
export const GetReply = createAsyncThunk('reply/GetReply', async (idComment) => {
    const response = await axios.get(`replies/${idComment}`);
    return response?.data?.data;
});

const replySlice = createSlice({
    name: 'reply',
    initialState: {
        replies: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchReplies.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchReplies.fulfilled, (state, action) => {
            state.loading = false;
            state.replies = action.payload?.data;
        })
        .addCase(GetReply.fulfilled, (state, action) => {
            const { pseudo } = JSON.parse(localStorage.getItem('user_info'));
            const reply = action.payload?.find(one => one?.pseudo == pseudo)
            if(reply) state.replies.unshift(reply);
        });
    },
});

export { fetchReplies };

export default replySlice.reducer;

