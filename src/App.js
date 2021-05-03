import { Component } from 'react';
import './App.css';
import PlayersContainer from "./containers/PlayersContainer";

class App extends Component {
  render() {
    return(
      <div className="App">
        <PlayersContainer store={this.props.store}/>
      </div>
    )
  };
}

export default App;
