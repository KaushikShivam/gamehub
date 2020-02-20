import React from 'react';
import { withRouter } from 'react-router-dom';

import redIcon from './../../assets/playRed.png';
import blueIcon from './../../assets/playBlue.png';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  MenuContainer,
  RoleContainer,
  RoleItem,
  ContentContainer,
  TitleContainer,
  ContentTitle,
  ContentSubtitle,
  PlayLogo
} from './MenuItem.styles';

const roles = ['Top Rated', 'Popular'];

const MenuItem = ({
  title,
  imageUrl,
  size,
  description,
  history,
  linkUrl,
  match
}) => (
  <MenuItemContainer
    size={size}
    imageUrl={imageUrl}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <MenuContainer>
      {size && (
        <RoleContainer>
          {roles.map(role => (
            <RoleItem key={role}>{role}</RoleItem>
          ))}
        </RoleContainer>
      )}
      <ContentContainer size={size}>
        <TitleContainer>
          <ContentTitle size={size}>{title.toUpperCase()}</ContentTitle>
          <ContentSubtitle>{description}</ContentSubtitle>
        </TitleContainer>
        <PlayLogo size={size}>
          <img src={size ? redIcon : blueIcon} alt="Play icon" />
        </PlayLogo>
      </ContentContainer>
    </MenuContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
