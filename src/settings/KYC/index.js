import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { image_url } from "../../config";
import {
  userProfileDetails,
} from "../../redux/actions/profile";
import {
  settingUpdateKYCDetails,
} from "../../redux/actions/setting";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../../styles/profile.module.css";

const KYCVerification = () => {
  const initialInput = {
    IdProofTypeId: "",
    IdProofNumber: "",
  };
  const [formInput, setFormInput] = useState(initialInput);
  const [success, setSuccess] = useState("");
  const [profileDetails, setProfileDetails] = useState("");
  const [imgfile1, setUploadimg1] = useState("");
  const [imgprofile1, setUploadProfileimg1] = useState("");
  const [imgfile2, setUploadimg2] = useState("");
  const [imgprofile2, setUploadProfileimg2] = useState("");
  const [dashboardDetails, setDashboardDetails] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [hideOtherField, setHideOtherField] = useState("");
  const [requredAll, setRequredAll] = useState("");
  const dispatch = useDispatch();
  const status = useSelector((state) => state);

  useEffect(() => {
    let apiData = {};
    dispatch(userProfileDetails(apiData));
  }, []);

  useEffect(() => {
    if (status.userProfileDetails.data !== "") {
      if (status.userProfileDetails.data.data.statusCode === "200") {
        setProfileDetails(status.userProfileDetails.data.data.result[0]);
      }
    }

    if (status.updateKYCDetails.data !== "") {
      if (status.updateKYCDetails.data.data.statusCode === "200") {
        setSuccess(status.updateKYCDetails.data.data.message);
        setLoader(false);
        removeSuccess();
      }
    }

    if (status.dashboardDetails.data !== "") {
      if (status.dashboardDetails.data.data.statusCode === "200") {
        setDashboardDetails(status.dashboardDetails.data.data.result[0]);
      }
    }
  }, [status]);

  const handleChange = (e) => {
    setFormInput((preState) => {
      return { ...preState, [e.target.name]: e.target.value };
    });
  };

  const showFormFun = (e) => {
    setHideOtherField(e.target.value);
    setShowForm(true);
  };

  const fileUpload1 = (e) => {
    setUploadimg1((imgfile1) => [URL.createObjectURL(e.target.files[0])]);
    setUploadProfileimg1(e.target.files[0]);
  };

  const fileUpload2 = (e) => {
    setUploadimg2((imgfile2) => [URL.createObjectURL(e.target.files[0])]);
    setUploadProfileimg2(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    if (
      formInput.IdProofTypeId !== initialInput.IdProofTypeId &&
      formInput.IdProofNumber !== initialInput.IdProofNumber &&
      imgprofile1 !== "" && imgprofile2 !== ""
    ) {
      var bodyFormData = new FormData();
      bodyFormData.append("IdProof", imgprofile1);
      bodyFormData.append("AddressProof", imgprofile2);
      bodyFormData.append("IdProofTypeId", formInput.IdProofTypeId);
      bodyFormData.append("IdProofNumber", formInput.IdProofNumber);
      dispatch(settingUpdateKYCDetails(bodyFormData));
      setFormInput(initialInput);
      setUploadProfileimg1("");
      setUploadProfileimg2("");
    }
    else {
    setRequredAll("All filled required");
    setLoader(false);
    removeError();
  }
  };

  const removeError = () => {
    setTimeout(() => {
      setRequredAll("");
    }, 3000);
  };

  
  const removeSuccess = () => {
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div
      className={`${styles.dashboard_content} ${styles.accountSetting} ${styles.kyc}`}
    >
      <div className={`${styles.padding10} ${styles.mx}`}>
        <div
          className={`${styles.profileContainer} ${styles.settingContainer}`}
        >
          <div className={`${styles.thirdColor} ${styles.flex} ${styles.p}`}>
            <label>Your Profile id</label>{" "}
            <span className={styles.profileid}>{dashboardDetails.loginId}</span>
          </div>
          <div
            className={`${styles.flex} ${styles.profileDetails} ${styles.jc_center}`}
          >
            {profileDetails && profileDetails.userImageUrl ? 
            <img src={image_url+profileDetails.userImageUrl} alt={profileDetails.fullname} height="100" width="100" style={{borderRadius: "50%"}}/> : 
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="50" fill="#EEEEEE" />
                <path
                  d="M49.9909 58.3333C59.1956 58.3333 66.6576 50.8714 66.6576 41.6667C66.6576 32.4619 59.1956 25 49.9909 25C40.7861 25 33.3242 32.4619 33.3242 41.6667C33.3242 50.8714 40.7861 58.3333 49.9909 58.3333Z"
                  stroke="#121213"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M24.7305 72.9168C27.2918 68.4834 30.9748 64.8021 35.4093 62.2426C39.8439 59.6832 44.8739 58.3359 49.994 58.3359C55.1142 58.336 60.1442 59.6834 64.5787 62.2429C69.0132 64.8025 72.6961 68.4839 75.2573 72.9174"
                  stroke="#121213"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
          }
            
          </div>
          <div>
            
                <div className={`${styles.p} ${styles.mx_2}`}>
                  <div className={` ${styles.thirdColor}`}>
                    <label>All Personal Information</label>{" "}
                  </div>
                  <div
                    className={`${styles.flex} ${styles.flexWrapper} ${styles.spaceBetween}`}
                  >
                    <div className={`${styles.profileinput} ${"input_item"}`}>
                      <FormControl variant="filled">
                        <InputLabel shrink="false" htmlFor="filled-adornment-name">
                          Full Name
                        </InputLabel>
                        <FilledInput
                          id="filled-adornment-name"
                          disabled
                          value={profileDetails.fullname}
                          endAdornment={
                            <InputAdornment position="end">
                              <div className="btnspacewrapouter">
                                <button type="button" className="btnspaceouter">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z"
                                      stroke="#7F7F7F"
                                      strokeWidth="2"
                                      strokeMiterlimit="10"
                                    />
                                    <path
                                      d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8444 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493"
                                      stroke="#7F7F7F"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </InputAdornment>
                          }
                          variant="filled"
                        />
                      </FormControl>
                    </div>
                    <div className={`${styles.profileinput} ${"input_item"}`}>
                      <FormControl variant="filled">
                        <InputLabel shrink="false" htmlFor="filled-adornment-name">
                          Date of Birth
                        </InputLabel>
                        <FilledInput
                          id="filled-adornment-name"
                          disabled
                          value={profileDetails.dob}
                          endAdornment={
                            <InputAdornment position="end">
                              <div className="btnspacewrapouter">
                                <button type="button" className="btnspaceouter">
                                  <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M20.3114 12.82V18.58C20.2664 20.08 16.5614 21.25 12.0014 21.25C7.44141 21.25 3.73641 20.06 3.69141 18.58V12.82M7.12641 3.43C7.47641 4.235 8.20141 5.25 8.17641 5.84C8.18432 5.98019 8.16261 6.12047 8.11271 6.25172C8.06281 6.38297 7.98583 6.50223 7.88678 6.60176C7.78773 6.70128 7.66883 6.77883 7.53782 6.82935C7.40681 6.87988 7.26663 6.90224 7.12641 6.895C6.98618 6.90224 6.846 6.87988 6.71499 6.82935C6.58398 6.77883 6.46508 6.70128 6.36603 6.60176C6.26698 6.50223 6.19 6.38297 6.1401 6.25172C6.0902 6.12047 6.0685 5.98019 6.07641 5.84C6.05141 5.25 6.77641 4.235 7.13141 3.43H7.12641ZM12.0014 2.75C12.3564 3.555 13.0814 4.57 13.0564 5.16C13.0651 5.30104 13.0438 5.44232 12.994 5.57454C12.9441 5.70675 12.8668 5.8269 12.7671 5.92705C12.6674 6.02721 12.5476 6.1051 12.4156 6.1556C12.2837 6.20609 12.1425 6.22804 12.0014 6.22C11.8615 6.22346 11.7223 6.19837 11.5925 6.14625C11.4626 6.09414 11.3446 6.01611 11.2459 5.91691C11.1472 5.81771 11.0697 5.69944 11.0182 5.5693C10.9667 5.43916 10.9423 5.29989 10.9464 5.16C10.9464 4.57 11.6464 3.555 12.0014 2.75ZM16.8414 3.425C17.1964 4.23 17.9164 5.245 17.8964 5.835C17.9013 5.97508 17.8773 6.11467 17.8261 6.24514C17.7748 6.37561 17.6974 6.49418 17.5985 6.59353C17.4996 6.69287 17.3814 6.77089 17.2512 6.82274C17.121 6.87459 16.9815 6.89919 16.8414 6.895V6.895C16.7013 6.89919 16.5618 6.87459 16.4316 6.82274C16.3014 6.77089 16.1832 6.69287 16.0843 6.59353C15.9854 6.49418 15.908 6.37561 15.8567 6.24514C15.8055 6.11467 15.7816 5.97508 15.7864 5.835C15.7864 5.245 16.4864 4.23 16.8414 3.425V3.425Z"
                                      stroke="#121212"
                                      strokeOpacity="0.54"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M20.3136 12.8457C20.2636 14.3257 16.5586 15.5007 11.9986 15.5007C7.43859 15.5007 3.73359 14.3257 3.68859 12.8457V12.8207M3.68359 12.8157C3.72859 11.3157 7.43359 10.1457 11.9936 10.1457C16.5536 10.1457 20.2586 11.3357 20.3036 12.8157V12.8407M11.9836 7.2207V11.1657M7.12359 7.8957V12.0007M16.8386 7.8957V12.0007"
                                      stroke="#121212"
                                      strokeOpacity="0.54"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </InputAdornment>
                          }
                          variant="filled"
                        />
                      </FormControl>
                    </div>
                    <div className={`${styles.profileinput} ${"input_item"}`}>
                      <FormControl variant="filled">
                        <InputLabel shrink="false" htmlFor="filled-adornment-name">
                          Email Address
                        </InputLabel>
                        <FilledInput
                          id="filled-adornment-name"
                          disabled
                          value={profileDetails.email}
                          endAdornment={
                            <InputAdornment position="end">
                              <div className="btnspacewrapouter">
                                <button>
                                  {profileDetails.emailVerifyStatus === 0
                                    ? "Not Verified"
                                    : "Verified"}
                                </button>
                              </div>
                            </InputAdornment>
                          }
                          variant="filled"
                        />
                      </FormControl>
                    </div>
                    <div className={`${styles.profileinput} ${"input_item"}`}>
                      <FormControl variant="filled">
                        <InputLabel shrink="false" htmlFor="filled-adornment-name">
                          Mobile Number
                        </InputLabel>
                        <FilledInput
                          id="filled-adornment-name"
                          disabled
                          value={profileDetails.mobile}
                          endAdornment={
                            <InputAdornment position="end">
                              <div className="btnspacewrapouter">
                                <button>
                                  {profileDetails.mobileVerifyStatus === 0
                                    ? "Not Verified"
                                    : "Verified"}
                                </button>
                              </div>
                            </InputAdornment>
                          }
                          variant="filled"
                        />
                      </FormControl>
                    </div>
                  </div>
                </div>
                {profileDetails && profileDetails.adharNumber ?
                <div className={`${styles.p}`} style={{borderTop: "1px solid #f1f1f1", paddingTop: "25px"}}>
                    <div className={styles.kyctitle}>Adhar Details</div>
                    <div className={styles.kysdataget}>
                       <div className={styles.kycdataitem}>ID : {profileDetails.adharNumber} { profileDetails.adhar_Status === 3 || profileDetails.adhar_Status === 0 ? <span className={`${styles.kycstatus} ${styles.pendingkyc} `}>Pending</span> : profileDetails.adhar_Status === 1 ? <span className={`${styles.kycstatus} ${styles.activekys} `}>Verified</span> : <span className={`${styles.kycstatus} ${styles.rejectedkyc} `}>Rejected</span> } </div>
                       <div className={styles.dflexnowrp}>
                       {profileDetails.aadharFrontImgurl ? <div className={styles.kycdataitemimg}><a href={ image_url + profileDetails.aadharFrontImgurl} target="_blank"><img src={ image_url + profileDetails.aadharFrontImgurl} alt="adhar" height="98" width="181" /></a></div> : '' }
                       {profileDetails.aadharBackImgurl ? <div className={styles.kycdataitemimg}><a href={ image_url + profileDetails.aadharBackImgurl} target="_blank"><img src={ image_url + profileDetails.aadharBackImgurl} alt="adhar" height="98" width="181" /></a></div> : '' }
                       </div>
                    </div>
                </div> : '' }
                {profileDetails && profileDetails.panNumber ?
                <div className={`${styles.p}`} style={{borderTop: "1px solid #f1f1f1", paddingTop: "25px"}}>
                    <div className={styles.kyctitle}>Pan Card Details</div>
                    <div className={styles.kysdataget}>
                       <div className={styles.kycdataitem}>ID : {profileDetails.panNumber} { profileDetails.pan_Status === 3 || profileDetails.pan_Status === 0 ? <span className={`${styles.kycstatus} ${styles.pendingkyc} `}>Pending</span> : profileDetails.pan_Status === 1 ? <span className={`${styles.kycstatus} ${styles.activekys} `}>Verified</span> : <span className={`${styles.kycstatus} ${styles.rejectedkyc} `}>Rejected</span> } </div>
                       <div className={styles.dflexnowrp}>
                       {profileDetails.panimgurl ? <div className={styles.kycdataitemimg}><a href={ image_url + profileDetails.panimgurl} target="_blank"><img src={ image_url + profileDetails.panimgurl} alt="Pan card front" height="98" width="181" /></a></div> : '' }
                       {profileDetails.panbackimgurl ? <div className={styles.kycdataitemimg}><a href={ image_url + profileDetails.panbackimgurl} target="_blank"><img src={ image_url + profileDetails.panbackimgurl} alt="Pan card back" height="98" width="181" /></a></div> : '' }
                       </div>
                    </div>
                </div> : '' }
                {profileDetails && profileDetails.voterID ?
                <div className={`${styles.p}`} style={{borderTop: "1px solid #f1f1f1", paddingTop: "25px"}}>
                    <div className={styles.kyctitle}>Votar Id Details</div>
                    <div className={styles.kysdataget}>
                       <div className={styles.kycdataitem}>ID : {profileDetails.voterID} { profileDetails.voterid_Status === 3 || profileDetails.voterid_Status === 0 ? <span className={`${styles.kycstatus} ${styles.pendingkyc} `}>Pending</span> : profileDetails.voterid_Status === 1 ? <span className={`${styles.kycstatus} ${styles.activekys} `}>Verified</span> : <span className={`${styles.kycstatus} ${styles.rejectedkyc} `}>Rejected</span> } </div>
                       <div className={styles.dflexnowrp}>
                       { profileDetails.voterIDFrontimgurl ? <div className={styles.kycdataitemimg}><a href={ image_url + profileDetails.voterIDFrontimgurl} target="_blank"><img src={ image_url + profileDetails.voterIDFrontimgurl} alt="Voter front" height="98" width="181" /></a></div> : '' }
                       { profileDetails.voterIDBackimgurl ? <div className={styles.kycdataitemimg}><a href={ image_url + profileDetails.voterIDBackimgurl} target="_blank"><img src={ image_url + profileDetails.voterIDBackimgurl} alt="Voter back" height="98" width="181" /></a></div> : '' }
                       </div>
                    </div>
                </div> : '' }
                <div className={`${styles.p} ${styles.mx_2}`}>
                  <div className={` ${styles.thirdColor}`}>
                    <label>Upload Identity Proof</label>{" "}
                  </div>
                  
                  <div className="kycdesign" hidelabel={hideOtherField}>
                    <div className="kycitem adharkyc" verified={profileDetails && profileDetails.adhar_Status === 0 || profileDetails && profileDetails.adhar_Status === 2 ? 'false' : 'true' }>
                     <div className="kycitemIn">
                     {profileDetails && profileDetails.adhar_Status === 0 || profileDetails && profileDetails.adhar_Status === 2 ? <input type="radio" name="IdProofTypeId" value="1" onChange={(e) => { handleChange(e); showFormFun(e);}} /> : '' }
                      <img src="/images/adhar.png" alt="adhar" height="98" width="181" />
                     </div>
                    </div>
                    <div className="kycitem pancardkyc" verified={profileDetails && profileDetails.pan_Status === 0 || profileDetails && profileDetails.pan_Status === 2 ? 'false' : 'true' }>
                    <div className="kycitemIn">
                    {profileDetails && profileDetails.pan_Status === 0 || profileDetails && profileDetails.pan_Status === 2 ? <input type="radio" name="IdProofTypeId" value="2" onChange={(e) => { handleChange(e); showFormFun(e);}} /> : '' }
                      <img src="/images/pancard.png" alt="pancard" height="98" width="181" />
                     </div>
                    </div>
                    <div className="kycitem votaridkyc" verified={profileDetails && profileDetails.voterid_Status === 0 || profileDetails && profileDetails.voterid_Status === 2 ? 'false' : 'true' }>
                    <div className="kycitemIn">
                    {profileDetails && profileDetails.voterid_Status === 0 || profileDetails && profileDetails.voterid_Status === 2 ? <input type="radio" name="IdProofTypeId" value="3" onChange={(e) => { handleChange(e); showFormFun(e);}} /> : '' }
                      <img src="/images/votar.jpg" alt="votar" height="98" width="181" />
                     </div>
                    </div>
                  </div>

                  {showForm && showForm ? (
                    <>
                  <div className={`${styles.flex} ${styles.flexWrapper} ${styles.spaceBetween}`} >
                    <div className={`${styles.profileinput} ${"input_item"}`}>
                      <FormControl variant="filled">
                        <InputLabel htmlFor="filled-adornment-name">
                          ID Number
                        </InputLabel>
                        <FilledInput
                          id="filled-adornment-name"
                          name="IdProofNumber"
                          value={formInput.IdProofNumber}
                          onChange={handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <div className="btnspacewrapouter">
                                <button type="button" className="btnspaceouter" >
                                <svg aria-hidden="true" fill="#7e7e7e" width="24" viewBox="0 0 24 24" data-testid="StorageIcon"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path></svg>
                                </button>
                              </div>
                            </InputAdornment>
                          }
                          variant="filled"
                        />
                      </FormControl>
                    </div>
                    <div className="input_item itemfullf">
                    <label className="labelstyleupload">Identity Proof Photo <em>(Front Side)</em></label>
                    <div className={`${styles.profileinputup}`}>
                      <div className={styles.uploadDoc}>
                      <input type="file" onChange={fileUpload1} />
                      <div>
                        <div>Choose File</div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 13.5L5.5575 14.5575L11.25 8.8725V22.5H12.75V8.8725L18.4425 14.5575L19.5 13.5L12 6L4.5 13.5ZM4.5 6V3H19.5V6H21V3C21 2.60218 20.842 2.22064 20.5607 1.93934C20.2794 1.65804 19.8978 1.5 19.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V6H4.5Z"
                            fill="#0164EB"
                          />
                        </svg>
                      </div>
                      </div>
                    </div>
                    {imgprofile1.name ? (
                    <div className={`${styles.profileinputup}`}>
                      <div className={`${styles.docFile} ${styles.flex} ${styles.spaceBetween}`}>
                        <div>
                          {imgprofile1 ? imgprofile1.name : "Document.pdf"}
                        </div>
                        <div onClick={() => setUploadProfileimg1("")} style={{cursor: "pointer"}}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705Z"
                              fill="#121212"
                              fillOpacity="0.87"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    ) : (
                      ""
                    )}
                    </div>
                    <div className="input_item itemfullf">
                    <label className="labelstyleupload">Identity Proof Photo <em>(Back Side)</em></label>
                    <div className={`${styles.profileinputup}`}>
                      <div className={styles.uploadDoc}>
                      <input type="file" onChange={fileUpload2} />
                      <div>
                        <div>Choose File</div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 13.5L5.5575 14.5575L11.25 8.8725V22.5H12.75V8.8725L18.4425 14.5575L19.5 13.5L12 6L4.5 13.5ZM4.5 6V3H19.5V6H21V3C21 2.60218 20.842 2.22064 20.5607 1.93934C20.2794 1.65804 19.8978 1.5 19.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V6H4.5Z"
                            fill="#0164EB"
                          />
                        </svg>
                      </div>
                      </div>
                    </div>
                    {imgprofile2.name ? (
                    <div className={`${styles.profileinputup} `}>
                      <div
                        className={`${styles.docFile} ${styles.flex} ${styles.spaceBetween}`}
                      >
                        <div>
                          {imgprofile2 ? imgprofile2.name : "Document.pdf"}
                        </div>
                        <div onClick={() => setUploadProfileimg2("")} style={{cursor: "pointer"}}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705Z"
                              fill="#121212"
                              fillOpacity="0.87"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    ) : (
                      ""
                    )}
                    </div>
                  </div>
                  <div style={{ padding: "30px 10px 0px", position: "relative" }}>
                 
                 {requredAll && requredAll ? <div className="errorresponse" style={{ textAlign: "left" }}>{requredAll}</div> : ""}
                 {success && success ? <div className="successMessage" style={{ textAlign: "left", paddingLeft: "10px" }}>{success}</div> : ""} 
                  <div className="secondry_dark_btn" onClick={handleSubmit}>SEND FOR VERIFICATION  {loader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }} />) : ("")}</div>
                </div>
                </>
                  ) : (
                    ""
                  )}
                </div>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCVerification;
