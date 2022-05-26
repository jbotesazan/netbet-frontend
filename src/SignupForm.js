import React, { useState } from "react";
import {  Typography, FormControl, Button, Container, InputLabel, FilledInput, Alert, Stack } from '@mui/material';
import { Form, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupForm( { setUser, show, setShow } ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);


    function handleClose () {
        setShow(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }

    return(
        
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton style={{backgroundColor: '#6633FF'}}>
                    {/* <Typography alignItems="center" justifyContent="center" variant='h5'>Join</Typography> */}
                </Modal.Header>

                <Modal.Body>
                    <Container>
                        <Form onSubmit={handleSubmit} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <Stack spacing={3} align="center">
                                        <Typography variant='h6'>Create a NetBet Account</Typography>

                                        <FormControl sx={{ width: '35ch' }} variant="filled">
                                            <InputLabel>Username</InputLabel>
                                                <FilledInput
                                                    type="text"
                                                    id="username"
                                                    autoComplete="username"
                                                    placeholder="Username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                        </FormControl>


                                        <FormControl sx={{ width: '35ch' }} variant="filled">
                                            <InputLabel>Password</InputLabel>
                                                <FilledInput
                                                    type="password"
                                                    id="password"
                                                    autoComplete="current-password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                        </FormControl>

                                        <FormControl sx={{ width: '35ch' }} variant="filled">
                                            <InputLabel>Password Confirmation</InputLabel>
                                                <FilledInput
                                                    type="password"
                                                    id="password_confirmation"
                                                    autoComplete="current-password"
                                                    placeholder="Confirm Password"
                                                    value={passwordConfirmation}
                                                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                                                />
                                        </FormControl>

                                        <Button variant="outlined" type="submit" color='primary' > 
                                            Create Account
                                        </Button>

                                        <div>
                                            {errors.map((err) => (
                                                <Alert key={err} severity='error'>{err}</Alert>
                                            ))}
                                        </div>
                                </Stack>
                            </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SignupForm
