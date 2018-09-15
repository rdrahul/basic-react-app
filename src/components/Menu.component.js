import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './menu.component.css';
import {Card , CardBody , CardImage ,  CardTitle, CardText } from 'mdbreact';

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dishes: props.dishes
        }
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-md-3 col-sm-12 mt-5">
                <Card  >
                  <CardImage className="img-card" src ={dish.image} alt={dish.name} ></CardImage>
                  <CardBody   >
                    <CardTitle>{dish.name}</CardTitle>
                    
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              
                  {menu}
              
            </div>
          </div>
        );
    }
}

export default Menu;