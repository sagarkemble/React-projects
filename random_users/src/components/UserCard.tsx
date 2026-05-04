import type { UsersData } from "../types/UserData";

function UserCard({ userData }: { userData: UsersData }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="user-card">
      <div className="card-hero">
        <img
          src={userData.picture.large}
          alt={`${userData.name.first} ${userData.name.last}`}
          className="hero-image"
        />
        <div className="hero-overlay">
          <h2 className="hero-name">
            {userData.name.title} {userData.name.first} {userData.name.last}
          </h2>
          <p className="hero-meta">
            {userData.gender} · {userData.nat}
          </p>
        </div>
      </div>

      <div className="card-section">
        <h3 className="section-title">CONTACT</h3>
        <div className="section-content">
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
          <p className="contact-item">@{userData.login.username}</p>
          <div className="contact-phones">
            <span>{userData.phone}</span>
            <span className="phone-divider">·</span>
            <span>{userData.cell}</span>
          </div>
        </div>
      </div>

      <div className="card-section">
        <h3 className="section-title">LOCATION</h3>
        <div className="section-content">
          <p className="location-street">
            {userData.location.street.number} {userData.location.street.name}
          </p>
          <p className="location-city">{userData.location.city}, {userData.location.state}</p>
          <p className="location-country">
            {userData.location.country} · {userData.location.postcode}
          </p>
          <p className="location-timezone">
            {userData.location.timezone.offset} {userData.location.timezone.description}
          </p>
        </div>
      </div>

      <div className="card-section">
        <h3 className="section-title">PROFILE</h3>
        <div className="section-content">
          <p className="profile-item">
            Age {userData.dob.age} · Born {formatDate(userData.dob.date)}
          </p>
          <p className="profile-item profile-registered">
            Registered {formatDate(userData.registered.date)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
