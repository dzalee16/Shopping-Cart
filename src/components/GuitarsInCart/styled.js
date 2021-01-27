import styled from "styled-components";

export const Container = styled.div`
  height: auto;
`;

export const Table = styled.table`
  width: 80%;
  margin: auto;
  background: rgba(0, 0, 0, 0.7);

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;

  th {
    width: 20%;
    // border-bottom: 1px solid white;
    margin-bottom: 10px;
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
