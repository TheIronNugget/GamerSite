import './Footer.scss';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerWrapper">
            <ul className='footerItems'>
                <li className="footerItem line">Terms & Conditions</li>
                <li className="footerItem line">Privacy Policy</li>
                <li className="footerItem">California Privacy Policy</li>
            </ul>

            <p>©2021 Gamer Site. All tights reserved Maybe.</p>
        </div>
    </div>
  )
}

export default Footer;