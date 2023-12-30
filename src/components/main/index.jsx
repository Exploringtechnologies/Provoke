import React, { useEffect, useState } from "react";
import chrome from "../../assets/chrome.svg";
import desktop from "../../assets/desktop.svg";
import mobile from "../../assets/mobile.svg";
import withoutbg from "../../assets/withoutbg.webp";
import provoke from "../..//assets/provoke.webp";
import "./index.css";

function Index() {
  const [currentSvg, setCurrentSvg] = useState(0);
  const svgs = [chrome, desktop, mobile];
  const [currentColor, setCurrentColor] = useState('#FDE047'); // Initial text color
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime()); // Initial remaining time

  function calculateRemainingTime() {
    const days = 31;
    const hours = 10;
    const minutes = 2;
    const seconds = 5;
    return (
      days * 24 * 60 * 60 * 1000 +
      hours * 60 * 60 * 1000 +
      minutes * 60 * 1000 +
      seconds * 1000
    );
  }

  function formatTime(milliseconds) {
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Function to update remaining time
  const updateRemainingTime = () => {
    setRemainingTime((prevTime) => Math.max(0, prevTime - 1000)); // Subtract 1 second
  };

  const changeColor = () => {
    // Fixed set of colors
    const colorOptions = ['#FDE047', '#FCA5A5', '#B8BCC1'];
    
    // Randomly select a color from the fixed set
    const randomColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    
    setCurrentColor(randomColor);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
      setCurrentSvg((prevSvg) => (prevSvg + 1) % svgs.length);
      changeColor();
    }, 1000); // Change SVG every 1 second (1000 milliseconds)
    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  const { days, hours, minutes, seconds } = formatTime(remainingTime);

  return (
    <div className="container">
      <div className="maintext">
        <img className="start" src={withoutbg} />
        <p className="headtext" style={{ color: currentColor }}>
          <h1>
            <span className="special">for</span>
            <span>
              <img
                src={svgs[currentSvg]}
                className="App-logo , no-rotation"
                alt="logo"
                
              />
            </span>
            & Cloud
          </h1>
        </p>
      </div>
      <p className="secondtext" style={{ color: currentColor }}>
        <h1>gaming</h1>
      </p>
      <p className="thirdtext">
        {" "}
        Join us on the launch of gartcod by <img src={provoke} alt="" />
      </p>
        <div className="flex-container">
          {/* Main Flex Container */}
          <div className="flex-item">
            {/* Sub-Div 1 */}
            <div className="sub-item">{days}</div>
            {/* Sub-Div 2 */}
            <div className="sub-item" style={{ color: currentColor }}>
              <p>Days</p>
            </div>
          </div>

          <div className="flex-item">
            {/* Sub-Div 1 */}
            <div className="sub-item">{hours}</div>
            {/* Sub-Div 2 */}
            <div className="sub-item" style={{ color: currentColor }}>
              {/* Content of Sub-Div 2 */}
              <p>Hours</p>
            </div>
          </div>

          <div className="flex-item">
            {/* Sub-Div 1 */}
            <div className="sub-item">{minutes}</div>
            {/* Sub-Div 2 */}
            <div className="sub-item" style={{ color: currentColor }}>
              {/* Content of Sub-Div 2 */}
              <p>Minutes</p>
            </div>
          </div>

          <div className="flex-item">
            {/* Sub-Div 1 */}
            <div className="sub-item">{seconds}</div>
            {/* Sub-Div 2 */}
            <div className="sub-item" style={{ color: currentColor }}>
              {/* Content of Sub-Div 2 */}
              <p>Seconds</p>
            </div>
          </div>
        </div>
        <div className="flex-container" >
        <button className="claim-ticket-button" style={{ backgroundColor: currentColor }}>Claim Ticket</button>
        </div>
      </div>
  );
}

export default Index;
