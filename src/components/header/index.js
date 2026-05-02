import Logo from "../logo";
import OpcaoesHeader from "../opcoesHeader";
import IconesHeader from "../opcoesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcaoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}
export default Header;
