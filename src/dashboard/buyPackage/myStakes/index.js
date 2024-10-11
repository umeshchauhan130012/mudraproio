import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashboardMyStakesReport } from "../../../redux/actions/dashboard";
import styles from "../../../styles/dashboard.module.css";
import CircularProgress from "@mui/material/CircularProgress";

const MyStakes = () => {
  const dispatch = useDispatch();
  const [stakesReport, setstakesReport] = useState("");
  const [filterData, setFilterData] = useState(stakesReport);
  const [value, setValue] = useState("");
  const status = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [dataNotFound, setDataNotFound] = useState(false);

  useEffect(() => {
    const apiData = {};
    dispatch(dashboardMyStakesReport(apiData));
  }, []);

  useEffect(() => {
    if (status.myStakesReport.data !== "") {
      if (status.myStakesReport.data.data.statusCode === "200") {
        setstakesReport(status.myStakesReport.data.data.result);
        setFilterData(status.myStakesReport.data.data.result);
        setLoader(false);
        return;
      }
    }
    if (status.myStakesReport.data !== "") {
      if (status.myStakesReport.data.data.statusCode === "500") {
        setDataNotFound(true);
        return;
      }
    }
  }, [status]);

  const mystakescolumns = [
      {
        field: "stakeCoin",
        headerName: "Package",
        width: 150,
      },
      {
        field: "mn_Amount",
        headerName: "USD",
        width: 150,
      },
      {
        field: "dueDate",
        headerName: "Paid Date",
        width: 180,
      },
      {
        field: "payRemark",
        headerName: "MDR",
        width: 150,
      },
      {
        field: "releaseCoin",
        headerName: "Release MDR",
        width: 140,
      },
      {
        field: "paystatus",
        headerName: "Status",
        width: 140,
        renderCell: (status) => {
          if (status.row.paystatus === "Paid") {
            return <div className="paid">{status.row.paystatus}</div>;
          } else if (status.row.paystatus === "Failed") {
            return <div className="failed">{status.row.paystatus}</div>;
          } else {
            return <div className="pending">{status.row.paystatus}</div>;
          }
        },
      },
    ];
  return(
      <div className={` ${styles.dashboard_content} pt10 nosidebarinner`}>
        <div className={`${styles.dashboard_content_item} ${styles.hasfullcol} ${styles.padding10} `} id="section2">
          <div className={`tableholder ${styles.bordercolor}`}>
            <div className={`${styles.tableheadertop} ${styles.titlefilter} `}>
              <div className={styles.titlefiltertitle}>My Stakes</div>
                <div className={styles.tablefiltersearch}>
                  <div className={styles.tablesearchform}>
                    <input
                    type="text"
                    placeholder="Search"
                    value={value}
                    onChange={(e) => {
                      const currValue = e.target.value;
                      setValue(currValue);
                        const filteredData = filterData.filter((entry) =>
                        entry.stakeCoin.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.mn_Amount.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.dueDate.toString().toLowerCase().includes(currValue.toString().toLowerCase()) || 
                        entry.payRemark.toString().toLowerCase().includes(currValue.toString().toLowerCase()) || 
                        entry.releaseCoin.toString().toLowerCase().includes(currValue.toString().toLowerCase()) || 
                        entry.paystatus.toString().toLowerCase().includes(currValue.toString().toLowerCase())
                      );
                        setstakesReport(filteredData);
                      }}
                      className={styles.tablesearchinp}
                    />
                    <button className={styles.tablesearchbtn}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                          stroke="#121212"
                          strokeOpacity="0.54"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="tableresponsive" style={{position: "relative"}}>
              {loader ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb", position: "absolute", left: "50%", top: "90px", zIndex: "2" }} /></div> : '' }
              {dataNotFound ? <div className="alertmesstable">Somethig went wrong</div> : '' }
              {stakesReport.length === 0 ? <div className="alertmesstable">No Records found</div> : '' }
                {stakesReport && stakesReport ? 
                <DataGrid
                  columns={mystakescolumns}
                  rows={stakesReport}
                  getRowId={(row) => row.slno}
                  pageSize={10}
                  disableColumnMenu={true}
                  rowsPerPageOptions={[10]}
                  disableColumnFilter={true}
                /> : <></> }
              
              </div>
          </div>
        </div>
      </div>
  )
}
export default MyStakes;