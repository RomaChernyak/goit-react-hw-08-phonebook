import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Box = styled.div`
  padding: 30px 40px;
  width: 440px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(11, 127, 171, 0.5) 0px 0px 25px 5px;

  margin: 30px auto;
  // margin: 40px;
  // max-width: fit-content;
`;

export const ModalField = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;