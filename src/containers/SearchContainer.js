import { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { fetchPlayers } from "../actions/players";
import PlayerList from "../components/PlayerList"

class SearchContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: this.props.players,
            searchTerm: ''
        }
    }

    render() {
        return (
            <div className='container'>
                    Search By Username
                    <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
                    <Button onClick={this.handleClick}>
                        <Search/>
                    </Button>
                    <PlayerList players={this.state.players}/>
            </div>
        )
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    componentDidMount = () => {
        this.props.fetchPlayers();
        this.setState({players: this.props.players})
    }

    handleClick = () => {
        const players = this.props.players
        const filteredPlayers = players.filter(player => player.username.includes(this.state.searchTerm))

        this.setState({
            players: filteredPlayers
        })
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlayers: ()=>{dispatch(fetchPlayers())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);