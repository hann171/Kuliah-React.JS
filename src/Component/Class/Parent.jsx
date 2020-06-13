import React, { Component } from 'react';
import Child from './Child'
import Child2 from './Child2'

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
            <div>
                <Child 
                    stock={this.state.stock}
                    fungsi={this.beliProduct.bind(this)}
                />
                <Child2
                    stock={this.state.stock}
                />
            </div>
         );
    }
}
 
export default Parent;