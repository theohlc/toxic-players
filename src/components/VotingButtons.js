import Button from 'react-bootstrap/Button'
import React from "react";
import { connect } from 'react-redux';
import { voteOnPlayer } from "../actions/players";

class VotingButtons extends React.Component {
    render() {
        return(
            <div>
                <Button onClick={this.handleToxicVote} variant="success">Toxic</Button>{' '}
                {this.props.player.score}
                <Button onClick={this.handleNotToxicVote} variant="danger">Not Toxic</Button>{' '}
            </div>
        )
    }

    handleToxicVote = () => {
        this.props.voteOnPlayer(true, this.props.player);
        this.forceUpdate();
    }

    handleNotToxicVote = () => {
        this.props.voteOnPlayer(false, this.props.player);
        this.forceUpdate();
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        voteOnPlayer: (toxicVote, player)=>{dispatch(voteOnPlayer(toxicVote, player))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingButtons)