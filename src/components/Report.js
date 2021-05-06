export default function Report({ report, destroyReport }) {
    const handleClick = (event) => {
        destroyReport(report)
        event.target.parentElement.remove();
    }
    
    return(
        <div className='report' id={report.id}>
            <p>{report.text}</p>
            <button onClick={handleClick}>X</button>
        </div>
    )
}