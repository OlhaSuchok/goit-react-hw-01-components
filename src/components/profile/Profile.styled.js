import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  margin: 0px auto ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[6]}px;
  width: ${props => props.theme.space[11]}px;
  height: ${props => props.theme.space[12]}px;

  background-color: ${props => props.theme.colors.backgroundMain};
  box-shadow: 2px 2px 10px 0px rgb(0 168 164 / 30%);
  border: ${props => props.theme.space[2]}px solid
    ${props => props.theme.colors.borderLigth};
  border-radius: ${props => props.theme.space[2]}px;
`;

export const UserDescriptionWrapper = styled.div`
  text-align: center;
  margin: 0px auto ${props => props.theme.space[5]}px auto;
`;

export const UserImage = styled.img`
  margin-bottom: ${props => props.theme.space[4]}px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const UserInfoName = styled.p`
  margin-bottom: ${props => props.theme.space[3]}px;
  margin-top: 0;
  color: ${props => props.theme.colors.blackText};

  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 700;
`;

export const UserInfo = styled.p`
  color: ${props => props.theme.colors.grayText};
  margin-bottom: ${props => props.theme.space[3]}px;
  margin-top: 0;
  font-size: ${props => props.theme.fontSizes.m};
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

  border-bottom-left-radius: ${props => props.theme.space[2]}px;
  border-bottom-right-radius: ${props => props.theme.space[2]}px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex-basis: calc(100% / 3);
`;

export const StatsName = styled.span`
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.grayText};

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 700;
`;

export const StatsInfo = styled.span`
  color: ${props => props.theme.colors.blackText};

  font-size: ${props => props.theme.fontSizes.m};
  font-weight: 700;
`;
