import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  text-align: center;
  position: relative;
  margin: 0px auto ${props => props.theme.space[4]}px auto;
  padding-top: ${props => props.theme.space[4]}px;
  width: ${props => props.theme.space[11]}px;
  height: ${props => props.theme.space[9]}px;
  background-color: ${props => props.theme.colors.backgroundMain};

  box-shadow: 2px 2px 10px 0px rgba(0, 168, 164, 0.3);
  list-style: none;
  border: ${props => props.theme.space[2]}px solid
    ${props => props.theme.colors.borderLigth};
  border-radius: ${props => props.theme.space[2]}px;
`;

export const Titel = styled.h2`
  margin-top: 0;
  color: ${props => props.theme.colors.grayText};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: 700;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin: 0px auto 0px auto;
  padding-left: 0;

  border-radius: ${props => props.theme.space[2]}px;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${props => props.theme.space[3]}px;
  width: 50px;
  height: 50px;
`;

export const StatisticsLabel = styled.span`
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.whiteText};

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 700;
`;

export const StatisticsInfo = styled.span`
  color: ${props => props.theme.colors.whiteText};

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: 500;
`;
