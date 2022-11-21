import './Navbar.scss';
import React, { useState } from "react";
import 'animate.css';
import {HiOutlineMenu} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';



const Navbar = () => {

const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
    
  return (
    <div className="navBlock">
        <div className="animate__animated animate__fadeInDown banner">
            <div className="bannerTxt">
                <p className='maintitle'>Shop now. Pay over Credit.</p>
                <p className='subtitle'>East Coast Residents must be from the Lenders Law license.</p>
            </div>
            <button>Learn more</button>
        </div>

        
        <div className="topBar">
            <div className="topBarTxt">
                <p>Free Shipping On orders over $50</p>
            </div>
            <ul className="navItems">
                <li className='sz'><a href='/'>Team Soggy</a></li>
                <li className='sz brd lng'><a href='/'>Support & Downloads</a></li>
                <li className='sz brd'><a href='/'>Blog</a></li>
                <li className='sz brd'><a href='/'>Rewards</a></li>
            </ul>
        </div>


        <div className="mainNav">
        <div className="hammy" onClick={handleClick}>
        {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenu className='icon' />)}
        
        </div>
            <div className="logo">
                <h1>Soggy</h1>
            </div>
            <div className={click ? 'nav-menu alive' : 'nav-menu'} >
                <button className='item-list'>Headsets</button>
                <button className='item-list'>Controllers</button>
                <button className='item-list'>Microphones</button>
                <button className='item-list'>Simulation</button>
                <button className='item-list'>Sale</button>
                <button className='item-list'>Parts & Accessories</button>
            </div>
            
        </div>
        
    </div>
  )
};

/* <div className="right-icons">
                <div className="icons"><a href= '/'>k</a></div>
                <div className="icons"><a href= '/'>k</a></div>
                <div className="icons"><a href= '/'>k</a></div>
                <div className="icons"><a href= '/'>k</a></div>
            </div> */


export default Navbar;