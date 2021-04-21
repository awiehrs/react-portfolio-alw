// Import modules
import React from 'react';
import imgSelf from '../../assets/images/IMG_8944.jpg'
import imgHorse from '../../assets/images/horseicon.png'
import imgShutter from '../../assets/images/shuttericon.png'


// Import stylesheet
import './style.css';


function About() {
  return (
    <div class="container d-flex justify-content-center">
      <div class="text-center">

        <div class="row">
          <div class="aboutDiv col-3">
          <img src={imgHorse} alt="Horse Icon" className="icons" /><p class="aboutText"><b>Passion and Commitment</b> ·
          As an artist based out of Richmond, Virginia, I have a lot to be grateful for. The beautiful scenery, the kind community, and the variety of activities available are all the basis of my interests. I blend my love for the natural world, traditional art, and creative solutions in my work and I pride myself on my commitment to elegant products.
          In my spare time, I enjoy volunteering with a local horse rescue, and exploring the city with my dog.</p>
          <img src={imgShutter} alt="Shutter Icon" className="icons" /><p class="aboutTextTwo"><b>Education and Learning</b> · I hold a Bachelor's Degree from Emory and Henry College in Digital and Analog Photography, with a minor in History. I enjoy working with film cameras and developing prints, however I am also adept in digital software and enjoy creating regardless of the medium.
          I am currently enrolled in a Coding Bootcamp through University of Richmond and anticipate graduating spring 2021. My goal is to utilize prior experience as a creative to help others succeed with their vision online.</p>
          </div>
          <div class="col-4">
            <img src={imgSelf} alt="Self Portrait" className="homeImg" />
          </div>
        </div>

        

      </div>
    </div>
  );
}

// Export component
export default About;