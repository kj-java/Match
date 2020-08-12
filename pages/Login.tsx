import styled from 'styled-components';
import LoginInput from '../src/components/molecules/Form';
import Title from 'components/atoms/Title';

const Layout = styled.div`
  color: #0099ff;
  .title {
    display: flex;
    justify-content: center;
    font-size: 6rem;
  }
`;

const LoginForm: React.FC = () => {
  return (
    <Layout>
      <main>
        <Title size={'6rem'} />
        <LoginInput />
      </main>
    </Layout>
  );
};

function LoginPage() {
  return <LoginForm />;
}

export default LoginPage;
