import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import images from "./images.json"
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    images,
    score: 0,
    highScore: 0,
    clicked: [],
    text: "Click Away!"
  };

  clickMe = id =>{
    if(this.state.clicked.includes(id)){
      this.setState({text: "Sorry. Try again"})

      if(this.state.highScore < this.state.score){
        this.setState({highScore: this.state.score})
      };

      this.setState({clicked: []})
      this.setState({score: 0})
    }

    else{
      this.setState({text:"You get another donut!"})
      this.setState({score: this.state.score +1})
      this.setState({clicked: [...this.state.clicked, id]})
    };
    const newClicked = this.state.images
  }
}

export default App;
