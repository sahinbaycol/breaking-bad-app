import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters=createAsyncThunk('characters/getCharacters', async()=> {
    const res=await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character`);
    return res.data;
    
})

export const charactersSlice=createSlice({
    name:'characters',
    initialState:{
        
        items:{},
        
    },
    
    reducers:{},
    extraReducers:{
        [fetchCharacters.fulfilled]:(state, action) =>{
            state.items=action.payload;
            
            console.log(state.items)
        }
    }
})

export default charactersSlice.reducer;