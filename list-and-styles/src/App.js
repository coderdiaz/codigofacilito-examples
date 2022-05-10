import './global.css';
import Input from './components/Input';
import { Container } from './components/Container';
import { HeadingH2 } from './components/Heading';
import styled, { css } from 'styled-components';
import Comment from './components/Comment';
import { comments } from './data';

const GlobalStyles = css`
  margin-top: 32px;
`

function App() {
  return (
    <div className="App" css={GlobalStyles}>
      <Container>
        <HeadingH2>Comments</HeadingH2>
        <Input />
        <CommentsBody>
          { comments.map(
              comment => <Comment {...comment} />
            ) }
        </CommentsBody>
      </Container>
    </div>
  );
}

export default App;

const CommentsBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`