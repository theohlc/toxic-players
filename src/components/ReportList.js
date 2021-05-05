import { Component } from "react";
import Report from "./Report";

export default class ReportList extends Component {
    
    renderReports() {
        return(this.props.reports.map((report) => {
            return(<Report report={report} key={`reporty${report.id}`}/>)
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