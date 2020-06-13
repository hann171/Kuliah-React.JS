import React, { Component } from 'react';
import Grandchild from './Grandchild';

class Child2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    minBeli = 1;

    render() { 
        return ( 
            <div>
                <h1>Child2 Component</h1>
                <p>Stok : {this.props.stock}</p>
                <Grandchild data={this.props.stock}/>
            </div>
         );
    }
}
 
export default Child2;