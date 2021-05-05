import { Component } from "react";
import { connect } from "react-redux";
import Player from "./Player";

class PlayerList extends Component {
    renderPlayers = () => {
        // console.log(this.props)
        // return this.props.players.map((player)=>{
        //     return <Player player={player} key={player.id}/>
        // });
    };
    
    render() {
        return(
            <ul>
                {this.renderPlayers()}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(PlayerList)