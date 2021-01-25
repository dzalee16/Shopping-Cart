import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

export const GuitarLogo = styled.img`
  width: 4.5rem;
  cursor: pointer;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  list-style-type: none;
`;

export const Lipublic = styled.li`
  border: 1px solid white;
  border-radius: 10px;
  margin: 0 5px;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid white;
  }

  a {
    display: block;
    padding: 12px;
    color: white;
    text-decoration: none;
    font-weight: 600;
  }
`;

//dropdown
export const Container = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
`;

export const UlDropdown = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Liprotected = styled.li`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  width: 150px;
  border-bottom: 1px solid white;

  &:nth-child(1) {
    cursor: default;
  }

  &:nth-child(1):hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Username = styled.button`
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  outline: none;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 2;
`;
