import Proptypes from 'prop-types';
import css from './Statistics.module.css';
import { StatItem } from './StatisticsItem';
import { PageTitle } from './PageTitle';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <PageTitle title={title} />
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return <StatItem key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: Proptypes.array.isRequired,
};
