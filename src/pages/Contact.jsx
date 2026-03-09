import React from 'react'; 
import './Contact.css'; 

function Contact() 
{ 
  return ( 
  <> 
  <div className='contact'> 
    <div className='contactin'> 
      <div className='c1s1'> 
        <a href="https://www.linkedin.com/in/spoorjith-123456789/" target='_blank'>
        <i class="fa-brands fa-square-linkedin"></i></a> <a href="https://www.linkedin.com/in/spoorjith-123456789/" target='_blank'>LinkedIn</a> 
      </div> 
      <div className='c1s1'> 
        <a href="https://github.com/spoorjith1" target='_blank'><i class="fa-brands fa-github"></i></a> 
        <a href="https://github.com/spoorjith1" target='_blank'>GitHub</a> 
      </div> 
      <div className='c1s1'>
        <a href="mailto:spoorjith@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <a href="mailto:spoorjith@gmail.com">Email</a>
      </div>
    </div>
    <div className='contactin'>
      <div className='c1s1'>
        <a href="https://www.instagram.com/spoorjith" target='_blank'><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.instagram.com/spoorjith" target='_blank'>Instagram</a>
      </div>
      <div className='c1s1'>
        <a href="https://twitter.com/spoorjith" target='_blank'><i class="fa-brands fa-twitter"></i></a>
        <a href="https://twitter.com/spoorjith" target='_blank'>Twitter</a>
      </div>
      <div className='c1s1'>
        <a href="https://www.facebook.com/spoorjith" target='_blank'><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.facebook.com/spoorjith" target='_blank'>Facebook</a>
      </div>
    </div>
    <div className='address'>
      <div>
        <i class="fa-solid fa-envelope"></i><span className='addmail'>spoorjithchiru@gmail.com</span><br/>
        <span className='addmail2 addmail'>spoorjith1@gmail.com</span>
      </div>
      <div>
        <i class="fa-brands fa-whatsapp"></i><span className='addphone'>+91 7995295137</span>
      </div>
      <div>
        <i class="fa-solid fa-location-dot"></i><span className='addlocation'>Hyderabad, Telangana, India</span>
      </div>
    </div>
  </div>
  </>
) }
export default Contact;