import React from 'react';
import './App.css'; // Import your CSS file

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <header id="header">
        {/* Include content for the header here */}
      </header>

      {/* Banner Component */}
      <div className="banner">
        {/* Include content for the banner here */}
      </div>

      {/* Intro Component */}
      <div className="tab intro">
        {/* Include content for the intro here */}
      </div>

      {/* Section 1 */}
      <section>
        <div id="planeimg">
          <img src="https://i.pinimg.com/originals/bd/ba/9b/bdba9b09e40bc2eb4281078049263d08.gif" alt="" />
        </div>
        <div className="bottoncard">
          <h2>Discover the touch of Nature</h2>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} id="myBtn" title="top">
        ^
      </button>

      {/* Library Component */}
      <div className="tab library">
        {/* Include content for the library here */}
      </div>

      {/* Section 2 */}
      <section>
        <div className="bottoncard2">
          <h1>What Services we Provide</h1>
        </div>
        <div id="bottom">
          {/* Include content for the services here */}
        </div>
      </section>

      <div className="bottoncard">
        <h1>Plan easy, Pay less & experience more</h1>
      </div>

      <div id="bottom2">
        {/* Include content for the second section here */}
      </div>

      {/* Footer Component */}
      <div id="footer">
        {/* Include content for the footer here */}
      </div>
    </div>
  );
}

function scrollToTop() {
  // Implement scroll to top functionality here
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default App;
