import React, { useState, SetStateAction } from 'react';
import { Login } from '../../Type';
import styled from 'styled-components';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';

type Props = {
  login: Login;
  setLogin: React.Dispatch<SetStateAction<Login>>;
};

interface userList {
  id: string;
  pass: string;
}

const Form = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 24rem;
  padding-top: 7rem;
  input {
    border: 1px solid #d6cccc;
    border-radius: 3px;
    height: 1.5rem;
    width: 14rem;
  }
  span {
    font-size: 1.5rem;
    margin-bottom: -2rem;
  }
`;

const ErrorMessage = styled.div<{ faild: boolean }>`
  display: ${({ faild }) => (faild ? 'block' : 'none')};
  font-size: 2rem;
  padding-bottom: 1rem;
  color: #ff002e7d;
`;

const Btn = styled.button`
  text-decoration: none;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #0099ff;
  line-height: 2em;
  transition: 0.3s;
  box-shadow: 4px 4px 3px #66666659;
  border: 2px solid #0099ff47;
  width: 14.5rem;
  &:hover {
    color: #fff;
    background: #0099ff;
  }
`;

const LoginInput: React.FC<Props> = ({ login, setLogin }) => {
  const [inputId, setInputId] = useState('');
  const [inputPass, setInputPass] = useState('');

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPass(e.target.value);
  };

  const loginProcess = () => {
    const url = 'https://jsondata.okiba.me/v1/json/Tc7BL200729151057';

    axios.get(url).then((res) => {
      const info: userList[] = res.data.users;
      const loginFlg =
        info.filter((i) => {
          return i.id == inputId && i.pass == inputPass;
        }).length != 0;
      const faildFlg = loginFlg ? false : true;
      console.log(faildFlg);

      const flg: Login = {
        loginFlg: loginFlg,
        failedFlg: faildFlg,
      };
      setLogin(flg);
    });

    if (login.loginFlg) {
      Router.push({
        pathname: '/',
      });
    }
  };

  return (
    <Form>
      <ErrorMessage faild={login.failedFlg}>ログインできません</ErrorMessage>
      <span>ID</span>
      <input type="text" placeholder="id" value={inputId} onChange={handleIdChange} />
      <span>Password</span>
      <input type="password" placeholder="pass" value={inputPass} onChange={handlePassChange} />
      <Btn onClick={loginProcess}>Login</Btn>
    </Form>
  );
};

export default LoginInput;
