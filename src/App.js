import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PlayersContainer from "./containers/PlayersContainer";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Route path='/' component={() => <PlayersContainer store={this.props.store}/>}/>
        </div>
      </Router>
    )
  };
}

export default App;
