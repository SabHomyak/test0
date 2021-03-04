import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius:5px;
  border:.5px solid ${({theme}) => theme.colors.darkblack};
  overflow:hidden;
`;

export const CardImgWrapper = styled.div`
  height:300px;
  position: relative;
  border-bottom:.5px solid ${({theme}) => theme.colors.darkblack};
  border-top:.5px solid ${({theme}) => theme.colors.darkblack};
`;

export const CardHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.silver};
  display:flex;
  justify-content:center;
  padding:3% 0;
`

export const CardHeaderTitle = styled.h5`
  font-weight: bold;
  line-height: 1.28;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.silver};
  padding: 10px 10px;

  a {
    text-decoration: none;
  }
`;

export const Price = styled.div`
  color:white;
  font-size:19px;
`

export const ViewButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.darkblack};
  color: #fff;
  outline: none;
  transition: background-color 0.2s linear;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkblack};
  }
`;