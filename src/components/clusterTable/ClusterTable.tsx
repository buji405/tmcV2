import React, { useState, Fragment } from "react";
import TableRow from "../tableRow/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import "./tablestyle.css";

interface Props {
  data: ClusterData[];
  setData: Function;
}

type tplotOptions = {
  [key: string]: ClusterData;
};

const ClusterTable = (props: Props, sort: tplotOptions) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  const { data, setData } = props;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const formatData = (index: number, dataType: string) => {
    return (index ? ", " : "") + dataType;
  };

  const sortNumbers = (sortOrder: string, key: any) => {
    let filtered;
    const dataCopy = [...data];

    filtered = dataCopy.sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    });

    setData(filtered);
    setPage(0);
  };

  const sortStrings = (sortOrder: string, key: string) => {
    let filtered;
    const dataCopy = [...data];

    filtered = dataCopy.sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return b[key] > a[key] ? 1 : -1;
      }
    });

    setData(filtered);
    setPage(0);
  };

  return (
    <>
      <div className="tableGridContainer">
        <TableRow label="Name" keyName="name" handleSort={sortStrings} />
        <TableRow label="OS System" keyName="os" handleSort={sortStrings} />
        <TableRow label="# of Cores" keyName="cores" handleSort={sortNumbers} />
        <TableRow label="# of Pods" keyName="pods" handleSort={sortNumbers} />
        <TableRow label="# of Nodes" keyName="nodes" handleSort={sortNumbers} />
        <TableRow
          label="Total Memory"
          keyName="total_memory_gb"
          handleSort={sortNumbers}
        />
        <TableRow label="Labels" keyName="labels" handleSort={sortStrings} />
        <TableRow
          label="Name Spaces"
          keyName="namespaces"
          handleSort={sortStrings}
        />

        {data.length > 0 &&
          data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((cluster: ClusterData, i) => {
              return (
                <>
                  <span className="cell" key={i + Math.random()}>
                    {cluster.name}
                  </span>
                  <span className="cell" key={i + Math.random()}>
                    {cluster.os}
                  </span>
                  <span className="cell" key={i + Math.random()}>
                    {cluster.cores}
                  </span>
                  <span className="cell" key={i + Math.random()}>
                    {cluster.pods}
                  </span>
                  <span className="cell" key={i + Math.random()}>
                    {cluster.nodes}
                  </span>
                  <span className="cell" key={i + Math.random()}>
                    {cluster.total_memory_gb}
                  </span>
                  <span className="cell" key={i + Math.random()}>
                    {cluster.labels.map((label, index) => {
                      return (
                        <Fragment key={index}>
                          {formatData(index, label)}
                        </Fragment>
                      );
                    })}
                  </span>
                  <span className="cell" key={Math.random()}>
                    {cluster.namespaces.map((namespace, index) => {
                      return (
                        <Fragment key={index}>
                          {formatData(index, namespace)}
                        </Fragment>
                      );
                    })}
                  </span>
                </>
              );
            })}
      </div>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[25, 50, 100]}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ClusterTable;
