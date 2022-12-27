import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  margin: 0px auto 20px auto;
  padding-top: 40px;
  width: 330px;
  height: 435px;
  background-color: ${props => props.theme.colors.backgroundMain};
  box-shadow: 2px 2px 10px 0px rgb(0 168 164 / 30%);
  border: 4px solid ${props => props.theme.colors.borderLigth};
  border-radius: 4px;
`;

export const UserDescriptionWrapper = styled.div`
  text-align: center;
  margin: 0px auto 30px auto;
`;

export const UserImage = styled.img`
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const UserInfoName = styled.p`
  margin-bottom: 8px;
  margin-top: 0;
  color: ${props => props.theme.colors.blackText};

  font-weight: 700;
  font-size: 18px;
`;

export const UserInfo = styled.p`
  color: ${props => props.theme.colors.grayText};
  margin-bottom: 8px;
  margin-top: 0;
  font-weight: 500;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px auto 0px auto;
  padding-left: 0;
  height: 106px;
  color: ${props => props.theme.colors.backgroundSecondary};
  border-top: 2px solid ${props => props.theme.colors.borderLigth};
  list-style: none;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: calc(100% / 3);
`;

export const StatsName = styled.span`
  margin-bottom: 8px;
  color: ${props => props.theme.colors.grayText};
  font-weight: 700;
`;

export const StatsInfo = styled.span`
  color: ${props => props.theme.colors.blackText};
  font-weight: 700;
`;
