import { Component } from "react";

export default class ReportList extends Component {
    render(){
        return(
            <div>
                This is a ReportListComponent for {this.props.player.username}
                <button onClick={this.handleClick}>Add Report</button>
            </div>
        )
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/players/${this.props.player.id}/reports`)
        .then(res => res.json())
        .then(json => console.log(json))
    }

    handleClick = () => {
        console.log('add report')
    }
}