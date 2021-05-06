import CardDeck from 'react-bootstrap/CardDeck'
import Report from "./Report";

export default function ReportList(props) {
    
    const renderReports = () => {
        if (props.reports) {
            return(props.reports.map((report) => {
                return(<Report report={report} key={`report${report.id}`} destroyReport={props.destroyReport}/>)
        }))
        }
        
    }

    return(
        <CardDeck>
            {renderReports()}
        </CardDeck>        
    )
}
