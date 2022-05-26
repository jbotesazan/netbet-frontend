import React, {useState} from 'react';
import LoginForm from './LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Row } from "react-bootstrap";
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function LoginPage( {setUser} ) {
    const [show, setShow] = useState(false);


    return(
        <section>
            <div className='App'>

            <AppBar position="static" className='mb-3'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            ⚽️ NetBet
                        </Typography>
                            <LoginForm setUser={setUser} setShow={setShow} show={show} />
                    </Toolbar>
                </Container>
            </AppBar>

                <Container>
                    <Row>
                            <hr />
                            <Carousel variant='dark' fade>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://editorial.uefa.com/resources/025f-1004f11c742c-1af8521465a3-1000/paris_saint_germain_v_real_madrid_-_uefa_champions_league.jpeg'
                                        alt='ucl'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://resources.premierleague.com/premierleague/photo/2021/02/12/0ebea086-c4cc-4536-bb3d-8730d886a89e/grZOFtc8.jpg'
                                        alt='rooney'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2018/11/22/2466796-51234635-2560-1440.jpg'
                                        alt='drogba'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://www.sportsadda.com/static-assets/waf-images/46/07/81/16-9/1QLR95rnYB.jpg?v=1.1&w=420%20420w'
                                        alt='goats'
                                    />
                                </Carousel.Item>
                            </Carousel>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default LoginPage;