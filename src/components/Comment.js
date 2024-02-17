import React from "react";
import { Card, Button } from "react-bootstrap";
import Avatar from "./Avatar";

function Comment({comment}) {
    return (
        <article key={comment.id}>
            <Card>
                <Card.Header>
                    <Avatar name={comment.author} time={comment.created_utc} />
                </Card.Header>
                <Card.Body>
                    <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
            </Card>
        </article>
    )
}

export default Comment;