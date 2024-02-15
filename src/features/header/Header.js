import React, {useEffect, useState} from "react";
import { FaReddit } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {setSearchTerm} from "../posts/postsSlice";
import {useDispatch, useSelector} from "react-redux";

function Header() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const selectSearchTerm = useSelector(state => state.posts.searchTerm);

    useEffect(() => {
        dispatch(setSearchTerm(search))
        setSearch('');
    }, [selectSearchTerm]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(search));
    }

    return (
        <Navbar className="bg-primary">
            <Container>
                <Navbar.Brand className="text-light">
                    <FaReddit size={42} />{' '}
                    ConnorsRedditClient
                </Navbar.Brand>
                <Form className="d-flex" onSubmit={handleSearchSubmit}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <Button variant="outline-light" onClick={handleSearchSubmit}>Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;