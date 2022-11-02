import React, { useEffect, useState } from "react";
import SearchBar from "../../components/Home/SearchBar";
import FilterPanel from "../../components/Home/FilterPanel";
import EmptyView from "../../components/common/EmptyView";
import List from "../../components/Home/List";
import "./styles.css";
import { dataList } from "../../constants";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [searchInput, setSearchInput] = useState("");
  const [resultFound, setResultFound] = useState(false);
  const [list, setList] = useState(dataList);
  const [country, setCountry] = useState([
    { id: 1, checked: false, label: "America" },
    { id: 2, checked: false, label: "China" },
    { id: 3, checked: false, label: "India" },
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);
  const handlechangeChecked = (id) => {
    const countryStateList = country;
    const changeCheckedCountry = countryStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCountry(changeCheckedCountry);
  };
  const handleChangePrice = (event, price) => {
    setSelectedPrice(price);
  };

  const applyFilter = () => {
    let updatedList = dataList;

    // Rating
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    // category
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    // Cuisine Filter
    const countryChecked = country
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
console.log(countryChecked)
    if (countryChecked.length) {
      updatedList = updatedList.filter((item) =>
        countryChecked.includes(item.country)
      );
    }
    console.log(updatedList)
    // price
    const [minPrice, maxPrice] = selectedPrice;
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && maxPrice <= maxPrice
    );

    // serach
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);
    !updatedList.length ? setResultFound(false) : setResultFound(true);
  };
  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, country, selectedPrice, searchInput]);
  return (
    <div className="home">
      {/* Search Bar  */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* Side panel */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            country={country}
            changeChecked={handlechangeChecked}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            stateCahnger={setList}
          />
        </div>
        <div className="home_list-wrap">
          {/* List  */}

          {resultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
