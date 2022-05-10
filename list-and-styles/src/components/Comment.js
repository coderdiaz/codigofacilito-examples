import styled from 'styled-components';
import { HeadingH4 } from './Heading';

const Comment = (props) => {
  return (
    <StyledCommentWrapper flagged={props.flagged}>
      <HeadingH4>{props.name}</HeadingH4>
      <CommentBody>{props.body}</CommentBody>
      <span style={{ color: '#c3c3c3' }}>Replies</span>
    </StyledCommentWrapper>
  )
}

export default Comment;

const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.flagged ? '#fffaed' : 'white' };
  gap: 4px;
  &:hover {
    background-color: #cccccc;
  }
`

const CommentBody = styled.p`
  line-height: 24px;
  color: #626262;
`
