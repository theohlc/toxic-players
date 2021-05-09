import Player from "./Player";

function PlayerList({ players, store }) {
    const renderPlayers = () => {
        return players.map((player)=>{
            return <Player store={store} player={player} key={`player${player.id}`}/>
        });
    };
    
    return(
        <div class="grid">
            {players ? renderPlayers() : null}
        </div>
    )
}

export default PlayerList