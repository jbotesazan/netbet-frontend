import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from "react-bootstrap";

function Leagues ({setLeague, setObj}) {

    function handleClick(e) {
        setObj({});
        setLeague(e.target.value);
    }

    return (
        <div>
            <h3 className='m-5' style={{textAlign: 'center'}}>Leagues</h3>
            <ListGroup variant="flush">
                <ListGroup.Item className='m-1' value='39' action onClick={handleClick} variant="light">
                Premier League 🏴󠁧󠁢󠁥󠁮󠁧󠁿 
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='78' action onClick={handleClick} variant="light">
                Bundesliga 🇩🇪 
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='140' action onClick={handleClick} variant="light">
                La Liga 🇪🇸 
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='135' action onClick={handleClick} variant="light">
                Serie A 🇮🇹 
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='61' action onClick={handleClick} variant="light">
                Ligue 1 🇫🇷 
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='94' action onClick={handleClick} variant="light">
                Primeira Liga 🇵🇹
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='88' action onClick={handleClick} variant="light">
                Eredivisie 🇳🇱
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='253' action onClick={handleClick} variant="light">
                Major League Soccer 🇺🇸
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='179' action onClick={handleClick} variant="light">
                Premiership 🏴󠁧󠁢󠁳󠁣󠁴󠁿
                </ListGroup.Item>
                <ListGroup.Item className='m-1' value='2' action onClick={handleClick} variant="light">
                UEFA Champions League ⭐️
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Leagues;