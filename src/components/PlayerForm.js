import { Component } from 'react';
import { Button, Form } from "react-bootstrap";

class PlayerForm extends Component {
    render() {
        return (
            <div className='container'>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Players Username</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="type">
                        <Form.Label>What did the player do?</Form.Label>
                        <Form.Control as="select">
                        <option>Ran it down mid</option>
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
        console.log(event.target)
    }
}

export default PlayerForm