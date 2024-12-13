import './Home.css'
import Header from "../Header/Hedaer";
import Photo1 from '../images/IMG_20241026_021244_977.jpg';
import { FaAngleRight } from 'react-icons/fa6';
import { SiClickup } from 'react-icons/si';
import { FaDropbox } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

function Home() {
    return (
      <div className="Home" id='Home'>
       <Header/>
       <div className='Home-Page'>
        <div className='information'>
          <h2>Muhammad ElHajj</h2>
          <p>Hello everyone , I am Muhammad ElHajj , FullStack Developer . 
            <br />
            I have more than tow years of real experience. <br />
            Make perfect pixel desing is my main purpuse during my job life. 
            </p>
            <button>Let's Get Started <FaAngleRight/></button>
 </div>
        <div className='Photo-part'><img src={Photo1} alt="Not Found" /></div>
       </div>
       <div className='Home-down'>
        <div><SiClickup/><span>ClickUp</span></div>
        <div><FaDropbox/><span>DropBox</span></div>
        <div><SiClickup/><span>PAYCHEX</span></div>
        <div><BiWorld/><span>elstic</span></div>
        <div><SiClickup/><span>Strip</span></div>
       </div>
      </div>
    );
  }
  
  export default Home;
  