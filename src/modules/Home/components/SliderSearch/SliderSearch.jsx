import React from "react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router";
const SliderSearch = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSearchJob = (value) => {
    if (!value) {
      return;
    }
    navigate("ShowDetails");
  };

  return (
    <div className="m-container">
      <div className="d-flex">
        <div className="col-6 sliderSearch">
          <h3 className="sliderSearch-title pb-4">Khách sạn ở Việt Nam</h3>
          <form className="d-flex pb-4">
            <input
              type="text"
              className="form-control"
              placeholder="bạn muốn đến đâu "
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              onClick={() => handleSearchJob(value)}
              type="submit"
              className="sliderSearch-btn"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SliderSearch;
