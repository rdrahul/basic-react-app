import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './dishdetail.component.css';
import {Card , CardBody , CardImage ,  CardTitle, CardText } from 'mdbreact';
import { ListGroup, ListGroupItem, Badge } from 'mdbreact'

class DishDetail extends Component {
    
    constructor(props) {

        super(props);
        
        this.state = {};

    }

    /**
     * Render all the comments as li items
     */
    renderComments(){
        
        //creates comment html from each comment
        const comments = this.props.dish.comments.map ( comment => {
             return <ListGroupItem>
                        
                        <div className="row">
                            <div className="col-md-8">
                                
                            <b>{comment.author}</b>
                            </div>
                            <div className="col-md-4">
                                <Badge color="primary" pill>{comment.rating}</Badge>
                            
                            </div>
                        </div>
                        <div class="row" >
                                    {comment.comment}
                        </div>
                    </ListGroupItem>
        });

        //populate them inside list group and add a item for heading
        return(
            <div className="col-md-6" >
                <ListGroup>
                <ListGroupItem active>Comments</ListGroupItem>
                {comments}
                </ListGroup>
            </div>
        );
                
    }

    /**
     * Render our dish into a card
     */
    renderDish(){
        return (
            <div className="col-md-6" >
                <Card >
                    <CardImage className="img-card" src ={this.props.dish.image} alt={this.props.dish.name} ></CardImage>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>   
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    render(){
        return (
            <div className="row mt-5">
            {this.renderDish()}
            {this.renderComments()}
            </div>
        );
    }
}

export default DishDetail;