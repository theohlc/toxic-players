import { Component } from "react";

export default class Player extends Component {
    render() {
        return(
            <div>
                {this.props.player.username}
            </div>
        )
    }
}