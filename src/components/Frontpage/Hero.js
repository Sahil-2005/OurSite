// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="landing">
//         <div className="left-image">
//         </div>
//         <div className="right-image">
//         </div>
//         <div className="name"> <span class="main-name">YUSUF</span><br/><span className="surname">KONDKARI</span></div>
//         <p className="sec-text">I am <span class="second">a Developer</span></p>

//      </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay for animation to start
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero">
      <div className="landing">
        <div className={`left-image ${animate ? 'slide-in-from-left' : ''}`}></div>
        <div className={`right-image ${animate ? 'slide-in-from-right' : ''}`}></div>
        <div className="name">
          <span className="main-name">YUSUF</span>
          <br />
          <span className="surname">KONDKARI</span>
        </div>
        <p className="sec-text">
          I am <span className="second">a Developer</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;

