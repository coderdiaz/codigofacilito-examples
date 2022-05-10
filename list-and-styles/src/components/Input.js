import styled from 'styled-components';
import { Button } from './Button';

const Input = () => {
  return (
    <StyledInputWrapper>
      <StyledInput placeholder="Insert your comment" />
      <StyledSeparator />
      <Button>Save comment</Button>
    </StyledInputWrapper>
  );
}

export default Input;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #467ebf;
  border-radius: 6px;
  padding: 16px;
  min-height: 20px;
`

const StyledInput = styled.input`
  border: 0;
  outline: none;
`

const StyledSeparator = styled.hr`
  border: 1px solid #d7d7d7;
`