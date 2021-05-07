import Button from 'react-bootstrap/Button'
import React from "react";

export default class VotingButtons extends React.Component {
    render() {
        return(
            <div>
                <Button variant="success">Toxic</Button>{' '}
                text
                <Button variant="danger">Not Toxic</Button>{' '}
            </div>
        )
    }
}