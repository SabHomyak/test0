import styled from 'styled-components';

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #029742;
  color: white;
`;

export const ModalBody = styled.div`
  padding: 30px;
`;

export const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: #029742;
  color: white;
`;

export const OrderPrice = styled.h2`
  text-align: right;
`;

export const Close = styled.span`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
