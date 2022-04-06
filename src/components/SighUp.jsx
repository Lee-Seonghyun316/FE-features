import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import SubHeader from './SubHeader';
import { useNavigate } from 'react-router-dom';

const SighUp = () => {
  const [input, setInput] = useState({
    userName: '',
    emailOrPhone: '',
    password: '',
    introduction: '',
  });
  const { userName, emailOrPhone, password, introduction } = input;
  const [errorMessage, setErrorMessage] = useState({
    userNameError: '',
    emailOrPhoneError: '',
    passwordError: '',
  });
  const { userNameError, emailOrPhoneError, passwordError } = errorMessage;
  const navigate = useNavigate();
  const checkUserName = useCallback(
    (value) => {
      if (value.length > 0) {
        setErrorMessage({ ...errorMessage, userNameError: '' });
      }
    },
    [errorMessage]
  );
  const checkEmailOrPhone = useCallback(
    (value) => {
      const regEmail = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      const regPhone = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/;
      if (regEmail.test(value) || regPhone.test(value)) {
        setErrorMessage({ ...errorMessage, emailOrPhoneError: '' });
      } else {
        setErrorMessage({ ...errorMessage, emailOrPhoneError: '입력 형식 오류:(' });
      }
    },
    [errorMessage]
  );
  const checkPassword = useCallback(
    (value) => {
      const regNum = /[0-9]/g;
      const regEng = /[a-z]/gi;
      const regSpe = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;
      if (regNum.test(value) && regEng.test(value) && regSpe.test(value)) {
        if (value.length < 8) {
          setErrorMessage({ ...errorMessage, passwordError: '8자 이상:(' });
        } else {
          setErrorMessage({ ...errorMessage, passwordError: '' });
        }
      } else {
        setErrorMessage({ ...errorMessage, passwordError: '영문, 숫자, 특수문자 혼합:(' });
      }
    },
    [errorMessage]
  );
  const handleChange = (e) => {
    const { value, id } = e.target;
    const noSpaceValue = value.replace(' ', '');
    setInput({
      ...input,
      [id]: id === 'introduction' ? value : noSpaceValue,
    });
    if (id === 'userName') {
      checkUserName(value);
      return;
    }
    if (id === 'emailOrPhone') {
      checkEmailOrPhone(value);
      return;
    }
    if (id === 'password') {
      checkPassword(value);
      return;
    }
  };
  const checkValidation = () => {
    if (userNameError || emailOrPhoneError || passwordError) {
      return true;
    }
    if (userName === '' || emailOrPhone === '' || password === '') {
      return true;
    }
    return false;
  };
  const handleClickSignUp = (e) => {
    e.preventDefault();
    if (userName === '') {
      setErrorMessage({ ...errorMessage, userNameError: '필수요소:(' });
      return;
    }
    if (emailOrPhone === '') {
      setErrorMessage({ ...errorMessage, emailOrPhoneError: '필수요소:(' });
      return;
    }
    if (password === '') {
      setErrorMessage({ ...errorMessage, passwordError: '필수요소:(' });
      return;
    }
    console.log('회원가입완료:)');
  };
  const navigateHome = useCallback(() => navigate('/'), [navigate]);
  return (
    <Wrap>
      <SubHeader text="회원가입" onClick={navigateHome} />
      <Form action="submit">
        <div>
          <Title>회원명</Title>
          <Label htmlFor="userName" error={userNameError}>
            {userNameError ? userNameError : '20자 이내'}
            <Input type="text" id="userName" value={userName} onChange={handleChange} maxLength={20} />
          </Label>
        </div>
        <div>
          <Title>이메일 주소 또는 폰번호</Title>
          <Label htmlFor="emailOrPhone" error={emailOrPhoneError}>
            {emailOrPhoneError ? emailOrPhoneError : '이메일 주소와 폰 번호(숫자만) 중 택 1'}
            <Input type="text" id="emailOrPhone" value={emailOrPhone} onChange={handleChange} />
          </Label>
        </div>
        <div>
          <Title>비밀번호</Title>
          <Label htmlFor="password" error={passwordError}>
            {passwordError ? passwordError : '8자 이상, 영소문자/대문자, 숫자, 특수문자 조합'}
            <Input type="password" id="password" value={password} onChange={handleChange} minLength={8} />
          </Label>
        </div>
        <div>
          <Title>자기소개(선택)</Title>
          <Label htmlFor="introduction">
            512자 이내
            <Textarea
              name="introduction"
              id="introduction"
              cols="30"
              rows="3"
              maxLength={512}
              value={introduction}
              onChange={handleChange}
            />
          </Label>
        </div>
        <Button onClick={handleClickSignUp} disable={checkValidation()}>
          회원가입
        </Button>
      </Form>
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

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 0.5rem;
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

const Textarea = styled.textarea`
  ${inputStyle}
  :focus {
    outline-style: none;
  }
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
