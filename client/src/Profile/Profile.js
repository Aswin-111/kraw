import Card from "./Card/Card";
import icon from "./assets/icon.png";
import orders from './assets/menu.png'
import promotion from './assets/promotion.png'
import money from './assets/money.png'




import wallet from './assets/wallet.png'
import card from './assets/card.png'
import address from './assets/address.png'


import security from './assets/security.png'
import download from './assets/download.png'




import questions from './assets/compliants.png'











import info from './assets/info.png'
import bellimage from './assets/bell.png'
import "./Profile.css";
import Footer from "../Shared/Footer";
function Profile() {
  return (
    <div className="container">
      <div className="kraw">
        <div className="navbar">
          <div className="user-details">
            <div className="user-grp">
              <div className="logo">{/* <img src = {logo} /> */}</div>
              <div className="user-info">
                <div className="username">User : 917994642217</div>
                <div className="userid">ID: 1442</div>
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
        <Card src={icon} title = "Sign in"/>
        <Card src={orders} title = "Orders"/>
        <Card src={promotion} title = "Promotion"/>
        <Card src={money} title = "Red Envelope"/>
        <Card src={wallet} title =  "Wallet" />
        <Card src={card} title = "Bank Card"/>
       
        <Card src={address} title = "Address"/>
        <Card src={security} title = "Account Security"/>
        <Card src={download} title = "App Download"/>
        <Card src={questions} title = "Compliants and Sugesstions"/>
        <Card src={info} title = "About"/>

      </div>
      
      <div className="logout">
        <button className = "logout-btn">Logout</button>
      </div>
      <div className="footer-section">
        <Footer/>
      </div>
    </div>
  );
}

export default Profile;