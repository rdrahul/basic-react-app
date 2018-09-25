import React from 'react';
import './menu.component.css';
import {Card , CardBody , CardImage ,  CardTitle, CardText } from 'mdbreact';

function RenderMenuItem( {dish , onClick} ){
    return (
        <Card onClick={ () => onClick(dish.id) }  > 
        <CardImage className="img-card" src ={dish.image} alt={dish.name} ></CardImage>
        <CardBody   >
        <CardTitle>{dish.name}</CardTitle>
        
        <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    )
}

    

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-md-6 col-sm-12 mt-5" >
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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

export default Menu;