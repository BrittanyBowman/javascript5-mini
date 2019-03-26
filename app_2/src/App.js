import React, { Component } from 'react';
import './logo.svg';
import './App.css';
import FoodItem from './FoodItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteFoods: ['lettuce', 'carrots', 'beets', 'beans', 'air']
    }
  }
  render() {

    const favFoods = this.state.favoriteFoods.map( item => {
        return <FoodItem foodItem={item}/>
    })

    return (
      <div className="App">
        <h1>My Favorite Food List:</h1>
        {favFoods}
      </div>
    );
  }
}

export default App;
