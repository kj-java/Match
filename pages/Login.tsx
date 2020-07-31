import { Login } from '../Type';
import { FC, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import LoginInput from '../src/components/Form';

const Layout = styled.div`
  color: #0099ff;
  .title {
    display: flex;
    justify-content: center;
    font-size: 6rem;
  }
`;

const initialState: Login = {
  loginFlg: false,
  failedFlg: false,
};

const LoginForm: React.FC = () => {
  const [login, setLogin] = useState(initialState);
  return (
    <Layout>
      <main>
        <div>
          <span className="title">Match</span>
        </div>
        <LoginInput login={login} setLogin={setLogin}></LoginInput>
      </main>
    </Layout>
  );
};

function LoginPage() {
  return <LoginForm />;
}

export default LoginPage;
