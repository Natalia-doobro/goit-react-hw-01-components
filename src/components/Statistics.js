import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}

      <ul>
        {stats.map(st => (
          <li key={st.id}>
            <Statsdata label={st.label} percentage={st.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const Statsdata = ({ label, percentage }) => {
  return (
    <>
      <span>{label}</span>
      <span>{percentage}</span>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
