import { useState } from 'react'
import emailLogo from '/src/assets/img/email.png';
import fbLogo from '/src/assets/img/fb.png';
import NavBar from '../components/NavBar';

const Contact = () => {
    const year = new Date().getFullYear();

    const email = 'mlcnierras@gmail.com';
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = email;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    return (
    <>
        <NavBar/>
        <h1 className='project-title'>Contact Me</h1>
        <div id='contact-box'>
            <div id='contact-details'>
                <img className='email-logo' src={emailLogo}></img>
                {copied && 
                <div className='email-notif'><p>Email copied to clipboard!</p></div>
        }
                <a onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
                    <h4>Email</h4>
                </a>
            </div>
            <div id='contact-details'>
                <img className='fb-logo' src={fbLogo}></img>
                <a href='https://www.facebook.com/mlcnierras/' target='_blank'><h4>Facebook</h4></a>
            </div>
        </div>
    </>
    )
}

export default Contact