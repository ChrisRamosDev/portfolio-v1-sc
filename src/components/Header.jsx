import styled from "styled-components";
import Wrapper from "./Wrapper";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.bg.secondary};
  color: #fff;
  border-bottom: 1px solid #111;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <h1>Logo</h1>
        <h2>Link</h2>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
