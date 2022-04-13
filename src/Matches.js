import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from "react-bootstrap";

function Matches({matches, data}) {

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }
    const sampleData = [
            {
            awayTeam: 'Real Madrid CF',
            awayTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            homeTeam: 'Chelsea FC',
            homeTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            venue: 'Stamford Bridge',
            date: randomDate(new Date(2021, 0, 1), new Date()),
            drawLogo: 'https://logodix.com/logo/1355941.png',
            homeOdds: 1.50,
            drawOdds: 1.00,
            awayOdds: 1.50,
        },
        {
            awayTeam: 'Benfica',
            awayTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            homeTeam: 'Liverpool FC',
            homeTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            venue: 'Anfield',
            date: randomDate(new Date(2021, 0, 1), new Date()),
            drawLogo: 'https://logodix.com/logo/1355941.png',
            homeOdds: 2.50,
            drawOdds: 2.00,
            awayOdds: 2.50,
        },
        {
            awayTeam: 'Tottenham Hotspurs',
            awayTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            homeTeam: 'Manchester City',
            homeTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            venue: 'Etihad Stadium',
            date: randomDate(new Date(2021, 0, 1), new Date()),
            drawLogo: 'https://logodix.com/logo/1355941.png',
            homeOdds: 1.00,
            drawOdds: 3.00,
            awayOdds: 5.50,
        },
        {
            awayTeam: 'Atletico de Madrid',
            awayTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            homeTeam: 'Barcelona FC',
            homeTeamLogo: 'https://www.logomaker.com/wpstatic/uploads/2021/10/LogoMaker.jpg',
            venue: 'Camp Nou',
            date: randomDate(new Date(2021, 0, 1), new Date()),
            drawLogo: 'https://logodix.com/logo/1355941.png',
            homeOdds: 1.50,
            drawOdds: 2.00,
            awayOdds: 3.50,
        },
    ]

    return(
        // <>
        <Container fluid>
            <>
                {sampleData?.map ((match) => (
                    // console.log(match)
                    <>
                    <Row>
                        <Col sm={6}>
                            Kick Off: | Stadium: {match.venue}
                        </Col>
                        <Col sm={6}>
                            Moneyline
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={6}>
                            <img alt={'club logo'} src={match.homeTeamLogo} height='40px' width='40px'/> | Home: {match.homeTeam}
                        </Col>
                        <Col sm={6}>
                            {match.homeOdds}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <img alt={'club logo'} src={match.awayTeamLogo} height='40px' width='40px'/> | Home: {match.awayTeam}
                        </Col>
                        <Col sm={6}>
                            {match.awayOdds}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <img alt={'draw logo'} src={match.drawLogo} height='40px' width='40px'/> | Draw:
                        </Col>
                        <Col sm={6}>
                            {match.drawOdds}
                        </Col>
                    </Row>
                    <hr />
                        {/* <p>
                            Kick Off: | Stadium: {match.venue}
                            <br />
                            <img alt={'club logo'} src={match.homeTeamLogo} height='40px' width='40px'/> | Home: {match.homeTeam} {match.homeOdds}
                            <br />
                            <img alt={'club logo'} src={match.awayTeamLogo} height='40px' width='40px'/> | Away: {match.awayTeam} {match.awayOdds}
                            <br />
                            Draw: {match.drawOdds}
                        </p>
                        <hr /> */}
                        
                    </>
                ))}
            </>
        </Container>
        // </>
        // <div>
        //     {matches?.map ((match) => (
        //         <div>
        //             <p key={match.fixture.id}>
        //                 Kick Off: {match.fixture.date} | Stadium: {match.fixture.venue.name}
        //                 <br />
        //                 <img alt={'club logo'} src={match.teams.home.logo} height='40px' width='40px'/> | Home: {match.teams.home.name}
        //                 <br />
        //                 <img alt={'club logo'} src={match.teams.away.logo} height='40px' width='40px'/> | Away: {match.teams.away.name}
        //             </p>
        //             <hr />
                    
        //         </div>
        //     ))}
        // </div>
    )
}

export default Matches;