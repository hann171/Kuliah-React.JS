import React, { Component } from 'react';
import {Alert, Button} from 'reactstrap';

class BootstrapComp extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Alert color="primary">
                    This is Primary alert - Check it out!
                </Alert>
                <Button color="primary">Primary</Button>{' '}
            </div>
         );
    }
}
 
export default BootstrapComp;