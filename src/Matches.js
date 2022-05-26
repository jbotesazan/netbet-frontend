import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Col, Row, Modal, Form } from "react-bootstrap";
import { Grid, Typography, Container, Button, Alert, FormControl, Input, InputLabel, InputAdornment, Snackbar } from '@mui/material'
import './App.css';

function Matches({ arr, errors, addBet, user, setShow, show, open, setOpen }) {

    const [fixture, setFixture] = useState('');
    const [bet, setBet] = useState('');
    const [odds, setOdds] = useState('');
    const [formData, setFormData] = useState({
        game: "",
        bet: "",
        odds: "",
        wager: "",
        return_amount: "",
        user_id: user.id,
    });

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const handleClose = () => {
        setShow(false)
    };

    const handleShow = (e) => {
        setShow(true);
        setFixture(e.target.title);
        setBet(e.target.name);
        setOdds(e.target.value);
        setFormData({
            game: e.target.title,
            bet: e.target.name,
            odds: e.target.value,
            user_id: user.id,
        });
        // console.log(formData);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            wager: e.target.value,
            return_amount: roundToTwo(e.target.value * odds)
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        const newData = { ...formData };
        addBet(newData);
    };

    function roundToTwo(num) {
        return +(Math.round(num + "e+2")  + "e-2");
    }

    return(
        <Container>
            <>
                {arr?.map ((match) => (
                    <div key={match.fixtureId} >

                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <Typography>Kick Off: {match.date}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography>Moneyline</Typography>
                            </Grid>
                        </Grid>

                        <br />

                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <Typography>
                                    <img alt={'club logo'} src={match.homeTeamLogo} height='40px' width='40px'/> | Home: {match.homeTeam}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button className='m-1' variant='contained' value={match.homeOdds} title={` ${match.awayTeam} v ${match.homeTeam} `} name={`${match.homeTeam} Moneyline`} onClick={handleShow}>{match.homeOdds}</Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <Typography>
                                    <img alt={'club logo'} src={match.awayTeamLogo} height='40px' width='40px'/> | Away: {match.awayTeam}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button className='m-1' variant='contained' value={match.awayOdds} title={` ${match.awayTeam} v ${match.homeTeam} `} name={`${match.awayTeam} Moneyline`} onClick={handleShow}>{match.awayOdds}</Button>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={8}>
                                <Typography>
                                    <img alt={'draw logo'} src={'https://logodix.com/logo/1355941.png'} height='40px' width='40px'/> | Draw
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Button className='m-1' variant='contained' value={match.drawOdds} title={` ${match.awayTeam} v ${match.homeTeam} `} name={'Draw Moneyline'} onClick={handleShow}>{match.drawOdds}</Button>
                            </Grid>
                         </Grid>

                        <hr />
                    </div>
                ))}
            </>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Typography variant='h5'>{bet} | {odds}</Typography>
                </Modal.Header>
                <Modal.Body>
                    <Typography variant='h6' className='mb-3'>{fixture}</Typography>
                    <Form onSubmit={onSubmit}>
                        <Row>
                                <Col xs={4}>

                                    <FormControl sx={{ m: 1, width: '10ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Wager</InputLabel>
                                    <Input
                                        type="number"
                                        name="wager"
                                        placeholder="0"
                                        // id="standard-adornment-amount"
                                        value={formData.wager}
                                        onChange={handleInputChange}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                    </FormControl>
                                </Col>

                                <Col xs={4}>

                                    <FormControl sx={{ m: 1, width: '10ch' }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">To Win</InputLabel>
                                    <Input
                                        type="number"
                                        name="return_amount"
                                        placeholder="0"
                                        // id="standard-adornment-amount"
                                        value={roundToTwo(formData.wager * odds)}
                                        onChange={handleInputChange}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    />
                                    </FormControl>
                                </Col>

                                <Col xs={4}>
                                    <Button
                                    variant='contained'
                                    className='m-2'
                                    type="submit"
                                    >
                                    Place Bet
                                    </Button>
                                </Col>
                            <div>
                                {errors.map((err) => (
                                    <Alert key={err} severity='error' className='m-1'>{err}</Alert>
                                ))}
                            </div>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Typography>* Max bet $500.00</Typography>
                </Modal.Footer>
            </Modal>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
            >
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    Your bet has been successfully placed!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default Matches;