import './index.css'
import logoSm from '../../images/logo_sm.svg'
import logoMd from '../../images/logo_md.svg'

const Header = (props) => {
    const {openLogin} = props

    return (<nav className='header-container'>
        <img src={logoSm} alt='logo' className='logo-sm logo'/>
        <img src={logoMd} alt='logo' className='logo-md logo'/>
        <button onClick={() => openLogin()} className='login-btn'>Login</button>
    </nav>
)}

export default Header