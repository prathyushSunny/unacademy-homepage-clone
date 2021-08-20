import './index.css'
import cardImg1 from '../../images/prep_1.svg'
import cardImg2 from '../../images/prep_2.svg'

const IntroCards = () =>(
    <div className='intro-cards-container'>
        <div className='intro-card'>
            <div>
            <h1 className='intro-card-heading'>
                <span className='heading-regular'>
                    Prepare for <br/>
                </span>
                Competitive exams
            </h1>
            </div>
            <p className='popular-goals'>
                Popular goals
            </p>
            <div className='popular-goals-tags'>
                <p className='popular-goal-tag'>UPSC CSE - GS</p>
                <p className='popular-goal-tag'>IIT JEE</p>
                <p className='popular-goal-tag'>NEET UG</p>
                <p className='popular-goal-tag'>Bank Exams</p>
                <p className='popular-goal-tag'>GATE & ESE</p>
                <p className='popular-goal-tag'>UPSC CSE - Optional</p>
            </div>
            <button className='cta-btn'>Start learning</button>
            <img src={cardImg1} className='intro-card-img'/>
        </div>
        <div className='intro-card'>
            <div>
            <h1 className='intro-card-heading'>
                <span className='heading-regular'>
                    Prepare for <br/>
                </span>
                Class 6 to 12
            </h1>
            </div>
            <p className='popular-goals'>
                Popular goals
            </p>
            <div className='popular-goals-tags'>
                <p className='popular-goal-tag'>CBSE</p>
                <p className='popular-goal-tag'>Maharashtra Board</p>
                <p className='popular-goal-tag'>Uttar Pradesh Board</p>
            </div>
            <button className='cta-btn'>Start learning</button>
            <img src={cardImg2} className='intro-card-img'/>
        </div>
    </div>
)

export default IntroCards