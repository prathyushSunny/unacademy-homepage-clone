import './index.css'
import img1 from '../../images/info1.svg'
import img2 from '../../images/info2.svg'
import img3 from '../../images/info3.svg'

const Features = () => (
    <div className='features-container'>
        <div className='feature-card'>
            <div className='feature-description'>
                <h1 className='feature-heading'>Daily live classes</h1>
                <p className='feature-para'>Chat with educators, ask questions, answer live polls, and get your doubts cleared - all while the class is going on</p>
            </div>
            <img src={img1} className='feature-img'/>
        </div>
        <div className='feature-card'>
            <div className='feature-description'>
                <h1 className='feature-heading'>Practice and revise</h1>
                <p className='feature-para'>Learning isn't just limited to classes with our practice section, mock tests and lecture notes shared as PDFs for your revision</p>
            </div>
            <img src={img2} className='feature-img'/>
        </div>
        <div className='feature-card'>
            <div className='feature-description'>
                <h1 className='feature-heading'>Learn anytime, anywhere</h1>
                <p className='feature-para'>One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices</p>
            </div>
            <img src={img3} className='feature-img'/>
        </div>
    </div>
)

export default Features