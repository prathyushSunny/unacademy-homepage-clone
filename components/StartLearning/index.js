import './index.css'
import Statistics from '../Statistics'

const StartLearning = () => (
    <div className='start-learning-container'>    
        <div className='call-to-action'>
            <h1 className='cta-heading'>Start learning with Unacademy</h1>
            <p className='cta-para'>Get unlimited access to structured courses & doubt clearing sessions</p>
            <button className='cta-btn' style={{marginTop: '0'}}>Start learning</button>
        </div>
        <Statistics classValue='display-md'/>
    </div>
)

export default StartLearning