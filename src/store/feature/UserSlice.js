import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const FetchNewsAPI = createAsyncThunk(
    "user/fetchUser",
    async (payload, thunkAPI) => {
        console.log(payload)
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return thunkAPI.fulfillWithValue(response.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


  export const FetchNewsAP = createAsyncThunk(
    "user/fetchUser",
    async (payload, thunkAPI) => {
        console.log(payload)
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return thunkAPI.fulfillWithValue(response.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )

const initialState = {
  value: 0,
  userData:{
    data:[],
    loading: false,
    status:"",
    errorData:[]
  }
}

export const UserSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    test: (state, actions) => {
        state.value = actions.payload
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(FetchNewsAPI.pending, (state, action) => {
        state.userData.loading = true
    });
    builder.addCase(FetchNewsAPI.fulfilled, (state, action) => {
        state.userData.loading = false;
        state.userData.data = action.payload
        state.userData.status = "Success"
    });
    builder.addCase(FetchNewsAPI.rejected, (state, action) => {
        state.userData.loading = false
        state.userData.status = "Error"
        state.userData.errorData = action.payload

    });
  }
})

// Action creators are generated for each case reducer function
export const { test} = UserSlice.actions

export default UserSlice.reducer
