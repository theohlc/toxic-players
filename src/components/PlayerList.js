import { Component } from "react";

class PlayerList extends Component {
    renderPlayers = () => {
        return this.props.players.map((player)=>{
            return <li>{player.username}</li>
        });
    };
    
    render() {
        return(
            <ul>
                {this.renderPlayers()}
            </ul>
        )
    }
}


export default PlayerList;