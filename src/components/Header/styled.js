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

export const Lipublic = styled.li`
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

export const Liprotected = styled.li`
  padding: 10px;
  font-weight: 600;
`

export const Username = styled.span`
  padding: 10px;
  border:1px solid white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
`

export const SignOut = styled.span`
  padding: 10px;
  border:1px solid white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  cursor:pointer;
`