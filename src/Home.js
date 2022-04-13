import React from 'react';
import Leagues from './Leagues';
import Matches from './Matches';
import Odds from './Odds';
import BetForm from './BetForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";

function Home( {user, matches, setLeague, matchesOrOdds, addBet, errors} ) {



    return(
        <div>
            <Container fluid>
                <h1 className='m-5' style={{textAlign: 'center'}}>{matchesOrOdds ?'Upcoming Fixtures' : 'Sportsbook'}</h1>
                <Row>
                    <Col sm={2}>
                        <Leagues setLeague={setLeague}/>
                    </Col>
                    <Col>
                    {matchesOrOdds ? 
                        (
                            <>
                                <Matches matches={matches}/>
                            </>
                        ) : (
                            <>
                            <Row>
                                <Col>
                                    <BetForm addBet={addBet} errors={errors} user={user}/>
                                </Col>
                            </Row>
                                <Row>
                                    <Col>
                                        <Odds/>
                                    </Col>
                                </Row>
                            </>
                        )
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;