import { IMG_URL } from "../../utils/constents";
import './resMenuCards.css'
const ResMenuCards=({menuItems})=>{
 
   
    return(
        <div  className="menu-card">
        <div className="card-details">
          <h5>{menuItems.card.info.name}</h5>
          <span className="rupee">{(menuItems.card.info.price ||menuItems.card.info.defaultPrice
)/ 100}</span>
          <p className="menu-card-desc">{menuItems.card.info.description}</p>
        </div>
        <div className="card-img">
          <img
            src={IMG_URL + menuItems.card.info.imageId}
            alt={menuItems.card.info.name}
          />
        </div>
      </div>
    )
}
export default ResMenuCards;