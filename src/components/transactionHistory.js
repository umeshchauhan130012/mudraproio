import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/dashboard.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { transactionsTopupWalletReport } from "../redux/actions/transaction";
import CircularProgress from "@mui/material/CircularProgress";


const TransactionHistory = () => {
    const [transactionHistory, setTransactionHistory] = useState("");
    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const [newData, setNewData] = useState([]);
    const [filterData, setFilterData] = useState(newData);
    const [value, setValue] = useState("");
    const [loader, setLoader] = useState(true);
    const [dataNotFound, setDataNotFound] = useState(false);
  
    useEffect(() => {
      const apiData = {};
      dispatch(transactionsTopupWalletReport(apiData));
    }, []);
  
    useEffect(() => {
      if (status.topupWalletReport.data !== "") {
        if (status.topupWalletReport.data.data.statusCode === "200") {
          setTransactionHistory(status.topupWalletReport.data.data.result);
          setFilterData(status.topupWalletReport.data.data.result);
          let obj_arr = transactionHistory;
          for (let i = 0; i < obj_arr.length; i++) {
            obj_arr[i]["serial"] = i + 1;
          }
          setNewData(obj_arr);
          setLoader(false);
        }
      }
      if (status.topupWalletReport.data !== "") {
        if (status.topupWalletReport.data.data.statusCode === "500") {
          setDataNotFound(true);
          return;
        }
      }
    }, [status, loader]);
  
    const mystakescolumns = [
      {
        field: "serial",
        headerName: <label className="textcenter">#</label>,
        width: 100,
        sortable: false,
      },
      {
        field: "transtype",
        headerName: "Transaction type",
        width: 230,
      },
      {
        field: "transactionType",
        headerName: "Release MDR",
        width: 200,
        renderCell: (status) => {
          if (status.row.transactionType === "C") {
            return <div className="paid">{status.row.credit}</div>;
          } else if (status.row.transactionType === "D") {
            return <div className="failed">{status.row.debit}</div>;
          } else {
            return <div className="pending">0</div>;
          }
        },
      },
      {
        field: "transdate",
        headerName: "Date",
        width: 200,
      },
      {
        field: "status",
        headerName: "Status",
        width: 100,
        sortable: false,
        renderCell: (status) => {
          if (status.row.transactionType === "C") {
            return (
              <div className={` ${styles.arrowsend}`}>
                <img
                  src="/images/bottomarrow.png"
                  alt="arrow"
                  height={30}
                  width={30}
                />
              </div>
            );
          } else if (status.row.transactionType === "D") {
            return (
              <div className={` ${styles.arrowsend} ${styles.arrowsendred}`}>
                <img
                  src="/images/toparrow.png"
                  alt="arrow"
                  height={30}
                  width={30}
                />
              </div>
            );
          } else {
            return (
              <div className={` ${styles.arrowsend} ${styles.arrowsendred}`}>
                <img
                  src="/images/block-icon.png"
                  alt="arrow"
                  height={30}
                  width={30}
                />
              </div>
            );
          }
        },
      },
    ];
  return (
    <div className={`tableholder ${styles.bordercolor}`}>
        <div
            className={`${styles.tableheadertop} ${styles.titlefilter} `}
        >
            <div className={styles.titlefiltertitle}>
            Transaction History
            </div>
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
                    entry.transtype.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                    entry.credit.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                    entry.debit.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                    entry.transdate.toString().toLowerCase().includes(currValue.toString().toLowerCase())
                    );
                    setNewData(filteredData);
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
        <div className="tableresponsive">
        {loader ? (
            <div style={{ textAlign: "center" }}>
                <CircularProgress
                size="25px"
                style={{ color: "#0164eb" }}
                />
            </div>
            ) : (
            ""
            )}
            {dataNotFound ? (
            <div style={{ textAlign: "center" }}>
                Somethig went wrong
            </div>
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
                pageSize={15}
                disableColumnMenu={true}
                disableColumnFilter={true}
                disableColumnSelector={true}
            />
            )}
        </div>
        </div>
  )
}

export default TransactionHistory;