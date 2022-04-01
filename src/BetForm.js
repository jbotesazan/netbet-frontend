import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Alert, FloatingLabel, Col, Row } from "react-bootstrap";

function BetForm ({errors, addBet, user}) {

    const [formData, setFormData] = useState({
        game: "",
        bet: "",
        odds: "",
        wager: "",
        return_amount: "",
        user_id: user.id,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        addBet(newData);
    };
    return(
        <div>
            <Container>
                <h1 className="m-5" style={{textAlign: 'center'}}>Place a Bet</h1>
                <Form onSubmit={onSubmit}>
                    <Row>
                        <Col>
                            <FloatingLabel label="Game">
                                    <Form.Control
                                        className="m-1"
                                        as="textarea"
                                        type="text"
                                        name="game"
                                        value={formData.game}
                                        placeholder="Game"
                                        style={{width: '240px'}}
                                        onChange={handleInputChange}
                                    />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel label="Bet">
                                <Form.Control
                                        className="m-1"
                                        as="textarea"
                                        type="text"
                                        value={formData.bet}
                                        name="bet"
                                        placeholder="Bet"
                                        style={{width: '240px'}}
                                        onChange={handleInputChange}
                                    />
                                </FloatingLabel>
                            </Col>
                                <Col>
                            <FloatingLabel label="Odds">
                                <Form.Control
                                    className="m-1"
                                    as="textarea"
                                    type="number"
                                    name="odds"
                                    value={formData.odds}
                                    placeholder="Odds"
                                    style={{width: '240px'}}
                                    onChange={handleInputChange}
                                />
                            </FloatingLabel>
                            </Col>
                                <Col>
                                    <FloatingLabel label="Wager">
                                        <Form.Control
                                            className="m-1"
                                            as="textarea"
                                            type="number"
                                            name="wager"
                                            value={formData.wager}
                                            placeholder="Wager"
                                            style={{width: '100px'}}
                                            onChange={handleInputChange}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <FloatingLabel label="To Win">
                                        <Form.Control
                                            className="m-1"
                                            as="textarea"
                                            type="number"
                                            name="return_amount"
                                            value={formData.return_amount}
                                            placeholder="Returns"
                                            style={{width: '100px'}}
                                            onChange={handleInputChange}
                                        />
                                    </FloatingLabel>
                                </Col>
                                <Col>
                                    <Button variant="dark" className='m-2' type="submit" >Place Bet</Button>
                                </Col>
                        <div>
                            {errors.map((err) => (
                                <Alert key={err} variant={'danger'}>{err}</Alert>
                            ))}
                        </div>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default BetForm;