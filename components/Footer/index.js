import './index.css'
import logo from '../../images/logo_md.svg'
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';
import img1 from '../../images/on_appstore.png'
import img2 from '../../images/on_gplay.png'

const Footer = () => (
    <div className='footer-container'>
    <div className='footer-content'>
        <div>
        <img className='footer-logo' src={logo}/>
        <div>
        <div className='contacts'>
            <div className='fb-container'><i class="fab fa-facebook-f fb-icon"></i></div>
            <div className='svg-container'><YouTubeIcon className='contact-svg'/></div>
            <div className='svg-container'><TwitterIcon className='contact-svg'/></div>
            <div className='svg-container'><LinkedInIcon className='contact-svg'/></div>
            <div className='svg-container'><InstagramIcon className='contact-svg'/></div>
        </div>
        <p className='copyrights'><CopyrightIcon style={{transform: "scale(0.4)"}}/>2021 Sorting Hat Technologies Pvt Ltd</p>
        </div>
        </div>
        <div className='footer-options-container'>
            <div className='footer-option-section'>
                <h1 className='footer-options-heading'>Company</h1>
                <ul className='footer-options-list'>
                    <li className='footer-option'>About us</li>
                    <li className='footer-option'>Careers</li>
                    <li className='footer-option'>Blogs</li>
                    <li className='footer-option'>Privacy Policy</li>
                    <li className='footer-option'>Terms and Conditions</li>
                </ul>
            </div>
            <div className='footer-option-section'>
                <h1 className='footer-options-heading'>Popular goals</h1>
                <ul className='footer-options-list'>
                    <li className='footer-option'>IIT JEE</li>
                    <li className='footer-option'>UPSC CSE GS</li>
                    <li className='footer-option'>SSC Exams</li>
                    <li className='footer-option'>CBSE Class 12</li>
                    <li className='footer-option'>NEET UG</li>
                </ul>
            </div>
        </div>
        <div className='footer-apps-container'>
            <div className='footer-apps-section'>
                <h1 className='footer-app-title'>LEARNER APP</h1>
                <div className='app-download'>
                    <img src={img1} className='download-source-img'/>
                    <img src={img2} className='download-source-img'/>
                </div>
            </div>
            <div className='footer-apps-section'>
                <h1 className='footer-app-title'>EDUCATOR APP</h1>
                <div className='app-download'>
                    <img src={img1} className='download-source-img'/>
                    <img src={img2} className='download-source-img'/>
                </div>
            </div>            
        </div>               
    </div>
    <div className='other-links-container'>
            <h1 className='footer-app-title' style={{marginBottom: '10px'}}>OTHER LINKS</h1>
            <div className='other-links'>
                <p className='footer-option'>&nbsp;User Guidelines  |</p>
                <p className='footer-option'>&nbsp;Site Map   |</p>
                <p className='footer-option'>&nbsp;Refund Policy |</p>
                <p className='footer-option'>&nbsp;Plus subscriptions T&C  |</p>
                <p className='footer-option'>&nbsp;Legal Notices  |</p>
            </div>          
        </div>
    </div>
)

export default Footer