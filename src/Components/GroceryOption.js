import { GrocerGridCard } from "../Utills/Grocery";

import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 max-w-[80%] container mx-auto">
            <h1 className=" text-3xl font-extrabold">Shop Groceries on Instamart</h1>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-15 gap-10">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}