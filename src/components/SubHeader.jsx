import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const SubHeader = ({ text, onClick }) => (
  <Wrap>
    <Button onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} />
    </Button>
    {text}
  </Wrap>
);

SubHeader.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

SubHeader.defaultProps = {
  text: '',
};

export default React.memo(SubHeader);

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-size: ${({ theme }) => theme.fontSize.middle};
  font-weight: 600;
  background-color: grey;
  color: white;
`;
const Button = styled.button`
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.big};
  cursor: pointer;
`;
