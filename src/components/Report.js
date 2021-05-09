import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Report({ report, destroyReport }) {
    const handleClick = (event) => {
        destroyReport(report)
        event.target.parentElement.remove();
    }
    
    return(
        <div className='report'>
            <h3>{report.report_type}</h3>
            <p>
                {report.text}<br></br>
                <Button onClick={handleClick}>X</Button>
            </p>
        </div>
    )
}