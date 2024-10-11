import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/dashboard.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { transactionsFundRequestList } from "../redux/actions/transaction";
import CircularProgress from "@mui/material/CircularProgress";


const AddFundList = () => {
    const [addFundList, setAddFundList] = useState("");
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
      dispatch(transactionsFundRequestList(apiData));
    }, []);
  
    useEffect(() => {
      if (status.fundRequestList.data !== "") {
        if (status.fundRequestList.data.data.statusCode === "200") {
          setAddFundList(status.fundRequestList.data.data.result);
          setFilterData(status.fundRequestList.data.data.result);
          let obj_arr = addFundList;
          for (let i = 0; i < obj_arr.length; i++) {
            obj_arr[i]["serial"] = i + 1;
          }
          setNewData(obj_arr);
          setLoader(false);
        }
      }
      if (status.fundRequestList.data !== "") {
        if (status.fundRequestList.data.data.statusCode === "500") {
          setDataNotFound(true);
          return;
        }
      }
    }, [status, loader]);
  
    const mystakescolumns = [
      {
        field: "serial",
        headerName: "#",
        sortable: false,
        width: 70,
      },
      {
        field: "ramount",
        headerName: "Amount (in USD)",
        flex: 1,
        minWidth: 100,
      },
      {
        field: "paymentDate",
        headerName: "Date",
        flex: 1,
        minWidth: 150,
      },
      {
        field: "paymentMode",
        headerName: "Payment Mode",
        flex: 1,
        minWidth: 140,
      },
      {
        field: "rf_Status",
        headerName: "Status",
        flex: 1,
        minWidth: 180,
        sortable: false,
        renderCell: (status) => {
          if (status.row.rf_Status === "Approved") {
            return (
              <div className="paid">{status.row.rf_Status}</div>
            );
          } else if (status.row.rf_Status === "unApproved") {
            return (
              <div className="pending">{status.row.rf_Status}</div>
            );
          } else {
            return (
              <div className="failed">{status.row.rf_Status}</div>
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
                    entry.ramount.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                    entry.paymentDate.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                    entry.paymentMode.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                    entry.rf_Status.toString().toLowerCase().includes(currValue.toString().toLowerCase())
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
                getRowId={(row) => row.slno}
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
  )
}

export default AddFundList;