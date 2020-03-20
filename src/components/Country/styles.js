import styled from "styled-components";

export const Container = styled.li`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05);
  display: flex;
  margin: 1em 0px;
  padding: 8px;
`;

export const ImageWrap = styled.div`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05);
  padding: 1.5em;
  border-radius: 50%;
`;

export const Image = styled.div`
  width: 180px;
  display: flex;
  justify-content: center;
  div {
    margin: auto;
  }
`;

export const Info = styled.div`
  h2 {
    font-size: 28px;
  }
  div {
    margin-left: 3px;
    opacity: 0.9;
    font-size: 14px;
  }
`;
