import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  text-align: center;
  margin: 0px auto ${props => props.theme.space[4]}px auto;
  padding-right: 0;
  padding-left: 0;
  max-width: ${props => props.theme.space[11]}px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0px auto ${props => props.theme.space[3]}px auto;
  padding: ${props => props.theme.space[4]}px;

  background-color: ${props => props.theme.colors.backgroundMain};
  box-shadow: 2px 2px 10px 0px rgba(0, 168, 164, 0.3);
  list-style: none;
  border: ${props => props.theme.space[2]}px solid
    ${props => props.theme.colors.borderLigth};
  border-radius: ${props => props.theme.space[2]}px;
`;

export const Status = styled.span`
  margin: auto ${props => props.theme.space[4]}px auto 0px;
  width: ${props => props.theme.space[4]}px;
  height: ${props => props.theme.space[4]}px;
  background-color: ${props => (props.online ? '#6af09a' : '#ef5f3b')};
  border-radius: 50%;
`;

export const FriendsImage = styled.img`
  margin-bottom: 0;
  margin-right: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[3]}px;
  width: ${props => props.theme.space[8]}px;
  background-color: ${props => props.theme.colors.whiteText};
  border: 2px solid ${props => props.theme.colors.borderDark};
  border-radius: ${props => props.theme.space[2]}px;
`;

export const FriendsName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.colors.blackText};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.m};
`;
