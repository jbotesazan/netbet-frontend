import React from "react";

function Matches({matches, data}) {

    return(
        <div>
            {matches?.map ((match) => (
                <div>
                    <p key={match.fixture.id}>
                        Kick Off: {match.fixture.date} | Stadium: {match.fixture.venue.name}
                        <br />
                        <img alt={'club logo'} src={match.teams.home.logo} height='40px' width='40px'/> | Home: {match.teams.home.name}
                        <br />
                        <img alt={'club logo'} src={match.teams.away.logo} height='40px' width='40px'/> | Away: {match.teams.away.name}
                    </p>
                    <hr />
                    
                </div>
            ))}
        </div>
    )
}

export default Matches;