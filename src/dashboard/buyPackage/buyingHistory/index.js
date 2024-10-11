import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { dashboardBypackesHistoryReport } from "../../../redux/actions/dashboard";
import styles from "../../../styles/dashboard.module.css";

const BuyingHistory = () => {
    const dispatch = useDispatch();
    const [buypackageHistory, setBuypackageHistory] = useState([]);
    const status = useSelector((state) => state);
    const [loader, setLoader] = useState(true);
    const [dataNotFound, setDataNotFound] = useState(false);
  
    useEffect(() => {
      const apiData = {};
      dispatch(dashboardBypackesHistoryReport(apiData));
    }, []);
  
    useEffect(() => {
      if (status.bypackesHistoryReport.data !== "") {
        if (status.bypackesHistoryReport.data.data.statusCode === "200") {
          setBuypackageHistory(status.bypackesHistoryReport.data.data.result);
          setLoader(false);
          return;
        }
      }
      if (status.bypackesHistoryReport.data !== "") {
        if (status.bypackesHistoryReport.data.data.statusCode === "500") {
          setDataNotFound(true);
          return;
        }
      }
     
    }, [status]);
  
      const historycolumns = [
          {
            field: "stakingmode",
            headerName: "Mode",
            width: 170,
            renderCell: (params) => {
              if (params.row.stakingmode === "Safe Mode") {
                return <div className="greentext">{params.row.stakingmode}</div>;
              } else if (params.row.stakingmode === "Smart Mode") {
                return <div className="greentext">{params.row.stakingmode}</div>;
              }else if (params.row.stakingmode === "Risk Mode") {
                return <div className="failed">{params.row.stakingmode}</div>;
              } else {
                return <div className="pending">{params.row.stakingmode}</div>;
              }
            },
          },
          {
            field: "package",
            headerName: "Package",
            width: 150,
            renderCell: (params) => {
              return <>$ {params.row.package}</>;
            },
          },
          {
            field: "transdate",
            headerName: "Active",
            width: 150,
          },
          {
            field: "expirydate",
            headerName: "Expiry",
            width: 150,
          },
          {
            field: "coinRate",
            headerName: "MDR Price",
            width: 120,
          },
          {
            field: "totalstakedCoin",
            headerName: "Stake MDR",
            width: 140,
          },
          {
            field: "stakeTime",
            headerName: "Staking Time",
            width: 120,
            renderCell: (params) => {
              return <div>{params.row.stakeTime} Months</div>;
            },
          },
        ];

    return (
    <div className={` ${styles.dashboard_content} pt10 nosidebarinner`}>
        <div className={`${styles.dashboard_content_item} ${styles.hasfullcol} ${styles.padding10}`} id="section3">
            <div className={`tableholder ${styles.bordercolor}`}>
                <div className={styles.tableheadertop}>Buying History</div>
                <div className="tableresponsive" style={{position: "relative"}}> 
                {loader ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb", position: "absolute", left: "50%", top: "90px", zIndex: "2"}} /></div> : '' }
                {dataNotFound ? <div className="alertmesstable">Somethig went wrong</div> : '' }
                {buypackageHistory.length === 0 ? <div className="alertmesstable">No Records found</div> : '' }
                {buypackageHistory  && buypackageHistory ? 
                    <DataGrid
                    columns={historycolumns}
                    rows={buypackageHistory}
                    getRowId={(row) => row.rid}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableColumnMenu={true}
                    disableColumnFilter={true}
                    disableColumnSelector={true}
                    />
                    : <></> }
                
                </div>
            </div>
        </div>
    </div>
    )
}
export default BuyingHistory;