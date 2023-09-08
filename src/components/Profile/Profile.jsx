import css from './Profile.module.css'



export const Profile = (props) => {
    return (
        <div className={css.profile}>
  <div className={css.description}>
    <img
      src={props.avatar}
      alt="User avatar"
      className={css.img}
    />
    <p className={css.name}>{props.username}</p>
    <p className={css.tag}>@{props.tag}</p>
    <p className={css.location}>{props.location}</p>
  </div>

  <ul className={css.stats}>
    <li>
      <span className="label">Followers</span>
      <span className="quantity">{props.stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className="quantity">{props.stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className="quantity">{props.stats.likes}</span>
    </li>
  </ul>
</div>
    )
}