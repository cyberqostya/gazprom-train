import './UserProfile.css';

export default function UserProfile(props) {

  const { user } = props;

  return (
    <div className="profile">
      <img src={user.image} alt="avatar" className="profile__image" />
      <p className="profile__data profile__data_name">{`${user.firstname} ${user.lastname}`}</p>
      <p className="profile__data profile__data_about">{`${user.gender}, ${user.age}`}</p>
      <p className="profile__data profile__data_address">{`${user.city}, ${user.country}`}</p>
      <p className="profile__data profile__data_email">{user.email}</p>
      <p className="profile__data profile__data_phone">{user.phone}</p>
    </div>
  );
}