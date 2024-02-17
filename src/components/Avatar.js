import React from 'react';
import moment from "moment";

const Avatar = (props) => {
    const { name, time } = props;

    return (
        <div>
            <img
                src={`https://via.placeholder.com/40x40`}
                alt={`${name} profile`}
                className="rounded-circle me-2"
            />
            <a className="fw-semibold text-decoration-none">{name}</a>
            <span className="ms-3 small text-muted">{moment.unix(time).fromNow()}</span>
        </div>
    );
};

export default Avatar;