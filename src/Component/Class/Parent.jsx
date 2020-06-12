import React, { Component } from 'react';
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stock:10
         }
    }

    beliProduct = (jumlah) => {
        this.setState({
            stock:this.state.stock - jumlah
        })
    }

    render() { 
        return ( 
            <Child 
                stock={this.state.stock}
                fungsi={this.beliProduct.bind(this)}
            />
         );
    }
}
 
export default Parent;