import * as React from 'react';
// libs
import styled from 'styled-components';

interface Props {
  text: string;
  callback:()=>void;
}

const Button: React.FC<Props> = ({ text,callback }) => (
  <ButtonWrapper onClick={() => {
    callback()
  }}>{text}</ButtonWrapper>
);


const ButtonWrapper = styled.button`
    padding: 5px 10px;

    a {
      text - decoration: none;
      transition: opacity 0.3s ease-in-out;

      color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
    }
    `;
export { Button };
