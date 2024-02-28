
import ResMenuCards from "../resMenuCards/ResMenuCards";
const CategoryCard = ({ categoryCards }) => {
  return categoryCards.map((item, index) => {
    return (
      <div className="categories-list border-b-8 border-gray-200 py-2" key={index}>
        <h4 className="font-bold">{item.card.card.title}</h4>
        {item?.card?.card?.itemCards?.map((menu) => {
          return <ResMenuCards key={menu.card.info.id} menuItems={menu} />;
        })}
      </div>
    );
  });
};
export default CategoryCard;
