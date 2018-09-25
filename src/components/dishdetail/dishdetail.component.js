import React from 'react';

import './dishdetail.component.css';
import {Card , CardBody , CardImage ,  CardTitle, CardText } from 'mdbreact';
import { ListGroup, ListGroupItem, Badge } from 'mdbreact'




    /**
     */
    function RenderComments({comments}){
        
        //creates comment html from each comment
        const commentsDiv = comments.map ( comment => {
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
                {commentsDiv}
                </ListGroup>
            </div>
        );
                
    }

    /**
     * Render our dish into a card
     */
    function RenderDish( {dish} ){
        return (
            <div className="col-md-6" >
                 <Card >
                    <CardImage className="img-card" src ={dish.image} alt={dish.name} ></CardImage>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>   
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    const DishDetail  = (props) => {
        if (! props.dish) {
            return (
                <div></div>                
            );
        }
        return (
            <div className="row mt-5">
                <RenderDish dish = {props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        );
    }


export default DishDetail;