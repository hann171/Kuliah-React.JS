import React, { Component } from 'react';

class Grandchild extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    minBeli = 1;

    render() { 
        return ( 
            <div>
                <h1>Grandchild Component</h1>
                <p>Stok : {this.props.data}</p>
            </div>
         );
    }
}
 
export default Grandchild;