import { Link } from "react-router-dom";
import logo from "../../assets/logo_original.png";
import { Container, Logo, Nav, NavLink } from "./styles";

export function Header() {
  return (
    <Container>
      <Link to={"/"}>
        <Logo src={logo} alt="Foto do usuário" />
      </Link>

      <Nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/surgical-orders"}>Pedidos</NavLink>
      </Nav>
    </Container>
  );
}
