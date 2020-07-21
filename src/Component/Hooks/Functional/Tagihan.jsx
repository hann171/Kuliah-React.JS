import React,{useContext} from 'react'
import { Container } from 'reactstrap'
import { Jumbotron, Button } from 'reactstrap'
import { keranjangContext } from '../../../App'

export default function Tagihan() {
    const countContext = useContext(keranjangContext)
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-3">Tagihan</h1>
                <p className="lead">({countContext.keranjangState.jumlah}x) judul produk</p>
                <hr className="my-2" />
                <p>Harga total Rp. {countContext.keranjangState.hargaTotal}</p>
                <p className="lead">
                    <Button color="primary">Checkout</Button>
                </p>
            </Jumbotron>
        </Container>
    )
}
