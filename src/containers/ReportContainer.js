import { Component } from "react";
import { connect } from "react-redux";
import { addReport, fetchReports, removeReport } from "../actions/reports";
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

    destroyReport(report) {
        this.props.removeReport(report);
    }

    componentDidMount = () => {
        this.props.fetchReports(this.props.player);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addReport(this.props.player, event.target.text.value);
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReports: (player)=>{dispatch(fetchReports(player))},
        addReport: (player, text)=>{dispatch(addReport(player, text))},
        removeReport: (report)=>{dispatch(removeReport(report))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)