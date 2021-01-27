import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #111;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Footer = () => (
  <StyledFooter>
    <p>&#169;2021 Christopher Ramos &nbsp;|&nbsp; Portfolio_V1</p>
  </StyledFooter>
);

export default Footer;
