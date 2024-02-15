import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, selectFilteredPosts} from "./postsSlice";
import Post from "../../components/Post";
import PostPlaceholder from "../../components/PostPlaceholder";

function Posts() {
    const dispatch = useDispatch();
    const selectedSubreddit = useSelector((state) => state.subreddits.selectedSubreddit);
    const posts = useSelector(selectFilteredPosts);
    const isLoading = useSelector((state) => state.posts.isLoading);
    const error = useSelector((state) => state.posts.error);

    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit));
    }, [selectedSubreddit]);

    if (isLoading) {
        return (
            <>
                <PostPlaceholder />
                <PostPlaceholder />
                <PostPlaceholder />
                <PostPlaceholder />
            </>
        )
    }

    if (error) {
        return error;
    }

    return (
      <>
          {posts.map((post) => (
              <Post post={post} key={post.id} />
          ))}
      </>
    )
}

export default Posts;

