import './Header.css'
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

function Header () {
    return <div className = "Header">
<div className='Header-links'>
    <a href='#Home'>Home</a>
    <a href='#CaseStudies'>Case Studies</a>
    <a href='#Testimonials'>Testimonials</a>
    <a href='#RecentWork'>Recent Work</a>
    <a href='#GetInTouch'>Get in Touch</a>
    
</div>
<div className='Header-bars'><FaBars/></div>
<div className='Header-icons'>
    <a href="#"><FaGithub/></a>
    <a href="#"><FaLinkedinIn/></a>
    <a href="#"><BsTwitterX/></a>
</div>
    </div>
}


export default Header ;