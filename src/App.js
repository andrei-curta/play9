import React, { Component } from 'react'
import './App.css';
import Instructions from './Instructions/Instructions'
import RefreshButton from './Buttons/RefeshButton/RefreshButton'
import NumberButton from './Buttons/NumberButton/NumberButton'
import Star from "./Star/Star"
import CenterButton from "./Buttons/CenterButton/CenterButton"

class App extends Component {

  state = {
    showInstructions: false,
    numberOfRefreshes: 5,
    numberOfStars:  1 + Math.floor( Math.random() * 10 ),
    numberOfClicks_CenterButton: 0,
    numberButtons: [],
    disabledButtonsKeys: [],
    rightNumberButtons: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  }

  toggleInstructionsHandler = () => {
    this.setState({
      showInstructions: ! this.state.showInstructions,
    });
  }

  refreshStars = () => {
    
    if(this.state.numberOfRefreshes === 0){
      return;
    }

    this.setState({
      numberOfRefreshes: this.state.numberOfRefreshes - 1,
      numberOfStars: 1 + Math.floor( Math.random() * 10 )
    });
  }

  bottomNumberButtonClicked = (index) => {
    const { rightNumberButtons } = this.state;
    console.log(index + 1)
    this.setState({
      rightNumberButtons: rightNumberButtons[index] ? rightNumberButtons[index] = 0 : rightNumberButtons[index] = 1,
    });
  }

createRightNumberButtons = () => {
  
  if(this.state.disabledButtonsKeys.length != 0)
  return this.state.numberButtons

  let rightButtons = []

  this.state.disabledButtonsKeys.map( i => {
    rightButtons.push(<NumberButton id = {i} key = {i} number = {i} css = {"btn btn-primary mr-2"} click = {this.bottomNumberButtonClicked} value = {i}/>);
  })

  return rightButtons
}

  createNumberButtons = () =>{

    if(this.state.numberButtons.length != 0)
      return this.state.numberButtons

    for(let i = 1; i <= 9 ; i++){
      this.state.numberButtons.push(<NumberButton key = {i} number = {i} css = {"btn btn-primary mr-2 undefined"} click = {this.bottomNumberButtonClicked}/>);
    }

    return this.state.numberButtons
  }

  createStars = () => {
    let stars = [];
    for(let i = 0; i < this.state.numberOfStars; i++){
      stars.push(<Star key ={i}/>);
    }
    return stars;
  }

  render() {

    const { rightNumberButtons = [] } = this.state;

    console.log(rightNumberButtons)

    return (
      <div className="container">
        <div className = "row">
          <h1> Play9 </h1>
        </div>

        <div className = "row">
          <button onClick={this.toggleInstructionsHandler}>How to play this game</button>
        </div>
        
        <div className className = "row">
          {this.state.showInstructions && <Instructions/>}
        </div>
        
        <hr></hr>

        <br></br>

        <div className = "row justify-content-md-center">

          <div className="col-xl-2 col-md-3">
            {this.createStars()}
          </div>

          <div className = "col-md-1 text-center">

           <CenterButton/>

            <br></br>
            <br></br>

            <RefreshButton 
              numberOfRefreshes = {this.state.numberOfRefreshes}
              click = {this.refreshStars}
              disabled = {this.state.numberOfRefreshes === 0 ? true : false}
              />

            </div>

           <div className = "col-md-2">
             {
                rightNumberButtons.map((btn, index) =>
                  <NumberButton
                    key = {btn[index + 1]} 
                    number = {index} 
                    className = {btn === 0 ? "btn btn-primary mr-2 undefined" : "buttonDisabled"}
                    onClick = {() => this.bottomNumberButtonClicked()}
                  />
                )
            }
           </div>
        </div>
        
        <hr></hr>



        <div className = "row justify-content-center">
        {
          rightNumberButtons.map((btn, index) =>
            <NumberButton 
              key = {btn[index + 1]}
              number = {index + 1} 
              className = {"btn btn-primary mr-2 undefined"}
              onClick = {() => this.bottomNumberButtonClicked()}/>
          )
        }
        </div>
        

      </div>
    );
  }
}

export default App;
