import ReportContainer from "../containers/ReportContainer";
import VotingButtons from "./VotingButtons";

export default function Player({player, store}) {
    return(
        <div className='player'>
            <VotingButtons player={player} store={store}/>
            <p>{player.id} {player.username}</p>
            <ReportContainer player={player} store={store}/>
        </div>
    )
}