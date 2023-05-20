import Proptypes from 'prop-types';
import css from './Statistics.module.css';

export const PageTitle = ({ title }) => {
  return title !== undefined && <h2 className={css.title}>{title}</h2>;
};

PageTitle.propTypes = {
  title: Proptypes.string,
};
