
import './Header.css'

export default function Header() {
    const now = new Date()
    return (
        <header>
            <div className='header'>
                <div className="logo"> V </div>
                <div>
                    <div className="button-main-page"> Головна </div>
                    <div className="button-soft-skills"> Навички </div>
                    <div className="button-experience"> Досвід </div>
                    <div className="button-portfolio"> Портфоліо </div>
                    <div className="button-contacts"> Контакти </div>
                </div>
            </div>
            <span className='time'>Time:{now.toLocaleTimeString()} </span>
        </header>
    )
}