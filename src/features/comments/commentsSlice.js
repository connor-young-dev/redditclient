import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_ROOT} from "../../api/redditAPI";

const initialState = {
    comments: [],
    isLoading: false,
    error: null
}

export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (permalink) => {
        const response = await fetch(`${API_ROOT}${permalink}.json`);
        const json = await response.json();
        return json[1].data.children.map(comment => comment.data);
    }
);

const commentsSlice = createSlice({
   name: "comments",
   initialState,
   reducers: {
       resetComments (state, action) {
           state.comments = action.payload;
       }
   },
   extraReducers: (builder) => {
       builder.addCase(fetchComments.pending, (state) => {
           state.isLoading = true;
       });

       builder.addCase(fetchComments.fulfilled, (state, action) => {
           state.isLoading = false;
           state.comments = action.payload;
       });
       builder.addCase(fetchComments.rejected, (state) => {
           state.isLoading = false;
           state.error = true;
       });
   }
});

export const {resetComments} = commentsSlice.actions;
export default commentsSlice.reducer;