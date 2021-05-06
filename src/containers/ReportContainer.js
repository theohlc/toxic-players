import { Component } from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addReport, fetchReports, removeReport, switchReportForm } from "../actions/reports";
import ReportList from "../components/ReportList";

class ReportContainer extends Component {
    
    render(){
        return(
            <div>
                This is a ReportContainer for {this.props.player.username}
                <ReportList player={this.props.player} store={this.props.store} destroyReport={this.destroyReport.bind(this)}/>
                {this.reportForm()}
            </div>
        )
    }

    reportForm = () => {
        if (this.props.reports.formLocation === this.props.player) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='text'/>
                    <input type='submit' value='submit report'/>
                </form>
            );
        } else {
            return (<Button onClick={this.handleClick}>Add a Report</Button>)
        }
    }

    handleClick = () => {
        this.props.switchReportForm(this.props.player);
    }

    destroyReport(report) {
        this.props.removeReport(report);
    }

    componentDidMount = () => {
        this.props.fetchReports(this.props.player);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.switchReportForm();
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
        removeReport: (report)=>{dispatch(removeReport(report))},
        switchReportForm: (player)=>{dispatch(switchReportForm(player))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)