import React from "react";

interface LocationButtonProps {
  text: string;
  temperature: number;
  handleClick: () => void;
}

const LocationButton = ({
  text,
  temperature,
  handleClick,
}: LocationButtonProps) => {
  return (
    <button onClick={handleClick}>
      {text}
      {`${temperature}°C`}
    </button>
  );
};

export default LocationButton;
