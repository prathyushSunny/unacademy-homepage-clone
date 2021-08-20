import './index.css'
import img1 from '../../images/learning_1.svg'
import img2 from '../../images/learning_2.svg'
import img3 from '../../images/learning_3.svg'
import img4 from '../../images/learning_4.svg'
import img5 from '../../images/learning_5.svg'

const Statistics = (props) => {
    const {classValue} = props
    return (
    <div className={classValue}>
        <div className='statistics-cards'>
            <div className='statistic-card'>
                <p className='statistic-heading'>Exam categories</p>
                <h2 className='statistic-value'>60<span style={{color: '#08bd80'}}>+</span></h2>
                <img src={img1} className='statistic-card-img'/>
            </div>
            <div className='statistic-card'>
                <p className='statistic-heading'>Daily live classes</p>
                <h2 className='statistic-value'>1.5k<span style={{color: '#08bd80'}}>+</span></h2>
                <img src={img2} className='statistic-card-img'/>
            </div>
            <div className='statistic-card'>
                <p className='statistic-heading'>Mins. watched</p>
                <h2 className='statistic-value'>3.2B<span style={{color: '#08bd80'}}>+</span></h2>
                <img src={img3} className='statistic-card-img'/>
            </div>
        </div>
        <div className='statistics-cards'>            
            <div className='statistic-card'>
                <p className='statistic-heading'>Educators</p>
                <h2 className='statistic-value'>14k<span style={{color: '#08bd80'}}>+</span></h2>
                <img src={img4} className='statistic-card-img'/>
            </div>
            <div className='statistic-card'>
                <p className='statistic-heading'>Video lessons</p>
                <h2 className='statistic-value'>1M<span style={{color: '#08bd80'}}>+</span></h2>
                <img src={img5} className='statistic-card-img'/>
            </div>
        </div>
    </div>
)}

export default Statistics