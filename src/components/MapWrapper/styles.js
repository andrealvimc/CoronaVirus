import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05);
  display: flex;
  min-height: 400px;
  height: fit-content;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const MapWrap = styled.div`
  width: 650px;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;
