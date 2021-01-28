import styled from "styled-components";
import HeroImg from "../../assets/512_Logo.png";

const StyledBody = styled.main`
  background: ${(props) => props.theme.bg.primary};
  color: #fff;
  height: 91.5vh;
  padding-top: 80px;
`;

const StyledHero = styled.div`
  margin: 100px auto;
  padding: 45px 20px;
  max-width: 450px;
  background-color: ${(props) => props.theme.bg.secondary};
  border-radius: 5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6), 2px 4px 8px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

const StyledHeroImg = styled.img`
  max-height: 150px;
`;

const Body = () => {
  return (
    <StyledBody>
      <StyledHero>
        <StyledHeroImg src={HeroImg} />
        <h1>
          Hi, I'm <span>Chris&nbsp;</span>
          <span>Ramos</span>
        </h1>
        <p>Front-end Web developer based in Orlando, FL</p>
      </StyledHero>
    </StyledBody>
  );
};

export default Body;
