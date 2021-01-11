import React from "react";
import "./search.css";

interface SearchProps {
  data: ClusterData[];
  initialData: ClusterData[];
  setData: Function;
}

const SearchBar = (props: SearchProps) => {
  const { data, initialData, setData } = props;

  const searchResults = (searchQuery: string) => {
    const searchString = searchQuery.toLowerCase();
    let filteredData = data.filter((cluster: ClusterData) => {
      return (
        JSON.stringify(cluster)
          .toLowerCase()
          .indexOf(searchString.toLowerCase()) !== -1
      );
    });

    if (searchString === "" || searchString.length === 1) {
      filteredData = initialData;
    }
    setData(filteredData);
  };

  return (
    <>
      <div className="search">
        <input
          className="searchHeight"
          type="text"
          placeholder="Search clusters..."
          onChange={(e) => searchResults(e.target.value)}
        />
      </div>
      <div className="reset-btn">
        <button className="link" onClick={() => setData(initialData)}>
          Reset Filters
        </button>
      </div>
    </>
  );
};

export default SearchBar;
