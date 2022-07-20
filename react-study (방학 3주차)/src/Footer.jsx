import {
    FooterDiv,
    FooterBig,
    FooterSmall,
  } from './styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <FooterDiv>
        <FontAwesomeIcon icon={faReact}/>
        <FooterBig>for react study</FooterBig>
        <FooterSmall>2022. by seungbin</FooterSmall>
    </FooterDiv>
  )
}

export default Footer