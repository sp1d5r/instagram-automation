import styled from "styled-components";
import {isMobile} from 'react-device-detect';
export const PageWrap = styled.div` 
margin-left: ${isMobile ? 0 : 20}%;
margin-top: 56px;  
width: ${isMobile ? 100 : 80}%;
`;
