import React, {useReducer, useContext} from 'react'
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap'
import {NavLink} from 'react-router-dom'
import { keranjangContext } from '../../../App'

export default function HookReducer() {
    const countContext = useContext(keranjangContext)
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
                    <h3>Rp. {countContext.keranjangState.hargaSatuan}</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={()=>countContext.keranjangDispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col><Button>{countContext.keranjangState.jumlah}</Button></Col>
                        <Col><Button onClick={()=>countContext.keranjangDispatch({type:'kurang'})}>-</Button></Col>\
                    </Row>
                    <br/>
                    <Button color="success">Total {countContext.keranjangState.hargaTotal}</Button>
                    <hr/>
                    <NavLink to='/tagihan'>Tagihan</NavLink>
                </Col>
            </Row>
        </Container>
    )
}
