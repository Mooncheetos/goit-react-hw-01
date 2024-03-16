import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    const { followers, views, likes } = stats; 
  return (
    <div className={css.profileContainer}>
  <div className={css.userContainer}>
    <img
      src= {image}
                  alt="User avatar"
                  className={css.userImg}
    />
    <p className={css.userName}>{name}</p>
    <p className={css.userTag}>@{tag}</p>
    <p className={css.userLocation}>{location}</p>
  </div>

  <ul className={css.ratingList}>
    <li className={css.ratingItem}>
      <span className={css.ratingTitle}>Followers</span>
      <span className={css.ratingStats}>{followers}</span>
    </li>
    <li className={css.ratingItem}>
      <span className={css.ratingTitle}>Views</span>
      <span className={css.ratingStats}>{views}</span>
    </li>
    <li className={css.ratingItem}>
      <span className={css.ratingTitle}>Likes</span>
      <span className={css.ratingStats}>{likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile