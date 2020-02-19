import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 23.5vw;
  display: flex;
  flex-direction: column;
  height: 380px;
  background-image: ${({ imageUrl }) =>
    `linear-gradient(rgba(255,255,255, 0.1), rgba(0,0,0, 0.6), rgba(0,0,0, 1)), url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  align-self: flex-end;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (max-width: 800px) {
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const PriceContainer = styled.span`
  font-size: 15px;
  margin-bottom: 15px;
`;

export const DetailContainer = styled.div`
  font-size: 14px;
  font-weight: light;
  color: rgba(255, 255, 255, 0.8);
`;
