import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Report({ report, destroyReport }) {
    const handleClick = (event) => {
        destroyReport(report)
        event.target.parentElement.remove();
    }
    
    return(
        <Card id={report.id} style={{ width: '12rem' }}>
            <Card.Title>{report.report_type}</Card.Title>
            <Card.Text>
                {report.text}<br></br>
                <Button onClick={handleClick}>X</Button>
            </Card.Text>
        </Card>
    )
}