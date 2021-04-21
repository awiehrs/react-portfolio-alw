// Import modules
import React from 'react';
import contactImg from '../../assets/images/IMG_4631 (1).jpg'

// Import stylesheet
import './style.css';

function Contact() {
  return (
        <div class="container d-flex justify-content-center">
        <div class="text-center">

            <div class="row">
                <div class="contactDiv col-3">
                    <div class="container contactContent">
                        <div class="row justify-content-center">
                
                            <div class="col-lg-5 col-md-6 col-sm-6 titlePosition">
                                <form>
                                    <div class="form-group">
                                        <label>E-mail Me</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                                    </div>
                                <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-secondary">Send</button>
                        </form>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 text-center titlePosition">
                    <b>Find Me in these Communities!</b>
                    <p><a href="https://www.linkedin.com/in/amanda-wiehrs/" target="_blank" rel="noopener noreferrer" class="contactMeLinks">LinkedIn</a>
                        <a href="https://github.com/awiehrs" target="_blank" rel="noopener noreferrer" class="contactMeLinks">Github</a>
                    </p>
                    <b>Download my Resume</b>
                    <a href="../assets/AmandaWiehrsResume-2021.pdf" download="AmandaLeliaWiehrs-Resume" class="contactMeLinks">Resume PDF</a>
                </div>
                <div class="spaceHolder">&nbsp;</div>
            </div>
        </div>
            
          </div>
          <div class="col-4">
            <img src={contactImg} alt="Frozen Waterfall in Black and White Photograph" className="homeImg" />
          </div>
        </div>

        

      </div>
    </div>
  );
}

// Export component
export default Contact;