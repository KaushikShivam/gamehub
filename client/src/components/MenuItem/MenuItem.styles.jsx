import styled from 'styled-components';

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '380px' : '300px')};
  width: ${({ size }) => (size ? '40%' : '20%')};
  overflow: hidden;
  flex: 1 1 auto;
  display: flex;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  cursor: pointer;
  background-size: cover;
  background-position: center;

  /* @media screen and (max-width: 800px) {
    height: 200px;
  } */
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-self: flex-end;
  padding: 2rem;
  width: 100%;
`;

export const RoleContainer = styled.div`
  display: flex;
`;

export const RoleItem = styled.div`
  padding: 10px;
  border-radius: 500px;
  background-color: #6b4dc4;
  font-size: 16px;
  margin-right: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  flex-direction: ${({ size }) => (size ? 'row' : 'column-reverse')};
  justify-content: ${({ size }) => (size ? 'space-between' : 'flex-start')};
`;

export const TitleContainer = styled.div``;

export const ContentTitle = styled.div`
  font-weight: bold;
  font-size: ${({ size }) => (size ? '48px' : '30px')};
`;

export const ContentSubtitle = styled.div`
  font-size: 14px;
`;

export const PlayLogo = styled.div`
  width: 4rem;
  height: 4rem;
  margin-bottom: ${({ size }) => (size ? '' : '90px')};
  align-self: flex-end;
  img {
    width: 100%;
    height: 100%;
  }
`;

// export const ContentContainer = styled.div`
//   height: 90px;
//   padding: 0 25px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid black;
//   background-color: white;
//   opacity: 0.7;
//   position: absolute;
// `;

// export const ContentTitle = styled.span`
//   font-weight: bold;
//   margin-bottom: 6px;
//   font-size: 22px;
//   color: #4a4a4a;
// `;

// export const ContentSubtitle = styled.span`
//   font-weight: lighter;
//   font-size: 16px;
// `;
