import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { ProfileDescription } from './ProfileDesription';
import { ProfileStats } from './ProfileStats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <ProfileDescription avatar={avatar} username={username} location={location} tag={tag} />
      <ProfileStats followers={stats.followers} views={stats.views} likes={stats.likes} />
    </div>
  );
};
Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};
