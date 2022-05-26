import React from 'react';
import Leagues from './Leagues';
import Matches from './Matches';
// import ParticleBackground from './ParticleBackground';
import { Container, Skeleton, Stack } from '@mui/material'; 

function Home( { arr, setLeague, errors, addBet, user, league, isLoading, setShow, show, open, setOpen } ) {



    return(
        <div>
            <Container maxWidth>
                        <>
                            <Leagues setLeague={setLeague} league={league}/>

                                
                            { isLoading 

                                ?
                                <Container>
                                    <Stack spacing={1}>
                                        <Skeleton animation="wave" maxWidth height={200} />
                                        <Skeleton animation="wave" maxWidth height={200} />
                                        <Skeleton animation="wave" maxWidth height={200} />
                                        <Skeleton animation="wave" maxWidth height={200} />
                                    </Stack>
                                </Container>

                                :

                                <Matches arr={arr} errors={errors} addBet={addBet} user={user} setShow={setShow} show={show} open={open} setOpen={setOpen}/>
                            
                            }
                        </>
            </Container>
        </div>
    );
}

export default Home;