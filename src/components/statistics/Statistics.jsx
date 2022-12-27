import PropTypes from 'prop-types';
import getRandomHexColor from 'constants/helper';

import {
  StatisticsWrapper,
  StatisticsList,
  StatisticsItem,
  StatisticsLabel,
  StatisticsInfo,
  Titel,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsWrapper>
      {title && <Titel>Upload stats</Titel>}

      <StatisticsList>
        {stats.map(({ label, percentage, id }) => (
          <StatisticsItem
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticsLabel>{label}</StatisticsLabel>
            <StatisticsInfo>{percentage}%</StatisticsInfo>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
