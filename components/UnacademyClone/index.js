import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Features from '../Features'
import Intro from '../Intro'
import Footer from '../Footer'
import Statistics from '../Statistics'
import DownloadApp from '../DownloadApp'
import StartLearning from '../StartLearning'
import DownloadNotification from '../DownloadNotification'
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class UnacademyClone extends Component{
    state = {loginCred: '', closeForm: true}
    
    openLogin = () => {
        this.setState({closeForm: false})
    }

    closeLogin = () => {
        this.setState({closeForm: true, loginCred: ''})
    }
    
    render(){
        const {closeForm, loginCred} = this.state
        return (
        <div className='overall-container'>
            <div className={`login-form ${closeForm ? 'close-form' : null}`}>
                <button onClick={this.closeLogin} className='close-login'><CloseIcon className=''/></button>
                <h3 className='login-title'>Login</h3>
                <p className=''>or <span className='create-acc'>create your account</span></p>
                <div className='input-container'>
                    <img src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" className='ind-flag'/>
                    <p>+91</p>
                    <ExpandMoreIcon style={{cursor: 'pointer'}}/>
                    <input type="text" className='input-field' onChange={(e) => this.setState({loginCred: e.target.value})} value={loginCred} placeholder="Enter your mobile number"/>
                </div>
                <div className='call-to-actions'>
                    <button className={`login-cta-btn ${loginCred.length === 10 ? 'valid-login' : null}`}>Login</button>
                    <p className='create-acc'>Continue with email</p>
                </div>
                <div className='login-bottom-info' style={{marginTop: 'auto', marginBottom: '70px'}}>
                    <p style={{color: '#a0a0a0', fontSize: '14px', width: '100%', textAlign:'right'}}>Having trouble? <br/>Please contact <span style={{color: '#555555'}}>help@unacademy.com</span> for further support</p>                    
                </div>
            </div>
            <DownloadNotification/>            
            <Header openLogin={this.openLogin}/>
            <Intro/>
            <Statistics classValue='statistics-cards-container'/>
            <Features/>
            <DownloadApp/>
            <StartLearning/>
            <Footer/>            
        </div>        
    )}
}

export default UnacademyClone