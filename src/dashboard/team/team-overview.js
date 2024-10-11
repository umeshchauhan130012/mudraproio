import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/dashboard.module.css';
import { dashboardTeamLevelSummaryReport, dashboardTeamLevelWiseList, dashboardTeamSummaryDetail } from "../../redux/actions/dashboard";
import ReactPaginate from "react-paginate";
import CircularProgress from "@mui/material/CircularProgress";
import { image_url } from '../../config';

export const TeamOverview = () => {
  const [teamDetails, setTeamDetails] = useState(true);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [levelSummaryReport, setLevelSummaryReport] = useState([]);
  const [totalIncome, setTotalIncome] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;
  const pageCount = Math.ceil(levelSummaryReport.length / userPerPage);

  const [loaderDetails, setLoaderDetails] = useState(true);
  const [levelReport, setLevelReport] = useState('');
  const [filterData, setFilterData] = useState(levelReport);
  const [pageNumberDetails, setPageNumberDetails] = useState(0);
  const [dataNotFound, setDataNotFound] = useState('');
  const [actionData, setActionData] = useState('');
  const userPerPageDetails = 10;
  const pagesVisitedDetails = pageNumberDetails * userPerPageDetails;
  const pageCountDetails = Math.ceil(filterData.length / userPerPageDetails);
  const changePageDetails = ({ selected }) => {
      setPageNumberDetails(selected);
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    let apiData = {};
    dispatch(dashboardTeamLevelSummaryReport(apiData));
  }, []);

  useEffect(() => {
    let apiData = {};
    dispatch(dashboardTeamSummaryDetail(apiData));
  }, []);

  const handleGetLabel = (e) => {
    let apiData = { "Level" : e, "Status" : 0}
    setActionData(e);
    dispatch(dashboardTeamLevelWiseList(apiData));
  };

  useEffect(() => {
    if (status.teamLevelSummaryReport.data !== "") {
      if (status.teamLevelSummaryReport.data.data.statusCode === "200") {
        setLevelSummaryReport(status.teamLevelSummaryReport.data.data.result);
        setLoader(false);
        return;
      }
    }

  }, [status]);

  useEffect(() => {
  if (status.teamSummaryDetail.data !== "") {
    if (status.teamSummaryDetail.data.data.statusCode === "200") {
      setTotalIncome(status.teamSummaryDetail.data.data.result[0]);
      setLoader(false);
    }
  }
}, [status]);


const handleStatusDataAll = ()=>{
  let apiData = { "Level" : parseInt(actionData), "Status" : 0}
  dispatch(dashboardTeamLevelWiseList(apiData));
}
const handleStatusDataActive = ()=>{
  let apiData = { "Level" : parseInt(actionData), "Status" : 1}
  dispatch(dashboardTeamLevelWiseList(apiData));
}
const handleStatusDataInactive = ()=>{
  let apiData = { "Level" : parseInt(actionData), "Status" : 2}
  dispatch(dashboardTeamLevelWiseList(apiData));
}

useEffect(() => {
  if (status.teamLevelWiseList.data !== "") {
    if (status.teamLevelWiseList.data.data.statusCode === "200") {
      setLevelReport(status.teamLevelWiseList.data.data.result);
      setFilterData(status.teamLevelWiseList.data.data.result);
      setLoaderDetails(false);
      return;
    }
  }  
}, [status]);

useEffect(() => {
if(levelReport.length < 1) {
  setDataNotFound("data not found");
}
}, [levelReport]);


const [active, setSelected] = useState(0);
  const toggle = (ind) => {
  if (active === ind) {
  return setSelected(null);
  }
  setSelected(ind);
  };

  return (
    <>
    {teamDetails ? <>
    <div className={` ${styles.dashboard_content} pt10 tabsglobalstyle `}>
      <div className={styles.addoverflow}>
      <div className={`${styles.dashboard_content_item} ${styles.addoverflowItem} ${styles.padding10}`} >
        <div className={` ${styles.differbgcolor} ${styles.bordercolor} ${styles.padding15}`} >
           <div className={styles.total_members}>
             <h4>Total Members</h4>
             <p><cite>{totalIncome.totalMember === null || totalIncome === "" ? <CircularProgress size="13px"/> : totalIncome.totalMember  } </cite> Members in your team</p>
           </div>
        </div>
      </div>
      <div className={`${styles.dashboard_content_item} ${styles.addoverflowItem}`} >

        {loader ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb" }} /></div> : ""}
        {
          levelSummaryReport && levelSummaryReport.slice(pagesVisited, pagesVisited + userPerPage).map((item, ind) => {
            return (
              <div className={`${styles.memberlabelitem} ${styles.padding3to10}`} key={ind}>
                <div className={`${styles.bordercolor} ${styles.padding13to15}`} onClick={()=> { handleGetLabel(item.level); setTeamDetails(false)}}>
                  <div className={styles.total_members_cont}>
                    <h5>{item.levelname}</h5>
                    <p><span><cite>{item.teamMember}</cite>Members</span><span><cite>{item.teamBusiness}</cite>USD Stacked</span></p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
      {levelSummaryReport.length < 10 ? (
          ""
        ) : (
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            pageRangeDisplayed={5}
            containerClassName={"tablePaginationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
          )}
    </div>
    </> 
    : <>
    <div className={` ${styles.dashboard_content} pt10 tabsglobalstyle `}>
      <div className={`${styles.backarrowstyle} ${styles.padding10}`}>
        <span className={styles.backarrow} onClick={()=> {setTeamDetails(true); setLevelReport(""); setLoaderDetails(true)}}>
          <img src="/images/back-arrow1.png" alt="arrow" /> <label>Back to Levels</label>
        </span>
      </div>

      <div className={`${styles.dashboard_content_item} ${styles.padding10}`} >
        <div className={` ${styles.differbgcolor} ${styles.bordercolor} ${styles.padding15}`} >
           <div className={styles.total_members}>
             <h4>Level {actionData}</h4>
             <p><cite>{levelReport.length}</cite>Members in your team</p>
           </div>
        </div>
      </div>
      <div className={`${styles.dashboard_content_item} ${styles.padding10}`} >
        <div className={`${styles.bordercolor} ${styles.padding15}`} >
              <div className={` ${styles.customtablewrap} ${styles.addoverflow} `}>
                <div className={` ${styles.customtableheader} ${styles.addoverflowItemthou} `}>
                    <ul>
                        <li><span>Sort By</span><div className={styles.changefilter}><span className={ active === 0 ? `${styles.filtertab} ${styles.active}` : `${styles.filtertab}`} onClick={ () => { toggle(0); handleStatusDataAll()}}>All</span><span className={active === 1 ? `${styles.filtertab} ${styles.active}` : `${styles.filtertab}`} onClick={() => { toggle(1); handleStatusDataActive() }}>Active</span><span className={active === 2 ? `${styles.filtertab} ${styles.active}` : `${styles.filtertab}`} onClick={ () => { toggle(2); handleStatusDataInactive() }}>Inactive</span></div></li>
                    </ul>
                </div>
                <div className={` ${styles.customtablebody} ${styles.addoverflowItemthou} `}>
                {loaderDetails ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb" }} /></div> : ""}
                {levelReport && levelReport.length < 1 ? <div style={{textAlign: "center"}}>{dataNotFound}</div> : ""}
                  <ul>
                    {
                    levelReport && levelReport.slice(pagesVisitedDetails, pagesVisitedDetails + userPerPageDetails).map((item, ind) => {
                      return (
                        <li key={ind}>
                          <span className={styles.userarea}>
                            <img src={item.userImageUrl === null ? '/images/circleuser.png' : image_url+item.userImageUrl } alt={item.fullname} height={45} width={45} />
                            <label>
                                <h6>{item.fullname}</h6>
                                <p><cite>{item.totalBusiness}</cite> USD Stacked, &nbsp;&nbsp;&nbsp;&nbsp;<cite>{item.teamBusiness}</cite>Team Business</p>
                            </label>
                          </span>
                          <span className={styles.useractivein}>
                              <data className={`${styles.status} ${ item.userStatus.toLowerCase()}`}>{item.userStatus}</data>
                          </span>
                        </li>
                      )
                    })
                    }
                  </ul>
                </div>
              </div>
                {levelReport.length < 10 ? (
                ""
                ) : (
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCountDetails}
                    onPageChange={changePageDetails}
                    pageRangeDisplayed={5}
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
    </>}
    </>
  )
}
