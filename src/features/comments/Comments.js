import React, {useEffect} from "react";
import {fetchComments, resetComments} from "./commentsSlice";
import {useDispatch, useSelector} from "react-redux";
import Comment from "../../components/Comment";
import Skeleton from "react-loading-skeleton";

function Comments({permalink, showComments}) {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.comments);
    const isLoading = useSelector((state) => state.comments.isLoading);
    const error = useSelector((state) => state.comments.error);

    useEffect(() => {
        if (showComments) {
            dispatch(fetchComments(permalink))
        }
    }, [permalink]);

    if (isLoading) {
        return (
            <>
                <Skeleton count={5} />
            </>
        )
    }

    if (error) {
        return error;
    }

    return (
        <aside>
            <section>
            {comments.map((comment) => (
                <Comment comment={comment} />
            ))}
            </section>
        </aside>
    )
}

export default Comments;