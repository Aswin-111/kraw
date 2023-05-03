import Card from "./Card/Card";
import icon from "./assets/icon.png";
import bellimage from './assets/bell.png'
import "./Profile.css";
function Profile() {
  return (
    <div className="container">
      <div className="kraw">
        <div className="navbar">
          <div className="user-details">
            <div className="user-grp">
              <div className="logo">{/* <img src = {logo} /> */}</div>
              <div className="user-info">
                <h4>User : 917994642217</h4>
                <h4>ID: 1442</h4>
              </div>
            </div>
            <div className="bell-icon">
              <img src={bellimage} />
            </div>
          </div>

          <div className="top-items">
            <div className="item1">
              <div className="balance">₹ 0.00</div>
              <div className="label">Balance</div>
              <button className="top-button">Recharge</button>
            </div>
            <div className="item2">
              <div className="balance">₹ 0</div>
              <div className="label">Commision</div>
              <button className="top-button">See</button>
            </div>
            <div className="item3">
              <div className="balance">₹ 0</div>
              <div className="label">Interest</div>
              <button className="top-button">See</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-section">
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
        <Card src={icon} />
      </div>
    </div>
  );
}
export default Profile;