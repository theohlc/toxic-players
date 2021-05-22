import Player from "./Player";

function PlayerList({ players }) {
    const renderPlayers = () => {
        return players.map((player)=>{
            return <Player player={player} key={`player${player.id}`}/>
        });
    };
    
    return(
        <div class="grid">
            {players ? renderPlayers() : null}
        </div>
    )
}

export default PlayerList