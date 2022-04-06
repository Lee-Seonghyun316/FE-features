import React, { useState } from 'react';
import SubHeader from './SubHeader';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: '',
    password: '',
  });
  const { email, password } = input;
  const handleChange = (e) => {
    const { value, id } = e.target;
    const noSpaceValue = value.replace(' ', '');
    setInput({
      ...input,
      [id]: noSpaceValue,
    });
  };
  const receiveOptionResponse = (request) => {
    if (request) {
      const response = {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Methods': ['POST', 'GET', 'OPTIONS'],
        'Access-Control-Allow-Headers': ['Content-Type', 'Accept', 'Content-Length', 'Host'],
      };
      return response;
    }
  };
  const signIn = (data) => {
    if (data) {
      const optionRequest = {
        'Access-Control-Request-Method': 'POST',
        'Access-Control-Request-Headers': ['Content-Type', 'Accept', 'Content-Length', 'Host'],
      };
      const optionResponse = receiveOptionResponse(optionRequest);
      if (optionResponse) {
        fetch('http://localhost:3000/api/authentication.json', { method: 'GET' }) //실제요청 : POST
          .then((res) => res.json())
          .then((data) => {
            if (data.result) {
              localStorage.setItem('token', data.result.token);
            }
            console.log(data.result);
          });
      }
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Content-Length': '87',
        Host: 'localhost:8080',
      },
      body: JSON.stringify({
        userType: 'U',
        emailAddr: 'kate@afoter.com',
        passCode: 'test123456!',
      }),
    };
    signIn(data);
  };
  return (
    <div>
      <SubHeader text="로그인" onClick={() => navigate('/')} />
      <Form action="submit">
        <Label htmlFor="email">
          이메일주소 :
          <Input type="text" id="email" value={email} onChange={handleChange} />
        </Label>
        <Label htmlFor="password">
          비밀번호 :
          <Input type="password" id="password" value={password} onChange={handleChange} />
        </Label>
        <Button onClick={handleClick}>로그인</Button>
      </Form>
    </div>
  );
};

export default SignIn;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme, error }) => (error ? 'red' : theme.color.grey)};
`;

const inputStyle = css`
  border: 1px solid ${({ theme }) => theme.color.grey};
  margin: 1rem 0;
  padding: 0.5rem;
`;

const Input = styled.input`
  ${inputStyle}
`;

const Button = styled.button`
  background-color: ${({ disable, theme }) => (disable ? theme.color.grey : theme.color.purple)};
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  margin-top: 2rem;
`;
