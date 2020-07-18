import React, { PureComponent } from 'react'
import {Button} from 'reactstrap'

export default class ClassComp extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            jumlah: 0
        }
    }

    tambahProduk = () => {
        this.setState({
            jumlah: this.state.jumlah + 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.jumlah}</h1>
                <Button onClick={this.tambahProduk}>Add to Cart</Button>
            </div>
        )
    }
}
