export default function Player(player) {
    return(
        <div className='player'>
            <p>{player.id}</p>
            <p>{player.username}</p>
        </div>
    )
}