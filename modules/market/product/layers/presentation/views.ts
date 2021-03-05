import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 50px 0;
`;

export const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.dimensions.pageMaxWidth}px;
  margin: 0 auto;
`;

export const ProductImgContainer = styled.div`
  flex: 1;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  button {
    margin: 20px auto;
    display: block;
  }
`;

export const ProductDetailsContainer = styled.div`
  flex: 1;
  padding-left: 75px;
`;

export const ProductName = styled.h2`
  text-align: center;
`;

export const ProductInfoContainer = styled.div`
  font-size: 20px;
`;
