import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`

export const GuitarLogo = styled.img`
  width: 4.5rem;
  cursor: pointer;
`

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
`

export const Li = styled.li`
  &:hover {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid white;
  }

  a {
      display: block;
      padding: 15px;
      color:white;
      text-decoration: none;
      font-weight: 600;
  }
`

export const SignOutButton = styled.button`
  padding: 15px;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
` 