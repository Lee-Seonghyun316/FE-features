import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faVenusMars, faWifi } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = ({ data }) => (
  <Wrap key={data.id}>
    <Contents>
      <Content>
        <FontAwesomeIcon icon={faUser} />
        {data.nickname}
      </Content>
      <Content>
        <FontAwesomeIcon icon={faEnvelope} />
        {data.email}
      </Content>
      <Content>
        <FontAwesomeIcon icon={faVenusMars} />
        {data.gender}
      </Content>
      <Content>
        <FontAwesomeIcon icon={faWifi} />
        {data.ip_address}
      </Content>
    </Contents>
  </Wrap>
);

Item.propTypes = {
  data: PropTypes.object,
};

Item.defaultProps = {
  data: {},
};

export default React.memo(Item);
const Wrap = styled.li`
  width: 35vw;
  min-height: 20vw;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.white};
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
`;
