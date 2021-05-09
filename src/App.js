import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PlayersContainer from "./containers/PlayersContainer";
import PlayerForm from './components/PlayerForm'
import SearchContainer from './containers/SearchContainer'
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return(
      
      <Router>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={() => <PlayersContainer store={this.props.store}/>}/>
          <Route exact path='/new' component={() => <PlayerForm store={this.props.store}/>}/>
          <Route exact path='/search' component={() => <SearchContainer store={this.props.store}/>}/>
        </div>
      </Router>
    )
  };
}

export default App;
