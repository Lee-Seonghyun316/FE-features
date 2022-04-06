import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Message from './Message';

const SighUp = () => {
  const [input, setInput] = useState({
    userName: '',
    emailOrPhone: '',
    password: '',
    introduction: '',
  });
  const [message, setMessage] = useState('테스트');
  const { userName, emailOrPhone, password, introduction } = input;
  const handleChange = (e) => {
    const { value, id } = e.target;
    setInput({
      ...input,
      [id]: value,
    });
  };
  const handleClickSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <Wrap>
      <Form action="submit">
        <ProductName>회원가입</ProductName>
        <Section>
          <Title>회원명</Title>
          <Label htmlFor="userName">
            20자 이내
            <Input type="text" id="userName" value={userName} onChange={handleChange} />
          </Label>
        </Section>
        <Section>
          <Title>이메일 주소 또는 폰번호</Title>
          <Label htmlFor="emailOrPhone">
            이메일 주소와 폰 번호 중 택 1
            <Input type="text" id="emailOrPhone" value={emailOrPhone} onChange={handleChange} maxLength={20} />
          </Label>
        </Section>
        <Section>
          <Title>비밀번호</Title>
          <Label htmlFor="password">
            8자 이상, 영소문자/대문자, 숫자, 특수문자 조합
            <Input type="password" id="password" value={password} onChange={handleChange} minLength={8} />
          </Label>
        </Section>
        <Section>
          <Title>자기소개</Title>
          <Label htmlFor="introduction">
            512자 이내
            <Textarea name="introduction" id="introduction" cols="30" rows="3" maxLength={512} />
          </Label>
        </Section>
        <RegisterButton onClick={handleClickSignUp}>회원가입</RegisterButton>
      </Form>
      {message && <Message text={message} />}
    </Wrap>
  );
};

export default SighUp;
const Wrap = styled.div`
  margin: auto;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Section = styled.div``;

const ProductName = styled.h1`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.grey};
`;

const inputStyle = css`
  border: 1px solid ${({ theme }) => theme.color.grey};
  margin: 1rem 0;
`;

const Input = styled.input`
  ${inputStyle}
`;

const Textarea = styled.textarea`
  ${inputStyle}
  :focus {
    outline-style: none;
  }
`;

const RegisterButton = styled.button`
  background-color: rebeccapurple;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xSmall};
`;
