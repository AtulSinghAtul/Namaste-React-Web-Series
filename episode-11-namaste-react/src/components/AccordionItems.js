import React from "react";
import { CDN_URL } from "../utils/constant";

const AccordionItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between gap-6 mb-3 pb-4 border-b-2 border-gray-300 w-[100%]"
        >
          <div className="flex flex-col  items-start gap-4 w-9/12">
            <div>
              <span className="text-md font-semibold">
                {item?.card?.info?.name} -{" "}
              </span>
              <span className="font-medium">
                ₹{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <div className="text-sm">
              <p>{item?.card?.info?.description}</p>
            </div>
          </div>

          <div className="w-3/12 relative">
            <button className="absolute bg-black text-white rounded-md p-[4px] text-sm top-[80%] left-[40%]">
              Add +
            </button>
            <img src={CDN_URL + item?.card?.info?.imageId} alt="img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItemsList;
