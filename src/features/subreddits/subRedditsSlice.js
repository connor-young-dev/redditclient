import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { API_ROOT } from "../../api/redditAPI";


const initialState = {
    subreddits: [],
    isLoading: false,
    error: null
}

export const fetchSubreddits = createAsyncThunk(
  'content/fetchSubreddits',
    async () => {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        const json = await response.json();
        return json.data.children.map((subreddit) => subreddit.data);
    }
);


const subRedditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSubreddits.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
            state.isLoading = false;
            state.subreddits = action.payload;
        })
        builder.addCase(fetchSubreddits.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export default subRedditsSlice.reducer;
