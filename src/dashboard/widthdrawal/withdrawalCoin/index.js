import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../styles/dashboard.module.css";
import { DataGrid } from "@mui/x-data-grid";
import AvailableBalanceCard from "../../../components/availableBalanceCard";
import WidthdrawalCoin from "../../../components/widthdrawalCoin";
import { transactionsUserReport } from "../../../redux/actions/transaction";
import CircularProgress from "@mui/material/CircularProgress";
import Moment from 'react-moment';


const WithdrawalCoin = () => {
  const [transactionHistory, setTransactionHistory] = useState("");
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [newData, setNewData] = useState([]);
  const [filterData, setFilterData] = useState(newData);
  const [value, setValue] = useState("");
  const [loader, setLoader] = useState(true);
  const [dataNotFound, setDataNotFound] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    const apiData = {};
    dispatch(transactionsUserReport(apiData));
  }, []);

  useEffect(() => {
    if (status.userReport.data !== "") {
      if (status.userReport.data.data.statusCode === "200") {
        setTransactionHistory(status.userReport.data.data.result);
        setFilterData(status.userReport.data.data.result);
        let obj_arr = transactionHistory;
        for (let i = 0; i < obj_arr.length; i++) {
          obj_arr[i]["serial"] = i + 1;
        }
        setNewData(obj_arr);
        setLoader(false);
      }
    }
    if (status.userReport.data !== "") {
      if (status.userReport.data.data.statusCode === "500") {
        setDataNotFound(true);
        return;
      }
    }
  }, [status, loader]);


  const mystakescolumns = [
    {
      field: "serial",
      headerName: <label className="textcenter">#</label>,
      width: 50,
      sortable: false,
    },
    {
      field: "amountUSD",
      headerName: "Fund (in MDR)",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "transdate",
      headerName: "Date",
      flex: 1,
      minWidth: 170,
      renderCell: (status) => {
        return <Moment format="DD-MM-YYYY" date={status.row.transdate}></Moment>;
    },
    },
    {
      field: "trxValue",
      headerName: "Charges",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "coinRate",
      headerName: "MDR",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "debit",
      headerName: "Release MDR",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 100,
      sortable: false,
      renderCell: (status) => {
        if (status.row.status === "Confirmed") {
          return (
            <div className="paid">{status.row.status}</div>
          );
        } else if (status.row.status === "Pending") {
          return (
            <div className="pending">{status.row.status}</div>
          );
        } else {
          return (
            <div className="failed">{status.row.status}</div>
          );
        }
      },
    },
    {
      field: "transhHash",
      headerName: "TransHash",
      flex: 1,
      minWidth: 300,
      renderCell: (status) => {
        return <div className="haslink">{status.row.transhHash ? <a href={`https://bscscan.com/tx/`+`${status.row.transhHash}`} target="_blank">{status.row.transhHash}</a> : <>{status.row.remark}</>}</div>;
    },
    },
  ];

  return (
    <>
      <div className={` ${styles.dashboard_content} pt10 `}>
        <div className={styles.padding10} id="section1">
          <div
            className={` ${styles.bordercolor} ${styles.has2col} ${styles.padding15} `}
          >
            <div className={styles.col7w}>
              <WidthdrawalCoin />
            </div>
            <div className={styles.col3w}>
              <AvailableBalanceCard
                button={false}
                rateValue={true}
                height100={false}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.dashboard_content_item} ${styles.hasfullcol} ${styles.padding10}`}>
          <div className={`tableholder ${styles.bordercolor}`}>
            <div className={`${styles.tableheadertop} ${styles.titlefilter} `}>
              <div className={styles.titlefiltertitle}>Transaction History</div>
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
                        entry.amountUSD.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.transdate.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.trxValue.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.coinRate.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.debit.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.status.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                        entry.transhHash.toString().toLowerCase().includes(currValue.toString().toLowerCase())
                        );
                        setNewData(filteredData);
                    }}
                    className={styles.tablesearchinp}
                  />
                  <button className={styles.tablesearchbtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            <div className="tableresponsive">
              {loader ? (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress size="25px" style={{ color: "#0164eb" }} />
                </div>
              ) : (
                ""
              )}
              {dataNotFound ? (
                <div style={{ textAlign: "center" }}>Somethig went wrong</div>
              ) : (
                ""
              )}
              {newData.length === 0 ? (
                <div style={{ textAlign: "center" }}>No Records found</div>
              ) : (
                ""
              )}
              {newData.length === 0 ? (
                ""
              ) : (
                <DataGrid
                  rows={newData}
                  columns={mystakescolumns}
                  getRowId={(row) => row.serial}
                  pageSize={pageSize}
                  onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                  rowsPerPageOptions={[10, 20, 30, 50, 100]}
                  disableColumnMenu={true}
                  disableColumnFilter={true}
                  disableColumnSelector={true}
                  getRowHeight={() => 'auto'}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithdrawalCoin;

