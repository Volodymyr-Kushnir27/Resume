
import './Skills.css'

export default function Skills() {
    return (
        <div className='skills-container'>
            <h1 className='h1-skill'>01 НАВИЧКИ</h1>
            <h2 className='h2-skill'>РІВЕНЬ ВОЛОДІННЯ ПРОГРАМАМИ</h2>
            <div className='ski lls'>
                <div className='skill'>
                    <span className='skill-name'>JS</span>
                    <div className='progress'>
                        <div className='progress-bar js' style={{ width: '75%' }}></div>
                    </div>
                    <span className='percentage'>75%</span>
                </div>
                <div className='skill'>
                    <span className='skill-name'>CSS</span>
                    <div className='progress'>
                        <div className='progress-bar css' style={{ width: '80%' }}></div>
                    </div>
                    <span className='percentage'>80%</span>
                </div>
                <div className='skill'>
                    <span className='skill-name'>HTML</span>
                    <div className='progress'>
                        <div className='progress-bar html' style={{ width: '95%' }}></div>
                    </div>
                    <span className='percentage'>95%</span>
                </div>
                <div className='skill'>
                    <span className='skill-name'>React</span>
                    <div className='progress'>
                        <div className='progress-bar react' style={{ width: '85%' }}></div>
                    </div>
                    <span className='percentage'>85%</span>
                </div>
                <div className='skill'>
                    <span className='skill-name'>Git</span>
                    <div className='progress'>
                        <div className='progress-bar illustrator' style={{ width: '90%' }}></div>
                    </div>
                    <span className='percentage'>90%</span>
                </div>
                
            </div>
            <div className='box'></div>
        </div>
    );
}
