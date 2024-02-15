import {createSlice, createAsyncThunk, createSelector} from "@reduxjs/toolkit";
import {API_ROOT} from "../../api/redditAPI";

const initialState = {
    posts: [],
    searchTerm: '',
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
    reducers: {
        setSearchTerm (state, action) {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.searchTerm = '';
        })
        builder.addCase(fetchPosts.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }
});

const selectPosts = (state) => state.posts.posts;
const selectSearchTerm = (state) => state.posts.searchTerm;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        return posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
);

export default postsSlice.reducer;
export const {setSearchTerm} = postsSlice.actions;