import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSubreddits, setSelectedSubreddit} from "./subRedditsSlice";

function Subreddits() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubreddits())
    }, [dispatch]);

    const subreddits = useSelector((state) => state.subreddits.subreddits);
    const selectedSubreddit = useSelector((state) => state.subreddits.selectedSubreddit)
    const isLoading = useSelector((state) => state.subreddits.isLoading);
    const error = useSelector((state) => state.subreddits.error);

    if (isLoading) {
        return 'loading...'
    }

    if (error) {
        return error
    }

    return (
        <>
            <h2>Subreddits</h2>
            <ul id="subreddits" className="nav flex-column">
            {subreddits.map((subreddit) => (
                <li className={`nav-item ${
                    selectedSubreddit === subreddit.url ? `active` : ``
                }`} key={subreddit.id}>
                    <button
                        className="nav-link"
                        onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                    >
                        {subreddit.display_name}
                    </button>
                </li>
            ))}
            </ul>
        </>
    );
}

export default Subreddits;