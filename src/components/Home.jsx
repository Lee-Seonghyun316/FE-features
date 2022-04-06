import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CreateFragmentData } from '../data/mockData';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import Item from './Item';

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
  const navigateSignUp = useCallback(() => navigate('/sign-up'), [navigate]);
  const navigateSignIn = useCallback(() => navigate('/sign-in'), [navigate]);
  useEffect(() => {
    const newData = CreateFragmentData(page);
    newData && setData((data) => [...data, ...newData]);
  }, [page]);
  return (
    <div>
      <Header onClickSignUp={navigateSignUp} onClickSignIn={navigateSignIn} />
      <Items>
        {data.map((item) => (
          <Item data={item} key={item.id} />
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
