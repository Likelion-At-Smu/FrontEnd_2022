import React from "react";
import { FooterDiv, FooterBig, FooterSmall } from "./styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterDiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>for react study</FooterBig>
      <FooterSmall>by. In sik choo</FooterSmall>
    </FooterDiv>
  );
}

export default React.memo(Footer);