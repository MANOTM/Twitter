import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const getFollowings = createAsyncThunk('following/getFollowings',async (pseudo,thunkAPI)=>{
    const response = await axios.get("/followings/@mansouri-otmane6");
    const data = await response.data
    return data
})
const FollowingSlice = createSlice({
    name:'following',
    initialState:{
        followings:[],
        loading:true,
        error:null
    },
    reducers:{
        follow:(state,action)=>{
            console.log(action.payload);
            state.followings.push(action.payload)
        },
        unfollow:(state,action)=>{

        }
    },
    extraReducers:{
        [getFollowings.pending]:(state,action)=>{
            state.loading=true 
        },
        [getFollowings.fulfilled]:(state,action)=>{
            state.followings=action.payload?.data
            state.loading=false
        },
        [getFollowings.rejected]:(state,action)=>{
            state.error=true
        }
    }
})
export default FollowingSlice.reducer
export const { follow , unfollow }= FollowingSlice.actions