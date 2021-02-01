import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background: rgba(0, 0, 0, 0.8);

  tbody {
    display: block;
    width: 100%;
    overflow-y: scroll;
    height: 450px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.8);
      border-radius: 10px;
      box-shadow: inset 0 0 5px grey;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
    }
  }
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;

  th {
    width: 20%;
    margin-bottom: 10px;
    border-bottom: 0.5px solid white;
  }
`;

export const TableData = styled.td`
  width: 20%;
  height: 125px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1px 0;
`;

export const TableDataModel = styled.td`
  width: 20%;
  height: 125px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1px 0;

  span {
    font-weight: bold;

    @media (max-width: 700px) {
      font-size: 11px;
      font-weight: bold;
    }
  }
`;

export const Img = styled.img`
  width: 100px;

  @media (max-width: 700px) {
    width: 60px;
    height: 80%;
  }
`;

export const Info = styled.div`
  width: 300px;
  margin: 60px auto;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid white;

  p {
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  button {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    border: 1px solid white;
    border-radius: 10px;
    outline: none;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const TrashImg = styled.img`
  width: 25px;
  height: 30px;
  filter: invert(99%);
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
