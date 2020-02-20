import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 950px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    position: static;
    transform: translate(0, 0);

    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
