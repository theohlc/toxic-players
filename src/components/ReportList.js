import { Component } from "react";
import Report from "./Report";
import { connect } from "react-redux";

class ReportList extends Component {
    
    renderReports() {
        return(this.props.reports.map((report) => {
            return(<Report report={report} key={`report${report.id}`} destroyReport={this.props.destroyReport}/>)
        }))
    }

    render() {
        return(
            <div>
                {this.renderReports()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps)(ReportList)