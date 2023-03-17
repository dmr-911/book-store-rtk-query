import { filterBooks } from "@/features/filter/filterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Featured = () => {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterClick = (filterMessage) => {
    dispatch(filterBooks(filterMessage));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
        <button
          className={`lws-filter-btn ${filter === "all" && "active-filter"}`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={`lws-filter-btn ${
            filter === "featured" && "active-filter"
          }`}
          onClick={() => handleFilterClick("featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Featured;
