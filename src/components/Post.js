import React, {useState} from "react";
import moment from "moment";
import { Card, Button } from "react-bootstrap";
import Comments from "../features/comments/Comments";
import { FaCommentAlt } from 'react-icons/fa';

function Post(props) {
    const {post} = props;
    const [showComments, setShowComments] = useState(false);

    const onToggleComments = () => {
        setShowComments(!showComments)
    }

    return (
        <article key={post.id}>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.author}</Card.Text>
                    <Card.Text><small className="text-muted">{moment.unix(post.created_utc).fromNow()}</small></Card.Text>
                </Card.Body>
                {post.url &&
                    <Card.Img variant="bottom" src={post.url} alt="" />
                }
                <Card.Footer>
                    <Button variant="link" className="btn-sm text-decoration-none ps-0" onClick={() => onToggleComments()}>
                        <FaCommentAlt />
                        {post.num_comments}
                    </Button>
                </Card.Footer>
            </Card>
            {showComments &&
                <Comments permalink={post.permalink} showComments={showComments} />
            }
        </article>
    )
}

export default Post;