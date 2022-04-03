import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WetherCard} from './WetherCard'

export const Favoritelist = () => {
    const { favoriteslist } = useContext(GlobalContext);
   
  return (
    <div>
        <div>
            <h1 className="heading">My Wetherlist</h1>
            {favoriteslist.length > 0 ? (
                <div >
                {favoriteslist.map((city) => (
                    <div key={city.keys}>
                        <WetherCard  city={city}/>
                    </div>
            ))}
          </div>
        ) : (
          <h2 >No items in your list! Add some!</h2>
        )}
        </div>
    </div>
  )
}
