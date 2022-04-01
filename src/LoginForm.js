import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Alert, FloatingLabel, Row, Col, Spinner } from "react-bootstrap";

function LoginForm( { setUser } ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // console.log(errors)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    username,
                    password
                }),
        }).then((r) => {
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
                    <Col xs={4}>
                        <FloatingLabel label="Username">
                            <Form.Control
                                type="text"
                                id="username"
                                autoComplete="username"
                                placeholder="Username"
                                className="m-2"
                                style={{width: '200px'}}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col xs={4}>
                            <FloatingLabel label="Password">
                            <Form.Control
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                placeholder="Password"
                                className="m-2"
                                style={{width: '200px'}}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <Button variant="dark" className='m-3' type="submit"> 
                            {isLoading ?
                                <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                            : "Login"}
                        </Button>
                    </Col>
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

export default LoginForm;

// style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}