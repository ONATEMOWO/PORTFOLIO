import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
   <section className="hero-container">
    <div className="hero-content">
      <h2>A bit about me</h2>
      <p>
        Hello, I am Foluso Onatemowo, a freshman at Fisk University studying
        Computer Science. I aspire to become a great computer scientist in the
        near future. When I am not behind the computer, you can find me making
        music, hanging out with friends, or reading a good book.
      </p>
      </div>

      <div className="hero-img">
        <img className='himage' src="/src/assets/my_pic.png" alt="" />
      </div>
   </section> 
  );
};

export default Hero;
