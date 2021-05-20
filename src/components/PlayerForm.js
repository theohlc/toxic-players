import { Component } from 'react';
import { Button, Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addPlayer } from '../actions/players';

class PlayerForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirectToHome: false
        }
    }

    render() {
        if (this.state.redirectToHome === true) {
            return(<Redirect to='/' />)
        }

        return (
            <div className='container'>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Players Username</Form.Label>
                        <Form.Control type="text" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="type">
                        <Form.Label>What did the player do?</Form.Label>
                        <Form.Control as="select">
                        <option>Intentionally trolled</option>
                        <option>Was terrible at the game</option>
                        <option>Disconnected</option>
                        <option>Obscenity</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="text">
                        <Form.Label>Describe the Incident</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(event.target.username.value, event.target.text.value, event.target.type.value)
        this.setState({redirectToHome: true})
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: (username, text, type)=>{dispatch(addPlayer(username, text, type))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm)