import ico from '../Profile/assets/home.png'
import search from '../Profile/assets/search.png'
import cup from '../Profile/assets/cup.png'
import profileico from '../Profile/assets/profileicon.png'
import './Footer.css'
function Footer(){
    return(
      <div className="footer-main">
        <div className="item1">
          <img src={ico} alt="" />
          <span>Home</span>
        </div>
        <div className="item1">
          <img src={search} alt="" />
          <span>Search</span>
        </div>
        <div className="item1">
          <img src={cup} alt="" />
          <span>Win</span>
        </div>
        <div className="item1">
          <img src={profileico} alt="" />
          <span>My</span>
        </div>
      </div>
    )
  }
  export default Footer;