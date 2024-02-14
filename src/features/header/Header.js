import React from "react";
import { FaReddit } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Navbar className="bg-primary">
            <Container>
                <Navbar.Brand className="text-light">
                    <FaReddit size={42} />{' '}
                    ConnorsRedditClient
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;