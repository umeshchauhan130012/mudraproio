import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import ChatArea from "../../components/chatArea";
import { supportNewTicket, supportTicketCategoryList, supportTicketList } from "../../redux/actions/support";
import stylesD from "../../styles/dashboard.module.css";
import stylesP from "../../styles/profile.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Moment from "react-moment";


const Support = () => {
  const [SelectStake, setSelectStake] = useState("");
  const [ticketCategoryList, setTicketCategoryList] = useState("");
  const [paymentModeAlert, setPaymentModeAlert] = useState("");
  const [subjectModeAlert, setSubjectModeAlert] = useState("");
  const [discribeIssue, setDiscribeIssue] = useState("");
  const [history, setHistory] = useState("");
  const [active, setActive] = useState("");
  const [indexId, setIndexId] = useState("");
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketCategory, setTicketCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [discribeYourIssue, setDiscribeYourIssue] = useState("");
  const [dataSuccess, setDataSuccess] = useState("");
  const [loader, setLoader] = useState(false);
  const status = useSelector((state) => state);
  const dispatch = useDispatch();

  const residential = (event) => {
    setSelectStake(event.target.value);
  };

  const removePaymentError = () => {
    setTimeout(() => {
      setPaymentModeAlert("");
    }, 2000);
  };

  const removeSubjectError = () => {
    setTimeout(() => {
      setSubjectModeAlert("");
    }, 2000);
  };

  const removeDiscribeError = () => {
    setTimeout(() => {
      setDiscribeIssue("");
    }, 2000);
  };

  const formDataSuccess = () => {
    setDiscribeYourIssue("");
    setSelectStake(null);
    setSubject("");
    setTimeout(() => {
      setDataSuccess("");
    }, 2000);
  };

  const hanleSubmit = (e) => {
    e.preventDefault();
    if (SelectStake === "") {
      setPaymentModeAlert("Please select Valid Issue");
      removePaymentError();
    }
    if (subject === "") {
      setSubjectModeAlert("Subject is required");
      removeSubjectError();
    }
    if (discribeYourIssue === "") {
      setDiscribeIssue("Describe your issue required");
      removeDiscribeError();
    }
    if(SelectStake && subject && discribeYourIssue) {
    let apiData = {
      CategoryName : SelectStake,
      Subject : subject,
      Message : discribeYourIssue,
  };
    dispatch(supportNewTicket(apiData));
  }
}

  useEffect(() => {
    dispatch(supportTicketCategoryList());
  }, []);

  useEffect(() => {
    const apiData = {};
    dispatch(supportTicketList(apiData));
  }, []);

  useEffect(() => {
    if (status.ticketCategoryList.data !== "") {
      if (status.ticketCategoryList.data.data.message === "success") {
        setTicketCategoryList(status.ticketCategoryList.data.data.result);
      }
    }

    if (status.newTicket.data !== "") {
      if (status.newTicket.data.data.message === "success") {
        setDataSuccess("Ticket Created Success");
        formDataSuccess();
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.ticketList.data !== "") {
      if (status.ticketList.data.data.message === "success") {
        setHistory(status.ticketList.data.data.result);
      }
    }
  }, [status]);


  
  // var now = new Date('2022-12-20T14:09:46.263');
  // var dateStringWithTime = moment(now).format('YYYY-MM-DD HH:mm:ss');
  // console.log(dateStringWithTime);


  return (
    <div className={`${stylesD.supportPage} ${stylesP.supportPage}`}>
      <ul className={stylesD.pagetabber}>
        <li className={stylesD.active}>Support</li>
      </ul>
      <div className={`${stylesP.dashboard_content} ${stylesP.accountSetting} ${"accountsettingpage"}`}>
        <div className={`${stylesP.padding10} ${active ? stylesP.active : ""}`}>
          <div
            className={`${stylesP.profileContainer} ${stylesP.settingContainer} ${stylesP.settingGroup} ${stylesP.mx} ${stylesP.columnrevers}`}
          >
            {!active ? (
              <div className={`${stylesP.profileWidth} ${stylesP.p}`}>
                <div className={` ${stylesP.thirdColor} ${stylesP.p}`}>
                  <label>Create New Ticket</label>{" "}
                </div>
                <form className="formstyle">
                <div className={`${stylesD.profileinput} ${"input_item"}`}>
                  <FormControl variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">
                      Select Issue
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
                      {ticketCategoryList &&
                        ticketCategoryList.map((data, index) => (
                          <MenuItem value={data.dataFieldText} key={index}>
                            
                            {data.dataFieldText}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                  {paymentModeAlert && paymentModeAlert ? (
                    <div className="validationalert">{paymentModeAlert}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className={`${stylesD.profileinput} ${"input_item"}`}>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="filled-adornment-name">
                      Subject
                    </InputLabel>

                    <FilledInput
                      id="filled-adornment-name"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      name="email"
                      endAdornment={
                        <InputAdornment position="end">
                          <>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7 8H13M7 12H17H7Z"
                                stroke="#121212"
                                strokeOpacity="0.54"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 20.29V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7.961C7.66123 17 7.36531 17.0675 7.09511 17.1973C6.82491 17.3271 6.58735 17.516 6.4 17.75L4.069 20.664C3.99143 20.7612 3.88556 20.8319 3.76604 20.8664C3.64652 20.9008 3.51926 20.8972 3.40186 20.8561C3.28446 20.815 3.18273 20.7385 3.11073 20.6371C3.03874 20.5357 3.00005 20.4144 3 20.29V20.29Z"
                                stroke="#121212"
                                strokeOpacity="0.54"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </>
                        </InputAdornment>
                      }
                      variant="filled"
                    />
                  </FormControl>
                  {subjectModeAlert && subjectModeAlert ? (
                    <div className="validationalert">{subjectModeAlert}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className={`${stylesD.profileinput} ${"input_item"}`}>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="filled-adornment-name">
                      Describe your issue
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-name"
                      onChange={(e) => setDiscribeYourIssue(e.target.value)}
                      name="discriveissue"
                      value={discribeYourIssue}
                      label="Multiline"
                      multiline
                      rows={4}
                      endAdornment={
                        <InputAdornment position="end">
                          <>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                position: "absolute",
                                marginTop: "-80px",
                              }}
                            >
                              <path
                                d="M7 8H13M7 12H17H7Z"
                                stroke="#121212"
                                strokeOpacity="0.54"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M3 20.29V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7.961C7.66123 17 7.36531 17.0675 7.09511 17.1973C6.82491 17.3271 6.58735 17.516 6.4 17.75L4.069 20.664C3.99143 20.7612 3.88556 20.8319 3.76604 20.8664C3.64652 20.9008 3.51926 20.8972 3.40186 20.8561C3.28446 20.815 3.18273 20.7385 3.11073 20.6371C3.03874 20.5357 3.00005 20.4144 3 20.29V20.29Z"
                                stroke="#121212"
                                strokeOpacity="0.54"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </>
                        </InputAdornment>
                      }
                      variant="filled"
                    />
                  </FormControl>
                  {discribeIssue && discribeIssue ? (
                    <div className="validationalert">{discribeIssue}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="buttoncontain" style={{marginTop: 35,}}>
                   {dataSuccess && dataSuccess ?
                  <div className="successMessage">{dataSuccess && dataSuccess}</div>
                  : ""}
                  <Button primary onClick={hanleSubmit} >SEND {loader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }} />) : ( "" )}</Button>
                </div>
                </form>
              </div>
            ) : (
              <>
                <ChatArea active={active} ticketId={indexId} ticketSubject={ticketSubject} ticketCategory={ticketCategory} />
              </>
            )}
            {
               history && history.length !== 0 ?
              <div className={`${stylesP.profileWidth} ${stylesP.p}`}>
                <div className={stylesD.historyOverStyle}>
                  <div className={stylesD.chatmaintitle}>
                    <label>History</label>
                    <div className={stylesD.defaultbtnchat} onClick={() => setActive()} style={{opacity: !active && "0"}}>NEW TICKET</div>
                  </div>
                  <div className={stylesD.historyGroup}>

                  {
                    history && history.map((item, index) => (
                    <div className={`${stylesD.historyItem} ${ active === index+1 && stylesD.active}`} onClick={() => {(setActive(index+1)); setIndexId(item.ticketId); setTicketSubject(item.subject); setTicketCategory(item.catName)}} key={index+1}>
                      <div className={stylesD.chatstroageitem}>
                        <div className={stylesD.chatstroageitemInner}>
                          <div className={`${stylesD.chatstroageitem5} ${stylesD.chatitemname}`}>{item.catName}</div>
                          <div className={`${stylesD.chatstroageitem5} ${stylesD.chatdate}`}><Moment format="DD-MM-YYYY h:m A" date="">{item.entryDate}</Moment></div>
                        </div>
                        <div className={stylesD.chatstroageitemInner}>
                          <div className={`${stylesD.chatstroageitem5} ${stylesD.chatitemsubject} `}>{item.subject}</div>
                          <div className={`${stylesD.chatstroageitem5} ${stylesD.chatitemstatusId} `}><span dataname={item.status}>{item.status}</span>{item.ticketId}</div>
                        </div>
                      </div>
                    </div>
                    ))
                  }

                  </div>
                </div>
              </div>
             : 
              <div className={`${stylesP.profileWidth} ${stylesP.p}`} style={{ textAlign: "center" }}>
                <img
                  src="/images/support-bg.png"
                  alt="user"
                  className={stylesP.mx}
                />
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
