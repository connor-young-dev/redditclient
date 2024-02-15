import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { API_ROOT } from "../../api/redditAPI";


const initialState = {
    subreddits: [],
    selectedSubreddit: '/r/Home/',
    isLoading: false,
    error: null
}

export const fetchSubreddits = createAsyncThunk(
  'subreddits/fetchSubreddits',
    async () => {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        const json = await response.json();
        return json.data.children.map((subreddit) => subreddit.data);
    }
);


const subRedditsSlice = createSlice({
    name: "subreddits",
    initialState,
    reducers: {
        setSelectedSubreddit (state, action) {
            state.selectedSubreddit = action.payload;
        }
    },
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
export const {setSelectedSubreddit} = subRedditsSlice.actions;