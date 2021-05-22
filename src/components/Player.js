import ReportContainer from "../containers/ReportContainer";
import VotingButtons from "./VotingButtons";

export default function Player({player}) {
    return(
        <div className='player' style={{backgroundColor: `rgb(100, ${player.score * 5}, 255)`}}>
            <VotingButtons player={player}/>
            <h3>{player.username}</h3>
            <ReportContainer player={player}/>
        </div>
    )
}