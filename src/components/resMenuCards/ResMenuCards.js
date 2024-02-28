import { IMG_URL } from "../../utils/constents";

const ResMenuCards=({menuItems})=>{
 
   
    return(
        <div  className="menu-card flex items-center justify-between border-b-2 border-gray-300 py-4 last:border-b-0">
        <div className="card-details basis-4/5">
          <h5 className="text-[#3e4152] text-xs font-semibold">{menuItems.card.info.name}</h5>
          <span className="text-xs font-semibold text-[#3e4152]">{(menuItems.card.info.price ||menuItems.card.info.defaultPrice
)/ 100}</span>
          <p className="menu-card-desc text-[0.6rem] text-[rgba(40,44,63,.45)] font-medium">{menuItems.card.info.description}</p>
        </div>
        <div className="card-img w-28 rounded-md overflow-hidden h-[93.3px]">
          <img
            src={IMG_URL + menuItems.card.info.imageId}
            alt={menuItems.card.info.name}
            className="w-full object-cover h-full"
          />
        </div>
      </div>
    )
}
export default ResMenuCards;