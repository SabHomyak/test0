import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  &:after {
    content: '@@@';
    display: block;
    line-height: 13px;
    text-indent: -99999px;
  }
`;