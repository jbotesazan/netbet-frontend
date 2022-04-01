import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

function Bets({bets}) {
    return(
        <Container>
            <div>
                {bets.map((bet) => (
                    <div>
                        <h3>{bet.game}</h3>
                        <p>
                            Bet: {bet.bet}
                            <br />
                            Odds: {bet.odds}
                            <br />
                            Wager: ${bet.wager} | To Win: ${bet.return_amount}
                        </p>
                        <hr />
                    </div>
                ))}
            </div>
        </Container>
    )
}


export default Bets;