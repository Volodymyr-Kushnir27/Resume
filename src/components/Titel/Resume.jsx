import './Resume.css'
export default function Resume(props) {
    console.log(props)
    return (<div>
        <div className="resume">
            <div className="logo2"> V </div>
            <div className="text"><h3> Я джун аптлідвптіл опткпдткупдло кдптукплдт птпаттво </h3></div>
            <div className='download'>
                <a href="Resume.pdf" className="btn btn--download"> СКАЧАТИ РЕЗЮМЕ</a>
            </div>
        </div>
        </div>
    )
}