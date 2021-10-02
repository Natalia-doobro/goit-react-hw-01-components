import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(fr => (
        <li key={fr.id}>
          <FriendData avatar={fr.avatar} name={fr.name} isOnline={fr.isOnline} />
        </li>
      ))}
    </ul>
  );
};

const FriendData = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? <span>ON</span> : <span>OF</span>}
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};

export default FriendList;
