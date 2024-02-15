import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {API_ROOT} from "../../api/redditAPI";

const initialState = {
    posts: [],
    isLoading: false,
    error: null
}

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (selectedSubreddit) => {
        const response = await fetch(`${API_ROOT}${selectedSubreddit}.json`);
        const json = await response.json();
        return json.data.children.map((post) => post.data);
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
});

export default postsSlice.reducer;