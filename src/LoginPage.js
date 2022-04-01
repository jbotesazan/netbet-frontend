import React, {useState} from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";

function LoginPage( {setUser} ) {
    const [showLogin, setShowLogin] = useState(true);

    return(
        <section>
            <div className='App'>
                <Container>
                    <Row>
                    <Col xs={2}>
                        <h1 className='m-2'> NetBet ⚽️ </h1>
                    </Col>
                    {showLogin ? (
                        <>
                            <Col xs={6}>
                                <LoginForm setUser={setUser} />
                            </Col>
                            <Col xs={3}>
                                <p>
                                    Don't have an account? &nbsp;
                                    <Button variant="dark" className='m-3' type="submit" onClick={() => setShowLogin(false)}>Sign Up</Button>
                                </p>
                            </Col>
                            <hr />
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://www.sportsadda.com/static-assets/waf-images/48/86/c0/16-9/3lqyD7shQ8.jpg?v=1.1&w=420%20420w'
                                        alt='chelsea fc'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://images.hindustantimes.com/img/2021/07/11/1600x900/Italy_Euro_2020_trophy_1626042203830_1626042228590.jpg'
                                        alt='italy'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://library.sportingnews.com/2021-08/lionel-messi-copaamerica-071021-getty-ftrjpg_sn8yghdz5h1m1800259d4ofba.jpg'
                                        alt='argentina'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://upload.wikimedia.org/wikipedia/commons/e/e5/France_champion_of_the_Football_World_Cup_Russia_2018.jpg'
                                        alt='france'
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </>
                    ) : (
                        <>
                        <Col xs={6}>
                            <SignupForm setUser={setUser} />
                        </Col>
                        <Col xs={3}>
                            <p>
                                Already have an account? &nbsp;
                                <Button variant="dark" className='m-3' type="submit" onClick={() => setShowLogin(true)}>Log In</Button>
                            </p>
                        </Col>
                        <hr />
                        <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://www.sportsadda.com/static-assets/waf-images/48/86/c0/16-9/3lqyD7shQ8.jpg?v=1.1&w=420%20420w'
                                        alt='chelsea fc'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://images.hindustantimes.com/img/2021/07/11/1600x900/Italy_Euro_2020_trophy_1626042203830_1626042228590.jpg'
                                        alt='italy'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://library.sportingnews.com/2021-08/lionel-messi-copaamerica-071021-getty-ftrjpg_sn8yghdz5h1m1800259d4ofba.jpg'
                                        alt='argentina'
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100" 
                                        src='https://upload.wikimedia.org/wikipedia/commons/e/e5/France_champion_of_the_Football_World_Cup_Russia_2018.jpg'
                                        alt='france'
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </>
                    )}
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default LoginPage;