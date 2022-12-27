import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  text-align: center;
  position: relative;
  margin: 0px auto 20px auto;
  padding-top: 20px;
  width: 330px;
  height: 150px;
  background-color: ${props => props.theme.colors.backgroundMain};

  box-shadow: 2px 2px 10px 0px rgba(0, 168, 164, 0.3);
  list-style: none;
  border: 4px solid ${props => props.theme.colors.borderLigth};
  border-radius: 4px;
`;

export const Titel = styled.h2`
  color: ${props => props.theme.colors.grayText};
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

  border-radius: 4px;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 8px;
  width: 50px;
  height: 50px;
`;

export const StatisticsLabel = styled.span`
  margin-bottom: 15px;
  color: ${props => props.theme.colors.whiteText};
  font-weight: 700;
`;

export const StatisticsInfo = styled.span`
  color: ${props => props.theme.colors.whiteText};
  font-weight: 500;
`;
