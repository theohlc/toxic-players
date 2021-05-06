import ReportContainer from "../containers/ReportContainer";
import Card from 'react-bootstrap/Card'

export default function Player({player, store}) {
    return(
        <Card style={{ width: '32rem' }}>
            <Card.Body>
                <Card.Title>{player.username}</Card.Title>
                <ReportContainer player={player} store={store}/>
            </Card.Body>
        </Card>
    )
}