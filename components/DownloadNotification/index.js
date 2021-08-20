import React from 'react';
import './index.css'
import logo from '../../images/logo_sm.svg'
import CancelIcon from '@material-ui/icons/Cancel';

class DownloadNotification extends React.Component{
    state = {closed: false}
    render(){
        const {closed} = this.state
        return(
            <div className={`notification-container ${closed && 'close-notification'}`}>
                <img src={logo}/>
                <p className='notification-para'>Get Free live classes & tests on the app</p>
                <button className='cta-btn' style={{marginTop: '0', transform: 'scale(0.9)'}}>Download</button>
                <button onClick={() => this.setState({closed: true})} style={{border: 'none', outline: 'none', background: 'none'}}><CancelIcon className='close-svg'/></button>
            </div>
        )    
    }
}

export default DownloadNotification