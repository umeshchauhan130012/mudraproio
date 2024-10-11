import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import styles from "../../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { rewardsStatusDetails, rewardsTrackingReportDetails } from "../../redux/actions/reward";
import CircularProgress from "@mui/material/CircularProgress";


export const Rewards = () => {

  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  const [loader, setLoader] = useState(true);
  const [trackingReportDetail, setTrackingReportDetail] = useState("");
  const [dataNotFound, setDataNotFound] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [rewardStatus, setRewardStatus] = useState('');
  const [progressStatus, setProgressStatus] = useState();

  // var calculateProg = ((rewardStatus.currentBusiness / rewardStatus.targetBusiness)*100);
  // console.log(calculateProg);

  useEffect(() => {
    const apiData = {};
    dispatch(rewardsStatusDetails(apiData));
  }, []);

  useEffect(() => {
    let apiData = {};
    dispatch(rewardsTrackingReportDetails(apiData));
  }, []);

  useEffect(() => {
    if (status.trackingReportDetail.data !== "") {
      if (status.trackingReportDetail.data.data.statusCode === "200") {
        setTrackingReportDetail(status.trackingReportDetail.data.data.result);
        setLoader(false);
        return;
      }
    }

    if (status.trackingReportDetail.data !== "") {
      if (status.trackingReportDetail.data.data.statusCode === "500") {
        setDataNotFound(true);
        return;
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.rewardDetail.data !== "") {
      if (status.rewardDetail.data.data.statusCode === "200") {
        setRewardStatus(status.rewardDetail.data.data.result[0]);
      }
    }
  }, [status]);



  const incomeColumn = [
    {
      field: "allTeamBusiness",
      headerName: "Rank",
      minWidth: 200, 
      flex: 1,
      renderCell: (status) => {
        return <div className={styles.imageContain}>
            <img src={'https://stage-web.mudrapro.io/'+status.row.imgrank} alt="" height={50} width={50} />
            <label style={{paddingLeft: "10px"}}>
              <h5>{status.row.uRank}</h5>
              <span><cite>{status.row.amount} </cite> USD Reward</span>
            </label>
          </div> ;
      }
    },
    {
      field: "currentTeamBusiness",
      headerName: "Current Business",
      minWidth: 270, 
      flex: 1,
      renderCell: (status) => {
        return <div className={styles.titlewidthtabl}>
          <h5>{status.row.currentTeamBusiness} <span>USD</span></h5>
        </div>;
      },
    },
    {
      field: "reqBusiness",
      headerName: "Target",
      minWidth: 270, 
      flex: 1,
      renderCell: (status) => {
        return <div className={styles.titlewidthtabl}>
          <h5>{status.row.reqBusiness} <span>USD</span></h5>
        </div>;
      },
    },
    {
      field: "statusx",
      headerName: "Status",
      minWidth: 200, 
      flex: 1,
      renderCell: (status) => {
        return <div className={` ${styles.titlewidthtablouter} ${styles.alignitencenter} `}>
          <div className={styles.statusDesign}>
            {status.row.statusx}
          </div>
        </div>;
      }
    },
  ];

  return (
    <>
      <ul className={styles.pagetabber}>
        <li className={styles.active}>Rewards</li>
      </ul>
      <div className={` ${styles.dashboard_content} pt10 nosidebarinner`}>
        <div className={` ${styles.dashboard_content_item} ${styles.has2col} `}>
          <div className={` ${styles.padding10} ${styles.customcolw4} `}>
            <div
              className={`${styles.bordercolor} ${styles.padding15} ${styles.dflexdirecol}  ${styles.height100}`}
            >
              <div className={styles.reborttitle}>
                <div className={styles.rebicon}>
                  <img
                    src={rewardStatus && rewardStatus.uRankimgurl === '' ? '/images/smallLogo.png' : rewardStatus && rewardStatus.uRankimgurl}
                    height={35}
                    width={35}
                    alt={rewardStatus && rewardStatus.uRank}
                  />
                </div>
                <div className={styles.rebitext}>
                  <h5>{rewardStatus && rewardStatus.uRank}</h5>
                  <p>Current Rank</p>
                </div>
              </div>
              <ul className={`${styles.reb_item_wrp} ${styles.paddindics}`}>
                <li className={styles.nobefore}>
                  <div className={styles.teamidwrp}>
                    <div className={styles.teamid}>
                      <span>First strong team ID</span>
                      <h5>{rewardStatus && rewardStatus.strongLeg}</h5>
                    </div>
                    <div className={styles.viewteamid}>
                    {rewardStatus && rewardStatus.strongLeg ? <Link to="/user/team/my-team">View Team</Link> : ''}
                    </div>
                  </div>
                </li>
                <li>
                  <span>First strong team business</span>
                  <h5>
                  {rewardStatus && rewardStatus.strongLegBusines} <span>USD</span>
                  </h5>
                </li>
                <li className={styles.nobefore}>
                  <div className={styles.teamidwrp}>
                    <div className={styles.teamid}>
                      <span>Second strong team ID</span>
                      <h5>{rewardStatus && rewardStatus.secondLeg}</h5>
                    </div>
                    <div className={styles.viewteamid}>
                    {rewardStatus && rewardStatus.secondLeg ? <Link to="/user/team/my-team">View Team</Link> : '' }
                    </div>
                  </div>
                </li>
                <li>
                  <span>Second strong team business</span>
                  <h5>
                  {rewardStatus && rewardStatus.secondLegLegBusines} <span>USD</span>
                  </h5>
                </li>
                <li>
                  <span>All leg business</span>
                  <label style={{fontWeight: "500"}}>
                    {rewardStatus && rewardStatus.weakerLegBusines} <span style={{color: "#afafaf"}}>USD</span>
                  </label>
                  <span style={{marginTop: "10px"}}>Target ratio</span>
                  <ol className={styles.legalbusines}>
                    <li>
                      <label>
                        F1 <span>{rewardStatus && rewardStatus.targetFirst}</span> %
                      </label>{" "}
                      <label>
                        <span>{rewardStatus && rewardStatus.targetFirstBusiness}</span> USD
                      </label>
                    </li>
                    <li>
                      <label>
                        F2 <span>{rewardStatus && rewardStatus.targetsecond}</span> %
                      </label>{" "}
                      <label>
                        <span>{rewardStatus && rewardStatus.targetsecondBusiness}</span> USD
                      </label>
                    </li>
                    <li>
                      <label>
                      All <span>{rewardStatus && rewardStatus.targetall}</span> %
                      </label>{" "}
                      <label>
                        <span>{rewardStatus && rewardStatus.targetallBusiness}</span> USD
                      </label>
                    </li>
                  </ol>
                  </li>
              </ul>
              <div className={` ${styles.teamidwrpall} ${styles.margintauto} `}>
                <div className={styles.rebicon}>
                  <img
                    src={rewardStatus && rewardStatus.uRanknextimgurl}
                    height={30}
                    width={30}
                    alt={rewardStatus && rewardStatus.uNextRank}
                  />
                </div>
                <div className={styles.teamidwrpallinner}>
                  <div className={styles.teamidall}>
                    <h5>{rewardStatus && rewardStatus.uNextRank}</h5>
                    <span>Next Rank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={` ${styles.padding10} ${styles.customcolw8} `}>
            <div
              className={`${styles.bordercolor} ${styles.padding15} ${styles.dflexdirecol} ${styles.height100}`}
            >
              <div className={styles.reborttitle}>
                <div className={styles.rebicon}>
                  <img
                    src={rewardStatus && rewardStatus.uRanknextimgurl}
                    height={35}
                    width={35}
                    alt={rewardStatus && rewardStatus.uNextRank}
                  />
                </div>
                <div className={styles.rebitext}>
                  <h5>{rewardStatus && rewardStatus.uNextRank}</h5>
                  <p>Next Rank</p>
                </div>
              </div>

              <div className={styles.rewardprogress}>
                <div className={styles.rewardprogressitem}>
                  <div className={styles.progressitem}>
                    <h5>Start Business</h5>
                    <label>
                    {rewardStatus && rewardStatus.startBusiness} <span>USD</span>
                    </label>
                  </div>
                  <div className={styles.progressitem}>
                    <h5>Target Business</h5>
                    <label>
                    {rewardStatus && rewardStatus.targetBusiness} <span>USD</span>
                    </label>
                  </div>
                </div>
                <div className={styles.rewardprogressmain}>
                  <span>
                    <span style={ { width: rewardStatus.currentBusiness ? parseFloat(rewardStatus.currentBusiness / rewardStatus.targetBusiness)*100+'%' : ''}}></span>
                  </span>
                </div>
                <div className={styles.progressitemfooter}>
                  <div className={styles.progressitem}>
                    <h6>Current Business</h6>
                    <label>
                    {rewardStatus && rewardStatus.currentBusiness} <span>USD</span>
                    </label>
                  </div>
                  <div className={styles.progressitem}>
                    <h5 style={{marginBottom: "10px"}}>Target ratio</h5>
                    <ol className={styles.legalbusines}>
                      <li>
                        <label>
                          F1 <span>{rewardStatus && rewardStatus.targetFirst}</span> %
                        </label>{" "}
                        <label>
                          <span>{rewardStatus && rewardStatus.targetFirstBusiness}</span> USD
                        </label>
                      </li>
                      <li>
                        <label>
                          F2 <span>{rewardStatus && rewardStatus.targetsecond}</span> %
                        </label>{" "}
                        <label>
                          <span>{rewardStatus && rewardStatus.targetsecondBusiness}</span> USD
                        </label>
                      </li>
                      <li>
                      <label>
                      All <span>{rewardStatus && rewardStatus.targetall}</span> %
                      </label>{" "}
                      <label>
                        <span>{rewardStatus && rewardStatus.targetallBusiness}</span> USD
                      </label>
                    </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className={` ${styles.teamidwrpall} ${styles.margintauto} `}>
                <div className={styles.rebicon}>
                  <img
                    src="/images/reward.png"
                    height={20}
                    width={20}
                    alt="Pearl"
                    style={{borderRadius: "0px"}}
                  />
                </div>
                <div className={styles.teamidwrpallinner}>
                  <div className={styles.teamidall}>
                    <h5>Rewards</h5>
                    <span>
                    {rewardStatus && rewardStatus.nextRankReward} <em>USD</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.dashboard_content_item} ${styles.padding10}`}>
        <div className={`tableholder ${styles.bordercolor} ${styles.bordercolor}`}>
          <div className={`${styles.tableheadertop} ${styles.titlefilter} `} style={{paddingTop: "10px", paddingBottom: "10px"}}>
            <div className="tableresponsive" style={{borderTop: "0px"}}>
                  {trackingReportDetail && trackingReportDetail ? 
                  <DataGrid
                    columns={incomeColumn}
                    rows={trackingReportDetail}
                    getRowId={(row) => row.id}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 20, 30, 50, 100]}
                    disableColumnMenu={true}
                    disableColumnFilter={true}
                    disableColumnSelector={true}
                    getRowHeight={() => 'auto'}
                  /> 
                  : <>
                  {loader ? <div style={{textAlign:'center'}}><CircularProgress size="25px" style={{ color: "#0164eb", position: "absolute", left: "50%", top: "90px", zIndex: "2" }} /></div> : '' }
                  {dataNotFound ? <div className="alertmesstable">Somethig went wrong</div> : '' }
                  {trackingReportDetail.length === 0 ? <div className="alertmesstable">No Records found</div> : '' }
                  </> }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
