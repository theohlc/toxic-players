export default function Report({ report, destroyReport }) {
    return(
        <div className='report' id={report.id}>
            <p>{report.text}</p>
            <button onClick={destroyReport}>X</button>
        </div>
    )
}