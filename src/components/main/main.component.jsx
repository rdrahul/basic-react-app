import React , { Component } from 'react';
import { Navbar , NavbarBrand} from "mdbreact";
import Menu  from "../menu/Menu.component";
import DishDetail from '../dishdetail/dishdetail.component';
import { DISHES } from "../../shared/dishes";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

class Main extends Component {

    constructor(props){

        super(props);

        this.state = {
            dishes : DISHES,
            selectedDish : null
        };

    }

    onDishSelect(dishId){
        this.setState( { selectedDish : dishId }  );
    }

    render(){
        return (
            <div>
                
                <div>
                    <Header />
                    <Menu dishes={this.state.dishes} onClick = { (dishId) => this.onDishSelect(dishId) }  />
                    <DishDetail dish = { this.state.dishes.filter( dish => dish.id === this.state.selectedDish )[0] } ></DishDetail>
                    <Footer />
                </div>
                
            </div>
        );
    }


}

export default Main