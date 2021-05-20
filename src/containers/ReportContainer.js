import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addReport, fetchReports, removeReport, switchReportForm } from "../actions/reports";
import ReportList from "../components/ReportList";

class ReportContainer extends Component {
    
    render(){
        return(
            <div>
                These are all the reports for {this.props.player.username}:
                <ReportList player={this.props.player} reports={this.props.reports[this.props.player.id]} destroyReport={this.destroyReport.bind(this)}/>
                {this.reportForm()}
            </div>
        )
    }

    reportForm = () => {
        if (this.props.reports.formLocation === this.props.player) {
            return (
                <Form onSubmit={this.handleSubmit} className='form'>
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
        this.props.addReport(this.props.player, event.target.text.value, event.target.type.value);
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch => {
    return {
        fetchReports: (player)=>{dispatch(fetchReports(player))},
        addReport: (player, text, type)=>{dispatch(addReport(player, text, type))},
        removeReport: (report)=>{dispatch(removeReport(report))},
        switchReportForm: (player)=>{dispatch(switchReportForm(player))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer)