import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  text-align: center;
  margin: 0px auto 20px auto;
  padding-right: 0;
  padding-left: 0;
  max-width: 330px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0px auto 20px auto;
  padding: 20px;

  background-color: ${props => props.theme.colors.backgroundMain};
  box-shadow: 2px 2px 10px 0px rgba(0, 168, 164, 0.3);
  list-style: none;
  border: 4px solid ${props => props.theme.colors.borderLigth};
  border-radius: 4px;
`;

export const Status = styled.span`
  margin: auto 20px auto 0px;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.online ? '#6af09a' : '#ef5f3b')};
  border-radius: 50%;
`;

export const FriendsImage = styled.img`
  margin-bottom: 0;
  margin-right: 20px;
  padding: 8px;
  width: 70px;
  background-color: ${props => props.theme.colors.whiteText};
  border: 2px solid ${props => props.theme.colors.borderDark};
  border-radius: 4px;
`;

export const FriendsName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: ${props => props.theme.colors.blackText};
  font-weight: 600;
  font-size: 18px;
`;
