import React from "react";
import { Container, Typography } from "@mui/material";

function SettledBets ({bets}) {

    return(
        <Container>
            <>
                {bets.filter(bet => (bet.status === 'won' || 'lost')).map((bet) => (
                    <div>
                            <Typography variant="h4">{bet.game}</Typography>
                        <br />
                            <Typography>
                                Bet: {bet.bet}
                                <br />
                                Odds: {bet.odds}
                                <br />
                                Wager: ${bet.wager} | To Win: ${bet.return_amount}
                                <br />
                                Status: {bet.status.toUpperCase()}
                            </Typography>
                        <hr />
                    </div>
                ))}
            </>
        </Container>
    )
}

export default SettledBets;