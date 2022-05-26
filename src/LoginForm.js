import React, {useState} from 'react';
import SignupForm from './SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";
import { Typography, FormControl, Button, Grid, InputLabel, FilledInput, Alert, Snackbar } from '@mui/material';

function LoginForm( { setUser, setShow, show, open, setOpen } ) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    function handleSubmit(e) {
        e.preventDefault();
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
            if (r.ok) {
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }

    return(

        <>
            <Form onSubmit={handleSubmit}>
                <Grid container spacing={4} sx={{ ml: 1}}>
                    <Grid item xs={4}>
                        <FormControl sx={{ m: 1, width: '20ch' }} variant="filled" color="secondary">
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
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl sx={{ m: 1, width: '20ch' }} variant="filled" color="secondary">
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
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" type="submit" color='secondary' sx={{ mt: 2 }}> 
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Form>
                        <div>
                            {errors.map((err) => (
                                //find out if you can render errors with the snackbar
                                <Snackbar
                                    open={open}
                                    autoHideDuration={5000}
                                    onClose={handleSnackbarClose}
                                >
                                    <Alert onClose={handleSnackbarClose} key={err} severity="error" sx={{ width: '100%' }}>{err}</Alert>
                                </Snackbar>
                            ))}
                        </div>
                <Typography sx={{ ml: 18 }}>
                    Don't have an account? &nbsp;
                    <Button variant="outlined" color='secondary' sx={{ m: 2 }} onClick={() => setShow(true)}>Sign Up</Button>
                </Typography>

                <SignupForm setUser={setUser} show={show} setShow={setShow} />
        </>

    );
}

export default LoginForm;

// <Alert key={err} severity='error' className='m-1'>{err}</Alert>