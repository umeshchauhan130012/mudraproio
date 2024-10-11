import React, { useState } from "react";
import styles from "../../../styles/dashboard.module.css";
import { transactionsTopupWalletReport, transactionsIncomeAndWalletSummery } from "../../../redux/actions/transaction";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Topup = () => {
  const dispatch = useDispatch();
  const [topUp, setTopUp] = useState("");
  const [filterData, setFilterData] = useState(topUp);
  const status = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [value, setValue] = useState("");
  const [dataNotFound, setDataNotFound] = useState(false);
  const [totalIncome, setTotalIncome] = useState("");
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    let apiData = {};
    dispatch(transactionsTopupWalletReport(apiData));
  }, []);

  useEffect(() => {
    let apiData = {};
    dispatch(transactionsIncomeAndWalletSummery(apiData));
  }, []);

  useEffect(() => {
    if (status.topupWalletReport.data !== "") {
      if (status.topupWalletReport.data.data.statusCode === "200") {
        setTopUp(status.topupWalletReport.data.data.result);
        setFilterData(status.topupWalletReport.data.data.result);
        setLoader(false);
        return;
      }
    }
    if (status.topupWalletReport.data !== "") {
      if (status.topupWalletReport.data.data.statusCode === "500") {
        setDataNotFound(true);
        return;
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.incomeAndWalletSummery.data !== "") {
      if (status.incomeAndWalletSummery.data.data.statusCode === "200") {
        setTotalIncome(status.incomeAndWalletSummery.data.data.result);
        return;
      }
    }
  }, [status]);

  const incomeColumn = [
    {
      field: "transtype",
      headerName: "PaidDate",
      minWidth: 200, 
      flex: 1,
      renderCell: (status) => {
        return <div className={` ${styles.titlewidthtablouter} ${styles.alignitencenter} `}>
          <div className={styles.titlewidthtabl}>
            <h5>{status.row.transtype}</h5>
            <label>
              <span>{status.row.transdate}</span>
            </label>
          </div>
        </div>;
      }
    },
    {
      field: "transactionType",
      headerName: "Status",
      minWidth: 270, 
      flex: 1,
      renderCell: (status) => {
        if (status.row.transactionType === "C") {
          return <div className={` ${styles.titlewidthtabl} ${styles.dflexalitmcenter} `}>
          <div className={styles.titlelabelblock}>
          <label><em className={` ${styles.lightgreen}`}>{status.row.credit} </em><cite>MDR</cite></label>
          </div>
          <div className={` ${styles.arrowsend}`}><img src="/images/bottomarrow.png" alt="arrow" height={30} width={30} /></div>
          </div>;
        } else if (status.row.transactionType === "D") {
          return <div className={` ${styles.titlewidthtabl} ${styles.dflexalitmcenter} `}>
          <div className={styles.titlelabelblock}>
          <label><em className={` ${styles.lightgreen} ${styles.lightredcolor}`}>{status.row.debit} </em><cite>MDR</cite></label>
          </div>
          <div className={` ${styles.arrowsend} ${styles.arrowsendred}`}><img src="/images/toparrow.png" alt="arrow" height={30} width={30} /></div>
          </div>;
        } else {
          return <div className={` ${styles.titlewidthtabl} ${styles.dflexalitmcenter} `}>
          <div className={styles.titlelabelblock}>
          <label><em className={` ${styles.lightgreen} ${styles.lightredcolor} `}></em>0 <cite>MDR</cite></label>
          </div>
          <div className={` ${styles.arrowsend} ${styles.arrowsendred}`}><img src="/images/block-icon.png" alt="arrow" height={30} width={30} /></div>
          </div>;
        }
      },
    },
  ];

  return (
    <>
    <div className={` ${styles.dashboard_content} pt10 tabsglobalstyle `}>
      <div className={`${styles.dashboard_content_item} ${styles.padding10}`}>
        <div className={`tableholder ${styles.bordercolor}`}>
          <div className={`${styles.tableheadertop} ${styles.titlefilter} `}>
            <div className={` ${styles.tableheadertop} ${styles.titlefiltertitle} `}>
               Total Top Up Wallet &nbsp;<label>{totalIncome && totalIncome.balanceTopupWallet }</label> <span>USDT</span>
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
                      entry.transdate.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                      entry.debit.toString().toLowerCase().includes(currValue.toString().toLowerCase()) ||
                      entry.credit.toString().toLowerCase().includes(currValue.toString().toLowerCase())
                    );
                    setTopUp(filteredData);
                  }}
                  className={styles.tablesearchinp}
                />
                <button className={styles.tablesearchbtn}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z" stroke="#121212" strokeOpacity="0.54" strokeWidth="2" strokeLinecap="round"
                  />
                </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="tableresponsive hideheader" style={{position: "relative"}}>
            {loader ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb", position: "absolute", left: "50%", top: "90px", zIndex: "2" }} /></div> : '' }
            {dataNotFound ? <div className="alertmesstable">Somethig went wrong</div> : '' }
            {topUp.length === 0 ? <div className="alertmesstable">No Records found</div> : '' }
            {topUp && topUp ? 
            <DataGrid
              columns={incomeColumn}
              rows={topUp}
              getRowId={(row) => row.slno}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 20, 30, 50, 100]}
              disableColumnMenu={true}
              disableColumnFilter={true}
              headerHeight= {0}
              getRowHeight={() => 'auto'}
            /> : <></> }
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Topup;
