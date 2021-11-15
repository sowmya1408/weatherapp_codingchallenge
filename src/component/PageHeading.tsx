import React from "react";

interface PageHeadingProps {
  headingText: string;
}

const PageHeading = ({ headingText }: PageHeadingProps) => {
  return <header>{headingText}</header>;
};

export default PageHeading;
