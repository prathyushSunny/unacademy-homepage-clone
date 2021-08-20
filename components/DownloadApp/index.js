import './index.css'
import img1 from '../../images/mobile.png'
import img2 from '../../images/on_appstore.png'
import img3 from '../../images/on_gplay.png'

const DownloadApp = () => (
    <div className='download-container'>        
        <img src={img1} className='mobile-img'/>
        <div className='app-download-details'>
        <h1 className='download-heading'>Get the learning app</h1>
        <p className='download-para'>Download lessons and learn anytime, anywhere with the Unacademy app</p>
        <div className='download-source'>
            <img src={img2} className='download-source-img'/>
            <img src={img3} className='download-source-img'/>
        </div>
        </div>
    </div>
)

export default DownloadApp