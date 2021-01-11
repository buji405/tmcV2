import React, { useState } from "react";
import data from "../../data/clusters.json";
import ClusterTable from "../clusterTable/ClusterTable";
import SearchBar from "../searchBar/SearchBar";
import "./mainContainer.css";

const clusterData = data;

const MainContainer = () => {
  const [data, setData] = useState(clusterData);

  return (
    <div className="main">
      <SearchBar data={data} initialData={clusterData} setData={setData} />
      {data.length > 0 ? (
        <ClusterTable data={data} setData={setData} />
      ) : (
        <p className="no-results">No results found, try another search.</p>
      )}
    </div>
  );
};

export default MainContainer;
