import React from "react";
import { ErrorContainer, ErrorBox, ErrorDesc } from "./ErrorElements";
const Error = () => {
  return (
    <ErrorContainer>
      <ErrorBox>
        <ErrorDesc>Page Not found!</ErrorDesc>
      </ErrorBox>
    </ErrorContainer>
  );
};

export default Error;
