import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert, FloatingLabel, Row, Col, Spinner } from "react-bootstrap";

function SignupForm( { setUser } ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [balance, setBalance] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                balance,
            }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={5}>
                        <FloatingLabel label="Username">
                            <Form.Control
                                placeholder="Username"
                                className="m-2"
                                type="text"
                                id="username"
                                autoComplete="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col xs={5}>
                        <FloatingLabel label="Balance">
                            <Form.Control
                                type="text"
                                id="Balance"
                                autoComplete="balance"
                                placeholder="Balance"
                                className="m-2"
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <FloatingLabel label="Password">
                            <Form.Control
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                placeholder="Password"
                                className="m-2"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col xs={5}>
                        <FloatingLabel label="Password Confirmation">
                            <Form.Control
                                type="password"
                                id="password_confirmation"
                                autoComplete="current-password"
                                placeholder="Confirm Password"
                                className="m-2"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col xs={2}>
                    <Button variant="dark" className='m-3' type="submit" style={{width: '90px'}}> 
                            {isLoading ?
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                            : "Sign Up"}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <div>
                        {errors.map((err) => (
                            <Alert key={err} variant={'danger'}>{err}</Alert>
                        ))}
                    </div>
                </Row>
            </Form>
        </Container>
    );
}

export default SignupForm