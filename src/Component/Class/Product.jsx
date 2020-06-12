import React, { Component } from 'react'
import "./CSS/Product.css";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stock:this.props.stock,
            sub:"Beli",
            status:"Tersedia",
            disabled:false
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock: this.state.stock-1
        })

        if(this.state.stock===1){
            this.setState({
                status:"Habis",
                disabled:true
            })
        }
    }

    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://www.bhphotovideo.com/images/images2500x2500/apple_mwtl2ll_a_13_3_macbook_air_with_1553858.jpg" alt="" />
                <p>{this.props.harga}</p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
            </div>
        );
    }
}
export default Product;
