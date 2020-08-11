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
    text: "Click for Donuts"
  };

  clickMe = id =>{
    if(this.state.clicked.includes(id)){
      this.setState({text: "D'oh!"})

      if(this.state.highScore < this.state.score){
        this.setState({highScore: this.state.score})
      };

      this.setState({clicked: []})
      this.setState({score: 0})
    }

    else{
      this.setState({text:"Mmmmm donuts arrggllhelehhargglehhge"})
      this.setState({score: this.state.score +1})
      this.setState({clicked: [...this.state.clicked, id]})
    };
    const newClicked = this.state.images
    this.shuffled(newClicked)
  };

  shuffled = newClicked =>{
    for (var i=newClicked.length -1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1))
      const temporary = newClicked[i];
      newClicked[i]= newClicked[j];
      newClicked[j] = temporary
    }
  };

  render(){
    return(
      <div>
        <Navbar 
        text = {this.state.text}
        score = {this.state.score}
        highScore = {this.state.highScore}
        />

        <div className= "jumbotron text-center">
          <h1>Donuts. Is there anything they can't do?</h1>
          <p>Click on a character to start the game. Do not click on the same character more than once or GAME OVER! <br></br>Earn a donut for remembering which character you already clicked! </p>
          <Wrapper>
            {this.state.images.map(image =>(
              <Card 
                id={image.id}
                key={image.id}
                image={image.image}
                clickMe={this.clickMe}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    )
  }
}

export default App;
