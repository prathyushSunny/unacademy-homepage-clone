import './index.css'
import bannerImgSm from '../../images/banner_sm.svg'
import bannerImgMd from '../../images/banner_md.svg'
import IntroCards from '../IntroCards'

const Intro = () => (
    <div className='intro-container'>
        <div className='heading-img-container'>
            <h1 className='banner-heading'>India's largest learning platform</h1>
            <img src={bannerImgSm} className='banner-img banner-img-sm'/>
            <img src={bannerImgMd} className='banner-img banner-img-md'/>
        </div>
        <IntroCards/>
    </div>
)

export default Intro