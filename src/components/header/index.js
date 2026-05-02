import "./estilo.css";
import Logo from "../logo";
import OpcaoesHeader from "../opcoesHeader";
import IconesHeader from "../opcoesHeader";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <OpcaoesHeader />
      <IconesHeader />
    </header>
  );
}
export default Header;
