import React from 'react'
import { Container, Row, Col, Card, CardImg } from 'reactstrap'

export default function HookReducer() {
    return (
        <Container>
            <Row>
                <Col xs="6">
                    <Card>
                        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    </Card>
                </Col>
                <Col xs="6">
                    <h1>TES</h1>
                    <p>harga</p>
                    <h3>Rp. 100.000</h3>
                    <p>Jumlah</p>
                </Col>
            </Row>
        </Container>
    )
}
