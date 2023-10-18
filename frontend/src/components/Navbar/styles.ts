import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  max-width: 1200px;
  width: full;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.breakpoint("2xl")} {
    padding: ${theme.space(4)};
  }

  ${theme.breakpoint("xs")} {
    padding: ${theme.space(4)};
    margin-top: ${theme.space(7)};
  }
`;

export const Logo = styled.img`
  width: ${theme.space(20)};
  height: ${theme.space(7)};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.space(4)};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;

  color: ${theme.color("primary")};
  font-size: ${theme.space(4)};

  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${theme.color("deepPink")};
  }
`;
