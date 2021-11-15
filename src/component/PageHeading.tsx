import React from "react";
import "./PageHeading.css";

interface PageHeadingProps {
  headingText: string;
}

const PageHeading = ({ headingText }: PageHeadingProps) => {
  return (
    <header data-testid="heading-1">
      <h1 className="heading">{headingText}</h1>
    </header>
  );
};

export default PageHeading;
