import React from 'react';
import styled from 'styled-components';

interface Props {
  size: String;
}

const Layout = styled.div.attrs((props) => ({
  size: props.size || '1em',
}))`
  color: #0099ff;
  .title {
    display: flex;
    justify-content: center;
    font-size: ${(props) => props.size};
  }
`;

const Title: React.FC<Props> = (props) => {
  return (
    <Layout size={props.size}>
      <span className="title">Match</span>
    </Layout>
  );
};

export default Title;
