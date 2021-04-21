// Import modules
import React from 'react';
import imgPonies from '../../assets/images/Grayson-4 (3).jpg'


// Import stylesheet
import './style.css';

// Landing page component
function Home() {
  return (
    <div class="container d-flex justify-content-center">
      <div class="text-center">

        <div class="row">
          <div class="homeDiv col-4">
          <p class="andSign">&amp;</p>
          <p class="webText">Web Development</p>
          <p class="designText">Design</p>
          </div>
          <div class="col-6">
            <img src={imgPonies} alt="Wild Ponies" className="homeImg" />
          </div>
        </div>

        

      </div>
    </div>
  );
}

// Export component
export default Home;