// Import modules
import React from 'react';


// Import stylesheet
import './style.css';

// Landing page component
function Home() {
  return (
    <div id="header" class="container d-flex justify-content-center">
      <div id="header-text" class="text-center">

        <div id="img-wrapper" class="mx-auto mb-3 d-flex justify-content-center align-items-center">
        </div>

        <h1 class="heading font-weight-bold">
          <i id="header-icon" class="mb-0 mr-1 fas fa-code"></i>
          HELLO!
        </h1>

        <p class="h5 font-weight-light">My name is Amanda Lelia</p>

        <hr />

        

      </div>
    </div>
  );
}

// Export component
export default Home;