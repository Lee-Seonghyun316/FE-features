import React from 'react';
import styled from 'styled-components';

const Header = ({ onClick }) => (
  <Wrap>
    Home<Button onClick={onClick}>회원가입</Button>
  </Wrap>
);

export default Header;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10vw;
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: 600;
  background-color: grey;
  color: white;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  cursor: pointer;
`;
