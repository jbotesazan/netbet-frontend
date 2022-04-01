import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function NavBar( { user, setUser, matchesOrOdds, setMatchesOrOdds } ) {
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return(
        <div>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} exact to={"/"}>NetBet ⚽️</Navbar.Brand>
                    <Nav className="justify-content-center">
                        <Nav.Link as={NavLink} exact to={"/"}>Home</Nav.Link>
                        <Nav.Link as={NavLink} exact to={"/bets"}>My Bets</Nav.Link>
                        <Navbar.Text>Balance: {user.balance}</Navbar.Text>
                        <Nav.Link onClick={() => setMatchesOrOdds(!matchesOrOdds)}>Toggle: {matchesOrOdds ? 'Sportsbook' : 'Upcoming Fixtures'}</Nav.Link>
                        <NavDropdown title={`Welcome ${user.username}`} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;