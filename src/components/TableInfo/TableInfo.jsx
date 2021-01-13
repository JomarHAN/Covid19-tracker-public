import React, { useEffect, useState } from "react";
import "./TableInfo.css";
import LoadWorldTasks from "../../tasks/LoadWorldTasks";
import { useSelector } from "react-redux";
import LoadUsaStasks from "../../tasks/LoadUsTasks";
import { ArrowForwardIos } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import Loading from "../Loading/Loading";
import TableList from "../TableList/TableList";
import { selectIsUsa } from "../../features/usaSlice";
import TableChart from "../TableChart/TableChart";

function TableInfo() {
  const [listRegion, setListRegion] = useState([]);
  const loadWorldData = new LoadWorldTasks();
  const isUsa = useSelector(selectIsUsa);
  const loadUsaTasks = new LoadUsaStasks();
  const [click, setClick] = useState(false);

  const load = () => {
    if (!isUsa) {
      loadWorldData.loadListRegion(setListRegion);
    } else {
      loadUsaTasks.loadListTable(setListRegion);
    }
  };

  useEffect(load, [isUsa]);

  const clickResponsive = () => {
    const tableResponsive = document.querySelector(".tableInfo__table");
    const btnResponsive = document.querySelector(".tableInfo__btnOn");
    if (!click) {
      tableResponsive.classList.remove("tableInfo__tableResponsive");
      btnResponsive.classList.remove("tableInfo__btnOff");
      setClick(true);
    } else {
      tableResponsive.classList.add("tableInfo__tableResponsive");
      btnResponsive.classList.add("tableInfo__btnOff");
      setClick(false);
    }
  };

  return (
    <div className="tableInfo__table tableInfo__tableResponsive">
      <div className="tableInfo__responsiveBtn">
        <IconButton onClick={clickResponsive}>
          <ArrowForwardIos className="tableInfo__btnOn tableInfo__btnOff" />
        </IconButton>
      </div>
      <div className="tableInfo__listRegion">
        <h1>List of Regions</h1>
        {listRegion === 0 ? <Loading /> : <TableList listRegion={listRegion} />}
      </div>
      <div className="tableInfo__charts">
        <TableChart />
      </div>
    </div>
  );
}

export default TableInfo;
