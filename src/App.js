import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar , NavbarBrand} from "mdbreact";
import Menu from "./components/Menu.component";
import { DISHES } from './shared/dishes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar color="indigo" dark expand="md" scrolling>
          <NavbarBrand href="/">
              <strong>Confusion React App </strong>
          </NavbarBrand>
        </Navbar>
        <div className="container">
          <Menu dishes={DISHES} />
        </div>
      </div>
    );
  }
}

export default App;
