import styled from "styled-components";

export const Container = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // gap: 2rem;
  // height: calc(100vh - 100px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 765px) {
   margin-top:5rem;
  }

  // width: 1120px;
  // height: 100%;
  // display: flex;
  // align-items: center;
  // flex-direction: column;
  // gap: 50px;

  // padding: 20px;

  // @media (max-width: 600px) {
  //   padding: 10px;
  // }
`;
