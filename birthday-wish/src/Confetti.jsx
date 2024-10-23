import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import "../src/Confetti.css";

const Confetti = () => {
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [btn, setBtn] = useState(false);

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <div>
        <button onClick={() => setBtn(!btn)} className="btn">
          Click Me!!
        </button>
        {btn && (
          <ReactConfetti
            width={windowDimension.width}
            height={windowDimension.height}
            tweenDuration={1000}
          />
        )}
      </div>
    </>
  );
};

export default Confetti;
