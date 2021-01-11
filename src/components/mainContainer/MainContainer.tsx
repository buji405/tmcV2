import React, { useState } from "react";
import data from "../data/clusters.json";
import ClusterTable from "../clusterTable/ClusterTable";
import SearchBar from "../searchBar/SearchBar";

const clusterData = data;

const MainContainer = () => {
  const [data, setData] = useState(clusterData);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <SearchBar data={data} initialData={clusterData} setData={setData} />
      {data.length > 0 ? (
        <ClusterTable data={data} setData={setData} />
      ) : (
        <p style={{ textAlign: "center" }}>
          No results found, try another search.
        </p>
      )}
      )
    </div>
  );
};

export default MainContainer;
