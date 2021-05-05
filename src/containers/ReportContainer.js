import { Component } from "react";
import ReportList from "../components/ReportList";

export default class ReportContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            reports: []
        }
    }
    
    render(){
        return(
            <div>
                This is a ReportContainer for {this.props.player.username}
                <ReportList reports={this.state.reports} destroyReport={this.destroyReport.bind(this)}/>
                <button onClick={this.handleClick}>Add Report</button>
            </div>
        )
    }

    destroyReport(event) {
        fetch(`http://localhost:3000/players/${this.props.player.id}/reports/${event.target.parentElement.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
            })
        .then(event.target.parentElement.remove())
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/players/${this.props.player.id}/reports`)
        .then(res => res.json())
        .then(json => this.setState({ reports: json }))
    }

    handleClick = () => {
        fetch(`http://localhost:3000/players/${this.props.player.id}/reports`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'report': {
                    'text': 'this guy sucks',
                    'player_id': 1
                }
            })
        })
        .then(res => res.json())
        .then(json => this.setState({ reports: [...this.state.reports, json] }))
    }
}