import './Card.css'
import arrow from '../assets/down-arrow.png'

function Card(props) {
    return (
      <div className="card-main">
        <div className="left-side">
          <img className="icon" src={props.src} alt="icon" />
          <span>{props.title}</span>
        </div>
        <div className="right-side">
          <img className="arrow" src={arrow}   alt="down arrow" />
        </div>
      </div>
    );
  }

  export default Card;