import { Component } from "react";
import { connect } from "react-redux";
import { addReport, fetchReports } from "../actions/reports";
import ReportList from "../components/ReportList";

class ReportContainer extends Component {
    
    render(){
        return(
            <div>
                This is a ReportContainer for {this.props.player.username}
                <ReportList store={this.props.store} destroyReport={this.destroyReport.bind(this)}/>
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
        this.props.fetchReports();
        // fetch(`http://localhost:3000/players/${this.props.player.id}/reports`)
        // .then(res => res.json())
        // .then(json => this.setState({ reports: json }))
    }

    handleClick = () => {
        this.props.addReport();
        // fetch(`http://localhost:3000/players/${this.props.player.id}/reports`, {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         'report': {
        //             'text': 'this guy sucks',
        //             'player_id': this.props.player.id
        //         }
        //     })
        // })
        // .then(res => res.json())
        // .then(json => this.setState({ reports: [...this.state.reports, json] }))
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReports: ()=>{dispatch(fetchReports())},
        addReport: ()=>{dispatch(addReport())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)