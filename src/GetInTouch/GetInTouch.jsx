import './demo.css'
import './style.css'
import './GetInTouch.css'
import { BiEnvelope } from 'react-icons/bi'
import { BiPhone } from 'react-icons/bi'
import { BiHome } from 'react-icons/bi'

function GetInTouch () {
    return <div className="GetInTouch" id="GetInTouch">
<h2>Get in Touch</h2>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eius unde possimus neque rem molestiae enim odit dolor ipsum animi!</p>
<div class="container">
      <div class="row">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <BiHome />
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
            
              <BiPhone />
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>571-457-2321</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
             
              <BiEnvelope className='fas fa-envelope'/>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>ntamerrwael@mfano.ga</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name="" />
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name="" />
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name="" />
            </div>
          </form>
        </div>
        
      </div>
    </div>

    </div>
}


export default GetInTouch