import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

export const LoginForm=()=>{
    return(
        <Container>
        <Row>
        <Col>
            <h1>Client Login</h1>
            <br/>
            <Form>
                <Form.Group>
                    <Form.label>
                        Email Address
                    </Form.label>
                    <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.label>
                        Password
                    </Form.label>
                    <Form.Control
                    type="Password"
                    name="Password"
                    placeholder="Enter email"
                    required
                    />
                </Form.Group>
                <Button type='submit'> Login</Button>
            </Form>
        </Col>
        </Row>
        </Container>
    )
}

