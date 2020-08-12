import React, { useState, SetStateAction } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import axios from 'axios';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { Login } from '../../../Type';
import { type } from 'os';

interface userList {
  id: string;
  pass: string;
}

type openFlg = boolean;

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
  .headline {
    font-size: 2rem;
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginInput = () => {
  const [inputId, setInputId] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [openFlg, setOpenFlg] = useState(false);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value);
  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPass(e.target.value);
  };

  const handleClick = () => {
    const url = 'https://jsondata.okiba.me/v1/json/Tc7BL200729151057';

    axios.get(url).then((res) => {
      const info: userList[] = res.data.users;
      if (
        info.filter((i) => {
          return i.id == inputId && i.pass == inputPass;
        }).length == 0
      ) {
        setOpenFlg(true);
      } else {
        if (!openFlg) {
          Router.push({
            pathname: '/MatchApp',
          });
        }
      }
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenFlg(false);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form>
        <span className="headline">ID</span>
        <input type="text" placeholder="id" value={inputId} onChange={handleIdChange} />
        <span className="headline">Password</span>
        <input type="password" placeholder="pass" value={inputPass} onChange={handlePassChange} />
        <Btn onClick={handleClick}>Login</Btn>
        <Snackbar open={openFlg} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity="error" onClose={handleClose}>
            ログインできません
          </Alert>
        </Snackbar>
      </Form>
    </div>
  );
};

export default LoginInput;
