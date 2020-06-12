import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    minBeli = 1;

    render() { 
        return ( 
            <div>
                <h1>Child Component</h1>
                <p>Stok : {this.props.stock}</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>
         );
    }
}
 
export default Child;