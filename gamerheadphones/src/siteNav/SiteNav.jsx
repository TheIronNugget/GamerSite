import './SiteNav.scss';

const SiteNav = () => {
  return (
    <div className='siteNav'>
        <div className='siteNavWrapper'>
            <ul className="col subItems">
                <h1 className="categ sitem main">About Gamersite</h1>
                <li className="categ sitem subs">About</li>
                <li className="categ sitem subs">Contact Us</li>
                <li className="categ sitem subs">CCPA Form</li>
                <li className="categ sitem subs">Certified Refurbished</li>
            </ul>
            <ul className="col subItems2">
                <h1 className="categ sitem2 main">Company</h1>
                <li className="categ sitem2 subs">Leadership</li>
                <li className="categ sitem2 subs">Stock Price</li>
                <li className="categ sitem2 subs">Press Release</li>
                <li className="categ sitem2 subs">Careers</li>
            </ul>
    
        </div>
    </div>
  )
}

export default SiteNav;