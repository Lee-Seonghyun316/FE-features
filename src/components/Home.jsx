import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CreateFragmentData } from '../data/mockData';
import { faEnvelope, faUser, faVenusMars, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import { useNavigate } from 'react-router';

const Home = () => {
  const [target, setTarget] = useState(null);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  }, [target]);

  const _onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      setPage((page) => page + 1);
    }
  };
  useEffect(() => {
    const newData = CreateFragmentData(page);
    newData && setData((data) => [...data, ...newData]);
  }, [page]);
  return (
    <div>
      <Header onClick={() => navigate('/sign-up')} />
      <Items>
        {data.map((item) => (
          <Item key={item.id}>
            <Contents>
              <Content>
                <FontAwesomeIcon icon={faUser} />
                {item.nickname}
              </Content>
              <Content>
                <FontAwesomeIcon icon={faEnvelope} />
                {item.email}
              </Content>
              <Content>
                <FontAwesomeIcon icon={faVenusMars} />
                {item.gender}
              </Content>
              <Content>
                <FontAwesomeIcon icon={faWifi} />
                {item.ip_address}
              </Content>
            </Contents>
          </Item>
        ))}
      </Items>
      {CreateFragmentData(page) && <div ref={setTarget}>loading...</div>}
    </div>
  );
};

export default Home;

const Items = styled.ul`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  gap: 5vw;
  justify-content: center;
  padding: 5vw 0;
  background-color: ${({ theme }) => theme.color.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xSmall};
`;
const Item = styled.li`
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
