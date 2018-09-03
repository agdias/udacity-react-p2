import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'


class AlertDismissable extends Component {
    
    state = {
        show: true
    }
    
    render() {
        if (this.state.show) {
          return (
              <Alert bsStyle='danger'>
                 <h4> Oh snap! You got an error!</h4>
                 <p> 
                     Change this and that and try again. Duis mollis, est non comodo
                     luctus, nisi erat portitor ligula, eget lacinia odio sem nec elit.
                     Cras mattis consectetur purus sit amet fermentum.
                 </p>
                 <p>
                   <Button bsStyle='danger'>Take this action</Button>
                     <span> or </span>
                   <Button > Hide Alert </Button>
                 </p>
              </Alert>
          )

        }

    } 
}

export  default AlertDismissable