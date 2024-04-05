// import RestaurentCard from "./RestaurantCard";
// import dataList from "../utils/mockData";
// import {useState} from "react";
// const Body = () => {

//     const [listOfRestaurants,setListOfrestaurant] = useState(dataList);
//   return (
//     <div className="body">
//       <div className="filter">
//         <button
//           className="filter-btn"
//           onClick={() => {
//             //Filter logic here
//             const filteredList = dataList.filter(
//               (res) =>{
//                 console.log(res);
//                return res.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.avgRating > 4
//               });
//            setListOfrestaurant(filteredList);
//           }}
//         >
//           Top Rated Restaurant
//         </button>
//       </div>
//       <div className="res-container">
//         {listOfRestaurants.map((restaurant , index) => (
//           <RestaurentCard
//             key={
//               index
//             }
//             resData={restaurant}
//           />
//         ))}
//         {/* <RestaurentCard resData={dataList[1]} /> */}
//       </div>
//     </div>
//   );
// };

// export default Body;
