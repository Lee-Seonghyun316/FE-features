import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Message = ({ text }) => {
  return (
    <Wrap>
      <FontAwesomeIcon icon={faUser} /> {text}
    </Wrap>
  );
};

Message.propTypes = {
  text: PropTypes.string,
};

Message.defaultProps = {
  text: PropTypes.string,
};

export default React.memo(Message);

const Wrap = styled.div`
  position: absolute;
  top: 2rem;
  right: 0rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.color.purple};
  color: ${({ theme }) => theme.color.white};
  opacity: 0;
  animation: slide 1.5s linear;
  @keyframes slide {
    0% {
      opacity: 0;
    }
    30%,
    60% {
      opacity: 1;
      transform: translateX(-2rem);
    }
    100% {
      opacity: 0;
    }
  }
`;
