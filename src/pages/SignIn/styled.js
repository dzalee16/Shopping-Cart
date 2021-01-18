import styled from "styled-components";

export const Content = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5rem;

  h1 {
      padding: 20px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  border: 1px solid white;
  border-radius: 10px;
  background: rgba(0,0,0,0.4);

  label {
    padding: 10px;
    font-weight: 600;
    width: 90%;
    align-self: center;
  }

  input {
    padding: 10px;
    width: 90%;
    align-self: center;
    background: rgba(0,0,0,0.99);
    border: 1px solid black;
    border-radius: 10px;
    outline: none;
    color: white;
  }

  button {
      padding: 10px;
      width: 90%;
      align-self: center;
      margin-top: 2rem;
      background: rgba(0,0,0,0.8);
      border: 1px solid black;
      color: white;
      cursor: pointer;
      font-weight: 600;
      border-radius: 10px;

      &:hover {
        border: 1px solid white; 
      }
  }
`