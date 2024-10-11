import React, { useEffect, useState } from "react";
import styles from "../../../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { transactionsLevelIncomeReport, transactionsIncomeAndWalletSummery, lebelDetailsReport } from "../../../redux/actions/transaction";
import { DataGrid } from "@mui/x-data-grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const LevelIncome = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [levelIncome, setLevelIncome] = useState("");
  // const [totalIncome, setTotalIncome] = useState("");
  const [loader, setLoader] = useState(true);
  const [viewLabel, setViewLabel] = useState(true);
  const [dataNotFound, setDataNotFound] = useState(false);
  const [pageSize, setPageSize] = useState(20);
  const [selectLabel, setSelectLabel] = useState(0);
  const [selectDate, setSelectDate] = useState("");
  const [searchLoader, setSearchLoader] = useState(false);
  
  const [levelDetails, setLevelDetails] = useState('');
  const [filterDataLevel, setFilterDataLevel] = useState(levelDetails);
  const [dataNotFoundLabelDetails, setDataNotFoundLabelDetails] = useState(false);
  const [loaderLabelDetails, setLoaderLabelDetails] = useState(true);
  const [value, setValue] = useState("");
  const [labelBussiness, setLabelBussiness] = useState("");
  const [actionData, setActionData] = useState('');
  const [pageSizeDetails, setPageSizeDetails] = useState(30);

  useEffect(() => {
    let apiData = {
      Level : 0,
      TransDate : '',
    };
    dispatch(transactionsLevelIncomeReport(apiData));
  }, []);

  // useEffect(() => {
  //   let apiData = {};
  //   dispatch(transactionsIncomeAndWalletSummery(apiData));
  // }, []);


  const handleGetLabel = (e) => {
    let apiData = { "Level" : e}
    setActionData(e);
    dispatch(lebelDetailsReport(apiData));
  };

  const handleGetLabelBusiness = (e) => {
    setLabelBussiness(e);
  };


const handleSearch = (e) => {
  e.preventDefault();

  setSearchLoader(true);
  let apiData = { 
    Level : selectLabel,
    TransDate : selectDate,
  }
  dispatch(transactionsLevelIncomeReport(apiData));
};

  useEffect(() => {
    if (status.lebelDetailsReport.data !== "") {
      if (status.lebelDetailsReport.data.data.message === "success") {
        setLevelDetails(status.lebelDetailsReport.data.data.result);
        setFilterDataLevel(status.lebelDetailsReport.data.data.result);
        setLoaderLabelDetails(false);
        return;
      }
    }
    if (status.lebelDetailsReport.data !== "") {
      if (status.lebelDetailsReport.data.data.statusCode === "500") {
        setDataNotFoundLabelDetails(true);
        return;
      }
    }
  }, [status]);


  useEffect(() => {
    if (status.levelIncomeReport.data !== "") {
      if (status.levelIncomeReport.data.data.message === "success") {
        setLevelIncome(status.levelIncomeReport.data.data.result);
        setLoader(false);
        setSearchLoader(false);
        return;
      }
    }

    if (status.levelIncomeReport.data !== "") {
      if (status.levelIncomeReport.data.data.statusCode === "500") {
        setDataNotFound(true);
        setSearchLoader(false);
        return;
      }
    }
  }, [status]);

  // useEffect(() => {
  //   if (status.incomeAndWalletSummery.data !== "") {
  //     if (status.incomeAndWalletSummery.data.data.statusCode === "200") {
  //       setTotalIncome(status.incomeAndWalletSummery.data.data.result);
  //       return;
  //     }
  //   }
  // }, [status]);

  const residential = (event) => {
    setSelectLabel(event.target.value);
  };

  var size = levelIncome.length;
  var totalIncomes = 0;
  for (let i = 0; i < size; i++) {
    totalIncomes = totalIncomes +levelIncome[i].teamBusiness
  }

  const incomeColumn = [
    {
      field: "levelname",
      headerName: "Transtype",
      minWidth: 100, 
      flex: 1,
    },
    {
      field: "teamBusiness",
      headerName: "Income",
      minWidth: 170, 
      flex: 1,
      renderCell: (status) => {
        return <div className={styles.balanceCurrency}>{status.row.teamBusiness} <span>MDR</span></div>;
    },
    },
    {
      field: "more",
      headerName: "Actions",
      minWidth: 170, 
      flex: 1,
      renderCell: (status) => {
          return <div className={styles.actionView} onClick={()=> { handleGetLabel(status.row.level); handleGetLabelBusiness(status.row.teamBusiness); setViewLabel(false)}}>View Details</div>;
      },
    },
  ];


  
  const incomeColumnLabelDetails = [
    {
      field: "levelname",
      headerName: "Transtype",
      minWidth: 100, 
      flex: 1,
    },
    {
      field: "leveUserById",
      headerName: "User Id",
      minWidth: 100, 
      flex: 1,
    },
    {
      field: "transDate",
      headerName: "Date",
      minWidth: 100, 
      flex: 1,
    },
    {
      field: "business",
      headerName: "Income",
      minWidth: 170, 
      flex: 1,
    },
  ];

  return (
    <>
    {
    viewLabel ? <>
      <div className={` ${styles.dashboard_content} pt10 tabsglobalstyle `}>
        <div className={`${styles.dashboard_content_item} ${styles.padding10}`}>
          <div className={`tableholder ${styles.bordercolor}`}>
            
          <div className={` ${styles.tablefilterwrp} tableholdertopfilter `}>
            <div className={styles.tablefilterdroup}>
              <div className="teablefilterdroupdown">
                <div className="input_item">
                  <FormControl variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">
                      Level Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={selectLabel}
                      onChange={residential}
                    >
                      <MenuItem value={0}>--All Level--</MenuItem>
                      <MenuItem value={1}>Level 1</MenuItem>
                      <MenuItem value={2}>Level 2</MenuItem>
                      <MenuItem value={3}>Level 3</MenuItem>
                      <MenuItem value={4}>Level 4</MenuItem>
                      <MenuItem value={5}>Level 5</MenuItem>
                      <MenuItem value={6}>Level 6</MenuItem>
                      <MenuItem value={7}>Level 7</MenuItem>
                      <MenuItem value={8}>Level 8</MenuItem>
                      <MenuItem value={9}>Level 9</MenuItem>
                      <MenuItem value={10}>Level 10</MenuItem>
                      <MenuItem value={11}>Level 11</MenuItem>
                      <MenuItem value={12}>Level 12</MenuItem>
                      <MenuItem value={13}>Level 13</MenuItem>
                      <MenuItem value={14}>Level 14</MenuItem>
                      <MenuItem value={15}>Level 15</MenuItem>
                      <MenuItem value={16}>Level 16</MenuItem>
                      <MenuItem value={17}>Level 17</MenuItem>
                      <MenuItem value={18}>Level 18</MenuItem>
                      <MenuItem value={19}>Level 19</MenuItem>
                      <MenuItem value={20}>Level 20</MenuItem>
                      <MenuItem value={21}>Level 21</MenuItem>
                      <MenuItem value={22}>Level 22</MenuItem>
                      <MenuItem value={23}>Level 23</MenuItem>
                      <MenuItem value={24}>Level 24</MenuItem>
                      <MenuItem value={25}>Level 25</MenuItem>
                      <MenuItem value={26}>Level 26</MenuItem>
                      <MenuItem value={27}>Level 27</MenuItem>
                      <MenuItem value={28}>Level 28</MenuItem>
                      <MenuItem value={29}>Level 29</MenuItem>
                      <MenuItem value={30}>Level 30</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>
            <div className={styles.tablefilterdroup}>
              <div className="teablefilterdroupdown">
                <div className="input_item">
                  <input type="date" value={selectDate} onChange={(e)=> setSelectDate(e.target.value) }/>
                </div>
              </div>
            </div>
            <div className="filterbtntbl">
              <button onClick={handleSearch}>Search {searchLoader ? <div className="loadersearchbtn"><CircularProgress size="20px" style={{ color: "#1976d2", position: "relative", top: "15px",}} /></div> : '' }</button>
            </div>
          </div>

            <div className={`${styles.tableheadertop} ${styles.titlefilter} `}>
              <div className={` ${styles.tableheadertop} ${styles.titlefiltertitle} `}>
                Total Level Income &nbsp;<label>{totalIncomes.toFixed(4)}</label> <span>MDR</span>  
              </div>
            </div>

            <div className="tableresponsive" style={{position: "relative"}}>
              {loader ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb", position: "absolute", left: "50%", top: "90px", zIndex: "2" }} /></div> : '' }
              {dataNotFound ? <div className="alertmesstable">Somethig went wrong</div> : '' }
              {levelIncome.length === '' ? <div className="alertmesstable">No Records found</div> : '' }
              {levelIncome && levelIncome ? 
              <DataGrid
                columns={incomeColumn}
                rows={levelIncome}
                getRowId={(row) => row.slno}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 30, 50, 100]}
                disableColumnMenu={true}
                disableColumnFilter={true}
                getRowHeight={() => 'auto'}
              /> : <></> }
            </div>
          </div>
        </div>
      </div>
      </>
      : <>
      <div className={` ${styles.dashboard_content} pt10 tabsglobalstyle `}>
        <div className={`${styles.dashboard_content_item} ${styles.padding10}`}>
          <div className={`${styles.backarrowstyle} ${styles.paddingtb10}`}>
            <span className={styles.backarrow} onClick={()=> {setViewLabel(true); setLevelDetails(''); setFilterDataLevel(''); setLabelBussiness(''); setActionData(''); setLoaderLabelDetails(true); }}>
              <img src="/images/back-arrow1.png" alt="arrow" /> <label>Back to level income</label>
            </span>
          </div>
          <div className={`tableholder ${styles.bordercolor}`}>
            <div className={`${styles.tableheadertop} ${styles.titlefilter} `}>
              <div className={` ${styles.tableheadertop} ${styles.titlefiltertitle} `}>
                Level <b> {actionData && actionData} </b> total income <label> {labelBussiness && labelBussiness} </label> <span>MDR</span>
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
                      const filteredData = filterDataLevel.filter((entry) =>
                        entry.transDate.toString().toLowerCase().includes(currValue?.toString().toLowerCase()) ||
                        entry.leveUserById.toString().toLowerCase().includes(currValue?.toString().toLowerCase())||
                        entry.business.toString().toLowerCase().includes(currValue?.toString().toLowerCase())
                      );
                      setLevelDetails(filteredData);
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

            <div className="tableresponsive" style={{position: "relative"}}>
              {loaderLabelDetails ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb", position: "absolute", left: "50%", top: "90px", zIndex: "2" }} /></div> : '' }
              {dataNotFoundLabelDetails ? <div className="alertmesstable">Somethig went wrong</div> : '' }
              {levelDetails.length === '' ? <div className="alertmesstable">No Records found</div> : '' }
              {levelDetails && levelDetails ? 
              <DataGrid
                columns={incomeColumnLabelDetails}
                rows={levelDetails}
                getRowId={(row) => row.slno}
                pageSize={pageSizeDetails}
                onPageSizeChange={(newPageSize) => setPageSizeDetails(newPageSize)}
                rowsPerPageOptions={[10, 20, 30, 50, 100]}
                disableColumnMenu={true}
                disableColumnFilter={true}
                getRowHeight={() => 'auto'}
              /> 
              : <></> 
              }
            </div>
          </div>
        </div>
      </div>
      </>
    }
    </>
  );
};

export default LevelIncome;
