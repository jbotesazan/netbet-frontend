import React, {useState} from "react";
import { Container } from '@mui/material'; 
import ActiveBets from "./ActiveBets";
import SettledBets from "./SettledBets";
import ActiveSettled from "./ActiveSettled";

function Bets({bets}) {
    const [active, setActive] = useState('1');

    return(
        <div>
            <Container maxWidth>
                        <>

                            <ActiveSettled active={active} setActive={setActive}/>
                                
                            { active === '1'

                                ?

                                    <ActiveBets bets={bets} />

                                :

                                    <SettledBets bets={bets} />
                     
                            }
                        </>
            </Container>
        </div>
    )
}


export default Bets;