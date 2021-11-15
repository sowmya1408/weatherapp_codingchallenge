import React from "react";
import "./LocationButton.css";

interface LocationButtonProps {
  text: string;
  temperature: string;
  handleClick: () => void;
}

const LocationButton = ({
  text,
  temperature,
  handleClick,
}: LocationButtonProps) => {
  return (
    <button className="btn" type="button" onClick={handleClick}>
      {text}
      <span>{`${temperature}°C`}</span>
    </button>
  );
};

export default LocationButton;
