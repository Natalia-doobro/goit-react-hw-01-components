import PropTypes from 'prop-types';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  name: 'Имя пользователя',
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
