import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSubreddits} from "./subRedditsSlice";

function Subreddits() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch]);

    const subreddits = useSelector((state) => state.subreddits.subreddits);
    const isLoading = useSelector((state) => state.subreddits.subreddits);
    const error = useSelector((state) => state.subreddits.error);



    return (
        <>
            {subreddits.map((subreddit) => (
                <li>{subreddit.display_name}</li>
            ))}
        </>
    );
}

export default Subreddits;