import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './menu.component.css';
import {Card , CardBody , CardImage ,  CardTitle, CardText } from 'mdbreact';

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dishes: props.dishes,
            selectedDish : null
        }
    }

    renderDish(dish){
        if ( dish !=null ) {
            return (
                <div className="col-md-6" >
                    <Card  >
                        <CardImage className="img-card" src ={dish.image} alt={dish.name} ></CardImage>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>   
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
              </div>
            )
        }else{
            return '';
        }
    }

    onDishSelected( dish ){
        console.log(dish);
        this.setState({selectedDish : dish});
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-md-6 col-sm-12 mt-5" onClick={() => this.onDishSelected(dish)}>
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
            <div className="row mt-5">
                <div className = "col-md-12" >
                <h3>You selected this dish </h3>
                </div>
                <div className="col-md-12" >
                    {this.renderDish( this.state.selectedDish)}
                </div>
            </div>
          </div>
        );
    }
}

export default Menu;