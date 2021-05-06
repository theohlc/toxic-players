import { Component } from "react";
import { connect } from "react-redux";
import { addReport, fetchReports } from "../actions/reports";
import ReportList from "../components/ReportList";

class ReportContainer extends Component {
    
    render(){
        return(
            <div>
                This is a ReportContainer for {this.props.player.username}
                <ReportList player={this.props.player} store={this.props.store} destroyReport={this.destroyReport.bind(this)}/>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='text'/>
                    <input type='submit' value='submit report'/>
                </form>
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
        this.props.fetchReports(this.props.player);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addReport(this.props.player, event.target.text.value);
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
        fetchReports: (player)=>{dispatch(fetchReports(player))},
        addReport: (player, text)=>{dispatch(addReport(player, text))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)