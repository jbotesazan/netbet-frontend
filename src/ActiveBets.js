import React from "react";
import { Container, Typography } from "@mui/material";

function ActiveBets ({bets}) {

    let pendingBets = bets.filter(bet => (bet.status === 'pending'))

    return(
        <Container>
            <>
            
                {
                
                    pendingBets.length > 0

                                            ?

                pendingBets.map((bet) => (
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
                ))
                                            :
                    <div align='center'>
                        <Typography> No active bets </Typography>
                        <Typography variant="caption">Place a bet and it will show here</Typography>
                    </div>
                }
            </>
        </Container>
    )
}

export default ActiveBets;