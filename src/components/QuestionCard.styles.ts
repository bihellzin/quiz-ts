import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #f6f6f6;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  p {
    font-size: 1.2rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? '#59BC86'
        : !correct && userClicked
        ? '#FF5656'
        : '#2C365E'};
    border-radius: 10px;
    border: none;
    color: #fff;
  }
`;