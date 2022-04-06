import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = ({ onClickSignUp, onClickSignIn }) => (
  <Wrap>
    Home
    <div>
      <Button onClick={onClickSignUp}>회원가입</Button>
      <Button onClick={onClickSignIn}>로그인</Button>
    </div>
  </Wrap>
);

Header.propTypes = {
  onClickSignUp: PropTypes.func,
  onClickSignIn: PropTypes.func,
};

export default React.memo(Header);

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
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  cursor: pointer;
`;
