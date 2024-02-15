import React from "react";
import moment from "moment";
import { Card } from "react-bootstrap";

function Post(props) {
    const {post} = props;

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
            </Card>
        </article>
    )
}

export default Post;