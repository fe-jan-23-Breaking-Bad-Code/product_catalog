
<<<<<<<<< Temporary merge branch 1
import './styles/main.scss';
import Logo from './img/Logo.svg'
import Button from './img/button.png'

const Footer: React.FC = () => (
  <footer className='footer'>
    <div className='footer_info'>
      <div className='footer_info__logo'>
        <img src={Logo} alt='logo' />
      </div>
      <a href='/' className='footer_info__link' target='_blank' rel='noopener noreferrer'>
        Github
      </a>
      <a href='/' className='footer_info__link' target='_blank' rel='noopener noreferrer'>
        Contacts
      </a> 
      <a href='/' className='footer_info__link' target='_blank' rel='noopener noreferrer'>
        Rights
      </a>
    </div>
    <div className='footer_button'>
      <p>Back to top</p>
      <button className='button-back'>
        <img src={Button} alt="Go to top" />
      </button>
    </div>
  </footer>
);

export default Footer;
=========
export function Footer() {
    return (
        <header className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
    )
}
>>>>>>>>> Temporary merge branch 2
