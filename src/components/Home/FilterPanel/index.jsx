import React from "react";
import FilterListToggle from "../../common/FilterListToggle";
import CheckboxProton from "../../common/CheckboxProton";
import SliderProton from "../../common/SliderProton";
import { Button } from "@material-ui/core";
import { categoryList, ratingList ,dataList} from "../../../constants";
import "./styles.css";


const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  country,
  selectedPrice,
  changePrice,
  changeChecked,
  stateCahnger
}) => {
  return (
    <div>
      {/* house type */}
      <div className="input-group">
        <p className="label"> Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Location */}
      <div className="input-group">
        <p className="label">Country</p>
        {country.map((country) => (
          <CheckboxProton
            key={country.id}
            country={country}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* price range */}
      <div className="input-group">
        <p className="label-range">Price Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      {/* date range */}
      {/* star rating */}
      <div className="input-group">
        <p className="label"> Star rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
      <Button variant="contained" onClick={ ()=>{stateCahnger(dataList)
      }}>Reset</Button>
    </div>
  );
};

export default FilterPanel;
