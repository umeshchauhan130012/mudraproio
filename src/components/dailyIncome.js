import React, { useEffect, useState } from 'react'
import styles from "../styles/dashboard.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import ReactPaginate from "react-paginate";
import { transactionsDailyReport } from '../redux/actions/transaction';

const DailyIncome = () => {

    const dispatch = useDispatch();
    const status = useSelector((state) => state);
    const [dailyIncome, setDailyIncome] = useState([]);
    const [SelectStake, setSelectStake] = useState("");
    const [loader, setLoader] = useState(true);
    const [dataNotFound, setDataNotFound] = useState(false);
  
    const [pageNumber, setPageNumber] = useState(0);
    const userPerPage = 10;
    const pagesVisited = pageNumber * userPerPage;
    const pageCount = Math.ceil(dailyIncome.length / userPerPage);
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };
  

    useEffect(() => {
      let apiData = {};
      dispatch(transactionsDailyReport(apiData));
    }, []);
  
    useEffect(() => {
      if (status.transactionsDailyReport.data !== "") {
        if (status.transactionsDailyReport.data.data.statusCode === "200") {
          setDailyIncome(status.transactionsDailyReport.data.data.result);
          setLoader(false);
          return;
        }
      }

      if (status.transactionsDailyReport.data !== "") {
        if (status.transactionsDailyReport.data.data.statusCode === "500") {
          setDataNotFound(true);
          return;
        }
      }
      
      
    }, [status]);
  
    const residential = (event) => {
      setSelectStake(event.target.value);
    };


  return (
    <div
    className={`${styles.dashboard_content_item} ${styles.padding10}`}
  >
    <div className={`tableholder ${styles.bordercolor}`}>
      <div className={styles.tableheadertop}>
        Total Daily Income &nbsp;<label>1243.71</label>{" "}
        <span>MDR</span>
      </div>
      <div className={styles.tablefilterwrp}>
        <div className={styles.tablefilterdroup}>
          <div className="teablefilterdroupdown">
            <div className="input_item">
              <FormControl variant="filled">
                <InputLabel id="demo-simple-select-filled-label">
                  All Transactions
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={SelectStake}
                  onChange={residential}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className={styles.tablefiltersearch}>
          <div className={styles.tablesearchform}>
            <input
              type="text"
              placeholder="Search"
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
      <div
        className={` ${styles.customdatatablewrap} ${styles.padding15} ${styles.paddingtp0} `}
      >
        <div
          className={`${styles.customdatatable} ${styles.datatabletopborder}`}
        >
          {loader ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb" }} /></div> : '' }
          <table>
            <tbody>
              {dataNotFound ? <tr><td>Somethig went wrong</td></tr> : '' }
              {dailyIncome.length === 0 ? <tr><td>No Records found</td></tr> : '' }
              {dailyIncome &&
                dailyIncome
                  .slice(pagesVisited, pagesVisited + userPerPage)
                  .map((item, ind) => (
                    <tr key={ind}>
                      <td>
                        <div
                          className={` ${styles.titlewidthtablouter} ${styles.alignitencenter} `}
                        >
                          <div className={styles.titlewidthtabl}>
                            <h5>{item.transtype}</h5>
                            <label>
                              <span>{item.transdate}</span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div
                          className={` ${styles.titlewidthtabl} ${styles.dflexalitmcenter} `}
                        >
                          <div className={styles.titlelabelblock}>
                            <label>
                              {item.transactionType === "C" ? (
                                <em
                                  className={` ${styles.lightgreen}`}
                                >
                                  {item.amountMDR}
                                </em>
                              ) : item.transactionType === "D" ? (
                                <em
                                  className={` ${styles.lightgreen} ${styles.lightredcolor} `}
                                >
                                  {item.amountMDR}
                                </em>
                              ) : (
                                <em
                                  className={` ${styles.lightgreen} ${styles.lightredcolor} `}
                                >
                                  0
                                </em>
                              )}
                              <cite>MDR - </cite>
                              {item.transactionType === "C" ? (
                                <>{item.amountUSD}</>
                              ) : item.transactionType === "D" ? (
                                <>{item.amountUSD}</>
                              ) : (
                                "0"
                              )}
                              <cite> USD</cite>
                            </label>
                            <label>
                              <span>
                                Coin Rate {item.coinRate} USD
                              </span>
                            </label>
                          </div>
                          {item.transactionType === "C" ? (
                            <div className={` ${styles.arrowsend}`}>
                              <img
                                src="/images/bottomarrow.png"
                                alt="arrow"
                                height={30}
                                width={30}
                              />
                            </div>
                          ) : item.transactionType === "D" ? (
                            <div
                              className={` ${styles.arrowsend} ${styles.arrowsendred}`}
                            >
                              <img
                                src="/images/toparrow.png"
                                alt="arrow"
                                height={30}
                                width={30}
                              />
                            </div>
                          ) : (
                            <div
                              className={` ${styles.arrowsend} ${styles.arrowsendred}`}
                            >
                              <img
                                src="/images/block-icon.png"
                                alt="arrow"
                                height={30}
                                width={30}
                              />
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {dailyIncome.length < 10 ? (
          ""
        ) : (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"tablePaginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        )}
      </div>
    </div>
  </div>
  )
}

export default DailyIncome
