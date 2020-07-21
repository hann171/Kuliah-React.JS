import React, {useReducer} from 'react'
import { Container, Row, Col, Card, CardImg, Button } from 'reactstrap'

const initialState = {
    jumlah: 0,
    hargaSatuan: 100000,
    hargaTotal: 0
}

const reducer = (state, action) => {
    switch (action.type){
        case 'tambah': return {
            ...state,
            jumlah: state.jumlah + 1,
            hargaTotal: state.hargaSatuan + (state.hargaSatuan*state.jumlah)
        }
        case 'kurang': return {
            ...state,
            jumlah: state.jumlah - 1,
            hargaTotal: (state.hargaSatuan*state.jumlah) - state.hargaSatuan
        }
        default:
            return state
    }
}

export default function HookReducer() {

    const[count, dispatch] = useReducer(reducer,initialState)
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
                    <h3>Rp. {count.hargaSatuan}</h3>
                    <p>Jumlah</p>
                    <Row>
                        <Col><Button onClick={()=>dispatch({type:'tambah'})} color="danger">+</Button></Col>
                        <Col><Button>{count.jumlah}</Button></Col>
                        <Col><Button onClick={()=>dispatch({type:'kurang'})}>-</Button></Col>\

                    </Row>
                    <Button color="success">Total {count.hargaTotal}</Button>
                </Col>
            </Row>
        </Container>
    )
}
