import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const getConversations = createAsyncThunk('chat/getConversations',async (id,thunkAPI)=>{
    const response = await axios.get("/conversations/"+id);
    const data = await response.data
    return data
})
const ChatSlice = createSlice({
    name:'chat',
    initialState:{
        converstions:[],
        status:'loading',  
        justForHelp:false,
        InChat:false
    },
    reducers:{
        sendMessage:(state,action)=>{ 
            state.converstions.map(user=>{ 
                if(user.idReceiver==action.payload.idReceiver){
                    return user.messages.push(action.payload)
                }
                return user
            })
            state.justForHelp=!state.justForHelp
        }, 
        leaveConversation:(state,action)=>{
            state.converstions= state.converstions.map(user=>{ 
                if(user.idReceiver!=action.payload){
                    return user
                }
            }) 
        },
        newConversation:(state,action)=>{
            const findUser=state.converstions.find(user=>user.idReceiver===action.payload.idReceiver) 
            if(!findUser){
                state.converstions.push(action.payload)
                state.InChat = true
            } 
        },
        scrollPls:(state)=>{    
            state.justForHelp=!state.justForHelp
        },
        handelInchat:(state,action)=>{
            state.InChat=action.payload
        }
    },
    extraReducers:{
        [getConversations.pending]:(state,action)=>{
            // state.status='loading' 
        },
        [getConversations.fulfilled]:(state,action)=>{
            const newChats=state.converstions.filter(user=>{
                if(!user?.messages.length){
                    return user
                }
            })  
            state.converstions=newChats
            state.converstions=[...action.payload,...state.converstions]
            state.status='ok' 
        },
        [getConversations.rejected]:(state,action)=>{
            state.status='errore' 
        }
    }
})
export default ChatSlice.reducer
export const { sendMessage ,scrollPls ,handelInchat , leaveConversation ,newConversation }= ChatSlice.actions



