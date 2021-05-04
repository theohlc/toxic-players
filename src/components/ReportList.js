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

    handleClick = () => {
        console.log('add report')
    }
}