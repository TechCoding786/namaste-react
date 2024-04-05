import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    // console.log("data11", JSON.stringify(resData, null, 2));
  
    return (
      <div style={{display:'flex',gap:'10px', flexWrap:'wrap'}}>
        {resData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (item , index ) => (
            <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} key = {index}>
              <img
                className="res-logo"
                src={CDN_URL
                   +
                  item?.info?.cloudinaryImageId
                }
                alt=""
              />
              <h3>{item?.info?.name}</h3>
              <h4>{item?.info?.costForTwo}</h4>
              <h4>{item?.info?.avgRating}
              <span className="material-symbols-outlined">star_rate</span>
              </h4>
              <h4>{item?.info?.cuisines.join(", ")}</h4>
              <h4>{item?.info?.sla?.deliveryTime} min</h4>
            </div>
          )
        )}
    
  
  
      </div>
    );
  };

  export default RestaurentCard;