import React from "react";
import { Card } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function PostPlaceholder() {
    return (
        <article>
            <Card className="mb-3">
                <Card.Body>
                    <SkeletonTheme color="#f0f0f0" highlightColor="#e0e0e0">
                        <h5>
                            <Skeleton count={1} />
                        </h5>
                        <p>
                            <Skeleton count={2} />
                        </p>
                    </SkeletonTheme>
                </Card.Body>
                <Skeleton height={180} style={{ borderRadius: "0.25rem 0.25rem 0 0" }} />
            </Card>
        </article>
    )
}

export default PostPlaceholder;