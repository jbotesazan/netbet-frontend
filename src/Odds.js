import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Container } from "react-bootstrap";

function Odds ({odds}) {
    // console.log(odds.response)
    return(
        <Container>
            <div>
                {odds.response?.map ((odd) => (
                        <div key={odd.fixture.id}>
                            {odd.bookmakers?.map ((odd) => (
                                <div>
                                    {odd.bets?.map ((odd) => (
                                        <Accordion defaultActiveKey="0" flush>
                                            <Accordion.Item>
                                                <hr />                                         
                                                <Accordion.Header>{odd.name}</Accordion.Header>
                                                {odd.values?.map ((odd) => (
                                                    <Accordion.Body>
                                                        {odd.value} | Odds | {odd.odd}
                                                    </Accordion.Body>
                                                ))}
                                            </Accordion.Item>
                                        </Accordion>
                                    ))}
                                </div>
                            ))}
                        </div>
                ))}
            </div>
        </Container>
    )
}

export default Odds;