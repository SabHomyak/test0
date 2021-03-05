import * as React from 'react';
// libs
import styled from 'styled-components';

interface Props {
  text: string;
  callback: () => void;
}

const Button: React.FC<Props> = ({ text, callback }) => (
  <ButtonWrapper
    onClick={() => {
      callback();
    }}
  >
    {text}
  </ButtonWrapper>
);

const ButtonWrapper = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
`;
export { Button };
