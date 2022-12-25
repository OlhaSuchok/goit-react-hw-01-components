import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">.{title}</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.{title}</span>
          <span class="percentage">{stats}%</span>
        </li>
        <li class="item">
          <span class="label">.{title}</span>
          <span class="percentage">{stats}%</span>
        </li>
        <li class="item">
          <span class="label">.{title}</span>
          <span class="percentage">{stats}%</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number,
};
