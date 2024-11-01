import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RippleButton = ({ children, className, ...props }) => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    if (ripples.length > 0) {
      const timeout = setTimeout(() => {
        setRipples([]);
      }, 500); // Ripple effect duration

      return () => clearTimeout(timeout);
    }
  }, [ripples]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    const x = event.clientX - rect.left - radius;
    const y = event.clientY - rect.top - radius;

    const newRipple = {
      x,
      y,
      diameter,
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);
  };

  return (
    <button
      className={`relative overflow-hidden ${className} hover:bg-[#F5DF77]/80 transition-colors duration-200`}
      onClick={createRipple}
      {...props}
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-[#F5DF77] opacity-75 animate-ripple"
          style={{
            width: ripple.diameter,
            height: ripple.diameter,
            top: ripple.y,
            left: ripple.x,
          }}
        ></span>
      ))}
      <Link to={"/contact"}>{children}</Link>
    </button>
  );
};

export default RippleButton;
