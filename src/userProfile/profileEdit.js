import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  countryList,
  updateProfileDetails,
  userProfileDetails,
} from "../redux/actions/profile";
import { user2FAValidate } from "../redux/actions/userAuth";
import styles from "../styles/profile.module.css";

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state);
  const [allcountryList, setAllCountryList] = useState("");
  const [profileDetails, setProfileDetails] = useState("");

  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [walletId, setWalletId] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [telegramLink, setTelegramLink] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  const [authCode, setAuthCode] = useState("");
  const [VerSucc, setVerSucc] = useState("");

  const [selectCountry, setSelectCountry] = useState(false);
  const [enableAuthVal, setenableAuthVal] = useState("");
  const [emptyAuthCode, setemptyAuthCode] = useState("");
  const [notVerifyAuthCode, setNotVerifyAuthCode] = useState(false);
  const [walletIdDuplicate, setwalletIdDuplicate] = useState("");
  const [lightFun, setLightFun] = useState("off")
  const [varification, setVarification] = useState(window.sessionStorage.getItem("mdr2FA"));
  const [hasAuth, setHasAuth] = useState(window.sessionStorage.getItem("mdr2FA"));

  const selectCountryHandle = (e) => {
    setSelectCountry(true);
  };
  useEffect(() => {
    let apiData = {};
    dispatch(countryList(apiData));
    dispatch(userProfileDetails(apiData));
  }, []);

  const handlevarification = (e) => {
    setAuthCode(e.target.value);
  }
  useEffect(()=>{
    if(authCode){
      let apiData = {AuthenticationCode: authCode};
      dispatch(user2FAValidate(apiData));
    } 
    if(authCode.length === 0){
    setVerSucc('');
    }
},[authCode]);


useEffect(() => {
if (status.userProfileDetails.data !== "") {
  if (status.userProfileDetails.data.data.statusCode === "200") {
    setProfileDetails(status.userProfileDetails.data.data.result[0]);
  }
}
}, [status]);

  useEffect(() => {
    if (status.countryList.data !== "") {
      if (status.countryList.data.data.statusCode === "200") {
        setAllCountryList(status.countryList.data.data.result);
      }
    }
    
    if (status.updateProfileDetails.data !== "") {
      if (status.updateProfileDetails.data.data.statusCode === "200") {
        if(status.updateProfileDetails.data.data.result.errorMessage === "This Member Wallet ID already exist !!") {
          setNotVerifyAuthCode(true);
          setwalletIdDuplicate("This Member Wallet ID already exist !!");
          removeWalleDuplicateError();
        } else {
        navigate("/user/user-details");
        window.location.reload();
        }
      }
    }
    if (status.user2FAValidate.data !== "") {
      if (status.user2FAValidate.data.data.message === "success") {
          setemptyAuthCode(""); 
          setNotVerifyAuthCode(false);
          setVerSucc('true');
      }
      if (status.user2FAValidate.data.data.statusCode === "400") {
        setVerSucc('false');
        setemptyAuthCode("Please enter valid code");
        setNotVerifyAuthCode(true);
        removValiInvalid();
    }
    }
  }, [status]);

  const handleSubmit = () => {
    if( varification === "0"){
      setenableAuthVal("Firstly Enable Authentication");
      removeAuthAliert();
      return
    }

    if(authCode === ""){
      setemptyAuthCode("Please enter valid code");
      return
    }

    if(notVerifyAuthCode === true){
      return
    }
 
    let apiData = { 
    Fullname: fullname?fullname:profileDetails.fullname,
    Dob: dob?dob:profileDetails.dob,
    Email: email?email:profileDetails.email,
    Mobile: mobile?mobile:profileDetails.mobile,
    WalletId: walletId?walletId:profileDetails.walletId,
    Address: address?address:profileDetails.address,
    City: city?city:profileDetails.city,
    Country: country?country:profileDetails.countryid,
    Zipcode: zipcode?zipcode:profileDetails.zipcode,
    FacebookLink: facebookLink?facebookLink:profileDetails.facebookLink,
    WhatsappLink: whatsappLink?whatsappLink:profileDetails.whatsappLink,
    InstagramLink: instagramLink?instagramLink:profileDetails.instagramLink,
    TwitterLink: twitterLink?twitterLink:profileDetails.twitterLink,
    TelegramLink: telegramLink?telegramLink:profileDetails.telegramLink,
    WebsiteLink: websiteLink?websiteLink:profileDetails.websiteLink,
    };
    dispatch(updateProfileDetails(apiData));
  };

  const removeAuthAliert = () => {
    setTimeout(() => {
      setenableAuthVal("");
    }, 3000);
  }

  const removValiInvalid = () => {
    setTimeout(() => {
      setemptyAuthCode("");
    }, 3000);
  }

  const removeWalleDuplicateError = () => {
    setTimeout(() => {
      setwalletIdDuplicate("");
    }, 3000);
  }
  

  const lightEnableHandle = () => {
    setLightFun("on");
    setTimeout(() => {
      navigate("/user/setting/account");
    }, 500);

  }

  return (
    <div className={` ${styles.dashboard_content} pt10 nosidebarinner`}>
        <div className={styles.padding10}>
          <div
            className={`${styles.flex} ${styles.spaceBetween} ${styles.profileEditHeader}`}
          >
            <div className={`${styles.flex} ${styles.fourthColor}`}>
              <img
                src="/images/back-arrow.png"
                onClick={() => navigate("/user/user-details")}
                style={{ cursor: "pointer" }}
              />
              &nbsp; Back to Profile Details
            </div>
            <button className="secondry_dark_btn" onClick={handleSubmit}>Save changes</button>
          </div>
        </div>
        
        <div className={styles.padding10}>
          <div className={`${styles.profileContainer}`} style={{position: "relative"}}>
          {enableAuthVal && enableAuthVal ? <div className="enableaut">{enableAuthVal}</div> : "" }
          {walletIdDuplicate && walletIdDuplicate ? <div className="enableaut">{walletIdDuplicate}</div> : "" }
          
            <div className={`${styles.flex} ${styles.spaceBetween}`}>
              <div className={styles.thirdColor}>All Personal Information</div>
            </div>
            <div
              className={`${styles.flex} ${styles.flexWrapper} ${styles.spaceBetween}`}
            >
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="inputLabelStyle">
                  <span>Full Name</span>
                  <div className="inputitemst">{profileDetails.fullname}</div>
                  <div className="inputlabesvg"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="#7F7F7F" strokeWidth="2" strokeMiterlimit="10" /> <path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8444 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493" stroke="#7F7F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg></div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Date of Birth</label>
                  <input type="text" name="Dob" onChange={(e) => setDob(e.target.value) } defaultValue={profileDetails.dob} />
                  <div className="righticinp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M20.3114 12.82V18.58C20.2664 20.08 16.5614 21.25 12.0014 21.25C7.44141 21.25 3.73641 20.06 3.69141 18.58V12.82M7.12641 3.43C7.47641 4.235 8.20141 5.25 8.17641 5.84C8.18432 5.98019 8.16261 6.12047 8.11271 6.25172C8.06281 6.38297 7.98583 6.50223 7.88678 6.60176C7.78773 6.70128 7.66883 6.77883 7.53782 6.82935C7.40681 6.87988 7.26663 6.90224 7.12641 6.895C6.98618 6.90224 6.846 6.87988 6.71499 6.82935C6.58398 6.77883 6.46508 6.70128 6.36603 6.60176C6.26698 6.50223 6.19 6.38297 6.1401 6.25172C6.0902 6.12047 6.0685 5.98019 6.07641 5.84C6.05141 5.25 6.77641 4.235 7.13141 3.43H7.12641ZM12.0014 2.75C12.3564 3.555 13.0814 4.57 13.0564 5.16C13.0651 5.30104 13.0438 5.44232 12.994 5.57454C12.9441 5.70675 12.8668 5.8269 12.7671 5.92705C12.6674 6.02721 12.5476 6.1051 12.4156 6.1556C12.2837 6.20609 12.1425 6.22804 12.0014 6.22C11.8615 6.22346 11.7223 6.19837 11.5925 6.14625C11.4626 6.09414 11.3446 6.01611 11.2459 5.91691C11.1472 5.81771 11.0697 5.69944 11.0182 5.5693C10.9667 5.43916 10.9423 5.29989 10.9464 5.16C10.9464 4.57 11.6464 3.555 12.0014 2.75ZM16.8414 3.425C17.1964 4.23 17.9164 5.245 17.8964 5.835C17.9013 5.97508 17.8773 6.11467 17.8261 6.24514C17.7748 6.37561 17.6974 6.49418 17.5985 6.59353C17.4996 6.69287 17.3814 6.77089 17.2512 6.82274C17.121 6.87459 16.9815 6.89919 16.8414 6.895V6.895C16.7013 6.89919 16.5618 6.87459 16.4316 6.82274C16.3014 6.77089 16.1832 6.69287 16.0843 6.59353C15.9854 6.49418 15.908 6.37561 15.8567 6.24514C15.8055 6.11467 15.7816 5.97508 15.7864 5.835C15.7864 5.245 16.4864 4.23 16.8414 3.425V3.425Z" stroke="#121212" strokeOpacity="0.54" strokeLinecap="round" strokeLinejoin="round" /> <path d="M20.3136 12.8457C20.2636 14.3257 16.5586 15.5007 11.9986 15.5007C7.43859 15.5007 3.73359 14.3257 3.68859 12.8457V12.8207M3.68359 12.8157C3.72859 11.3157 7.43359 10.1457 11.9936 10.1457C16.5536 10.1457 20.2586 11.3357 20.3036 12.8157V12.8407M11.9836 7.2207V11.1657M7.12359 7.8957V12.0007M16.8386 7.8957V12.0007" stroke="#121212" strokeOpacity="0.54" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="inputLabelStyle">
                  <span>Email Address</span>
                  <div className="inputitemst">{profileDetails.email}</div>
                  <div className="inputlabesvgverifi">
                    {profileDetails.emailVerifyStatus === 1
                    ? <span className="vrified"><img src="/images/success.png" height="30" width="31" alt="verified" /></span>
                    : <span className="notvrified">NOT VERIFIED</span>}
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="inputLabelStyle">
                  <span>Mobile Number</span>
                  <div className="inputitemst">{profileDetails.mobile}</div>
                  <div className="inputlabesvgverifi">
                   {profileDetails.mobileVerifyStatus === 1
                    ? <span className="vrified"><img src="/images/success.png" height="30" width="31" alt="verified" /></span>
                    : <span className="notvrified">NOT VERIFIED</span>}
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                {profileDetails && profileDetails.walletId ?
                <div className="inputLabelStyle">
                  <span>Wallet Address</span>
                  <div className="inputitemst">{profileDetails.walletId}</div>
                  <div className="inputlabesvg"><svg fill="#7F7F7F" aria-hidden="true" width="24" viewBox="0 0 24 24" data-testid="SyncAltIcon"><path d="m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z"></path></svg></div>
                </div> : 
                <div className="defaultinp">
                <label>Wallet Address</label>
                <input type="text" name="Dob" onChange={(e) => setWalletId(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.walletId} />
                <div className="righticinp">
                  <svg fill="#7F7F7F" aria-hidden="true" width="24" viewBox="0 0 24 24" data-testid="SyncAltIcon"><path d="m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z"></path></svg>
                </div>
              </div>}
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                {hasAuth && hasAuth === "1" ?
                <div className="enter2fainputWrp" verify={VerSucc}>
                  <input tupe="text" placeholder="2FA Code" className="enter2fainput" maxLength={6} onChange={handlevarification} />
                  {emptyAuthCode && emptyAuthCode ? <span className="validate">{emptyAuthCode}</span> : '' }
                </div> : 
                 <div className="dilflxauth"><div className="enableBtnAuth" light={lightFun} onClick={lightEnableHandle}></div><label className="spanbox">Enable 2FA Authentication</label></div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.padding10}>
          <div className={`${styles.profileContainer}`}>
            <div className={`${styles.flex} ${styles.spaceBetween}`}>
              <div className={styles.thirdColor}>Your Location</div>
            </div>
            <div className={`${styles.flex} ${styles.flexWrapper} ${styles.spaceBetween}`}>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Address</label>
                  <input type="text" name="address" onChange={(e) => setAddress(e.target.value === "" ? 'null' : e.target.value)} defaultValue={profileDetails.address} />
                  <div className="righticinp">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="#7F7F7F" strokeWidth="2" strokeMiterlimit="10" /> <path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8444 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493" stroke="#7F7F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                <label>City</label>
                <input type="text" name="City" onChange={(e) => setCity(e.target.value === "" ? 'null' : e.target.value)} defaultValue={profileDetails.city} />
                <div className="righticinp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15Z" stroke="#7F7F7F" strokeWidth="2" strokeMiterlimit="10" /> <path d="M2.90625 20.2491C3.82834 18.6531 5.1542 17.3278 6.75064 16.4064C8.34708 15.485 10.1579 15 12.0011 15C13.8444 15 15.6552 15.4851 17.2516 16.4065C18.848 17.3279 20.1739 18.6533 21.0959 20.2493" stroke="#7F7F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                { selectCountry && selectCountry ? (

                <div className="defaultinp selectst">
                  <label>Country</label>
                  <select onChange={(e) => setCountry(e.target.value === "" ? 'null' : e.target.value)}>
                  <option value="" key="">--select--</option>
                  {allcountryList !== "" &&
                      allcountryList.map((data, index) => (
                    <option value={data.dataFieldId} key={index}>{data.dataFieldText}</option>
                    ))}
                  </select>
                  <div className="righticinp">
                    <svg height="24" width="24" fill="#7e7e7e"  aria-hidden="true" viewBox="0 0 24 24"><path d="m14 6-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"></path></svg>  
                  </div>
                </div>
                ) : (
                  <div className="customcountry">
                  <div className="customcountylbl">Country</div>
                  <div className="customcount">{profileDetails.country}</div>
                  <div className="customchangebt" onClick={selectCountryHandle}>Change</div>
                </div>
                )}
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>ZIP Code</label>
                  <input type="text" name="Dob" onChange={(e) => setZipcode(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.zipcode} />
                  <div className="righticinp">
                    <svg width="24" height="24" fill="#7e7e7e" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FolderZipOutlinedIcon"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-4 10h2v-2h-2v-2h2v-2h-2V8h4v10h-4v-2zm0 0h-2v2H4V6h5.17l2 2H14v2h2v2h-2v2h2v2z"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.padding10}>
          <div className={`${styles.profileContainer}`}>
            <div className={`${styles.flex} ${styles.spaceBetween}`}>
              <div className={styles.thirdColor}>Social Preferences </div>
            </div>
            <div className={`${styles.flex} ${styles.flexWrapper} ${styles.spaceBetween}`} >
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Facebook</label>
                  <input type="text" name="Dob" onChange={(e) => setFacebookLink(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.facebookLink} />
                  <div className="righticinp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <g clipPath="url(#clip0_729_17581)"> <path d="M11.9989 -0.0253906C5.36816 -0.0253906 -0.0273438 5.36861 -0.0273438 12.0001C-0.0273438 18.6316 5.36816 24.0256 11.9989 24.0256C18.6297 24.0256 24.0252 18.6316 24.0252 12.0001C24.0252 5.36861 18.6297 -0.0253906 11.9989 -0.0253906ZM11.9989 23.2246C5.80991 23.2246 0.775156 18.1891 0.775156 12.0001C0.775156 5.81111 5.80991 0.775609 11.9989 0.775609C18.1879 0.775609 23.2227 5.81111 23.2227 12.0001C23.2227 18.1891 18.1879 23.2246 11.9989 23.2246Z" fill="#121212" fillOpacity="0.54" /> <path d="M14.624 5.25101H12.623C10.0745 5.22551 9.74903 6.80276 9.74903 8.50976V9.75101H8.62403C8.57318 9.74421 8.52145 9.74924 8.47286 9.76568C8.42427 9.78212 8.38012 9.80955 8.34385 9.84582C8.30757 9.8821 8.28015 9.92624 8.2637 9.97484C8.24726 10.0234 8.24224 10.0752 8.24903 10.126V12.376C8.24224 12.4269 8.24726 12.4786 8.2637 12.5272C8.28015 12.5758 8.30757 12.6199 8.34385 12.6562C8.38012 12.6925 8.42427 12.7199 8.47286 12.7363C8.52145 12.7528 8.57318 12.7578 8.62403 12.751H9.74903V18.376C9.74278 18.4269 9.74826 18.4786 9.76504 18.5271C9.78183 18.5756 9.80947 18.6197 9.84587 18.6558C9.88227 18.692 9.92646 18.7194 9.97505 18.7359C10.0237 18.7524 10.0754 18.7576 10.1263 18.751H12.4175C12.6388 18.7765 12.818 18.5973 12.7475 18.376L12.749 12.751H14.624C14.6749 12.7578 14.7266 12.7528 14.7752 12.7363C14.8238 12.7199 14.8679 12.6925 14.9042 12.6562C14.9405 12.6199 14.9679 12.5758 14.9844 12.5272C15.0008 12.4786 15.0058 12.4269 14.999 12.376V10.126C15.0058 10.0752 15.0008 10.0234 14.9844 9.97484C14.9679 9.92624 14.9405 9.8821 14.9042 9.84582C14.8679 9.80955 14.8238 9.78212 14.7752 9.76568C14.7266 9.74924 14.6749 9.74421 14.624 9.75101H12.7468L12.749 8.62601C12.8218 8.14676 12.8218 8.22476 13.2665 8.25101H14.6083C14.7125 8.22776 14.8235 8.24051 14.9015 8.16476C14.9795 8.08901 15.0245 7.98551 14.9983 7.87601V5.62601C15.0052 5.5752 15.0003 5.52348 14.984 5.47488C14.9676 5.42628 14.9403 5.38211 14.904 5.34582C14.8678 5.30952 14.8237 5.28208 14.7751 5.26564C14.7266 5.24919 14.6749 5.24419 14.624 5.25101ZM14.2228 7.45901L13.2823 7.42301C12.1175 7.42301 12.02 8.05526 12.02 8.70251L12.017 10.1245C12.0169 10.1772 12.0272 10.2293 12.0473 10.278C12.0674 10.3267 12.0969 10.3709 12.1341 10.4082C12.1713 10.4455 12.2155 10.475 12.2641 10.4952C12.3127 10.5154 12.3649 10.5258 12.4175 10.5258H14.249V11.9748H12.419C12.3127 11.9748 12.2108 12.0169 12.1356 12.092C12.0603 12.1671 12.018 12.269 12.0178 12.3753L12.017 18.001H10.499V12.376C10.499 12.1548 10.3483 11.9755 10.1263 11.9755H8.99903V10.5265H10.1263C10.1789 10.5266 10.231 10.5163 10.2797 10.4962C10.3283 10.4761 10.3725 10.4467 10.4098 10.4095C10.4848 10.3338 10.4983 10.2318 10.4983 10.1253V8.50901C10.4983 6.82751 10.838 6.02651 12.6223 6.02651H14.222V7.45901H14.2228Z" fill="#121212" fillOpacity="0.54" /> </g> <defs> <clipPath id="clip0_729_17581"> <rect width="24" height="24" fill="white" /> </clipPath> </defs> </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Whats app</label>
                  <input type="text" name="Dob" onChange={(e) => setWhatsappLink(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.whatsappLink} />
                  <div className="righticinp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M11.9984 2.4375C10.331 2.43777 8.69256 2.87407 7.24578 3.70309C5.799 4.53211 4.59415 5.72504 3.75078 7.1635C2.90741 8.60196 2.45484 10.236 2.43799 11.9033C2.42113 13.5707 2.84057 15.2135 3.65469 16.6688L2.82969 19.5469C2.76232 19.7721 2.75715 20.0114 2.81473 20.2394C2.8723 20.4673 2.99048 20.6755 3.15673 20.8417C3.32298 21.008 3.53111 21.1261 3.75907 21.1837C3.98702 21.2413 4.22631 21.2361 4.45157 21.1688L7.32969 20.3438C8.60497 21.0578 10.027 21.4699 11.4864 21.5486C12.9458 21.6273 14.4039 21.3704 15.7485 20.7977C17.0932 20.2249 18.2887 19.3516 19.2431 18.2447C20.1976 17.1378 20.8856 15.8269 21.2544 14.4126C21.6231 12.9983 21.6628 11.5183 21.3703 10.0863C21.0778 8.65435 20.461 7.30846 19.5671 6.15207C18.6733 4.99567 17.5263 4.05955 16.2143 3.41561C14.9022 2.77168 13.46 2.43707 11.9984 2.4375ZM11.9984 20.4375C10.4841 20.4371 8.99769 20.029 7.69532 19.2562C7.60579 19.2085 7.50616 19.1828 7.40469 19.1813C7.35396 19.1782 7.30311 19.1846 7.25469 19.2L4.14219 20.0906C4.10961 20.1007 4.07492 20.1016 4.04184 20.0934C4.00875 20.0852 3.97853 20.0681 3.95443 20.044C3.93033 20.0199 3.91325 19.9897 3.90504 19.9566C3.89682 19.9235 3.89779 19.8888 3.90782 19.8563L4.79844 16.7438C4.81947 16.6703 4.82532 16.5934 4.81565 16.5176C4.80598 16.4419 4.78099 16.3689 4.74219 16.3031C3.79276 14.7018 3.39958 12.8314 3.62388 10.9834C3.84819 9.1353 4.6774 7.4133 5.98234 6.08559C7.28728 4.75789 8.99469 3.89903 10.8386 3.6428C12.6825 3.38657 14.5594 3.74736 16.1769 4.66896C17.7944 5.59056 19.0617 7.02123 19.7814 8.73812C20.5011 10.455 20.6328 12.3617 20.1559 14.1612C19.6791 15.9608 18.6205 17.5521 17.145 18.6873C15.6695 19.8225 13.8601 20.4378 11.9984 20.4375ZM16.8266 13.575L14.9047 12.4781C14.7024 12.364 14.4735 12.3056 14.2412 12.3089C14.009 12.3122 13.7818 12.3771 13.5828 12.4969L12.3828 13.2188C11.7008 12.8558 11.1426 12.2976 10.7797 11.6156L11.5016 10.4156C11.6214 10.2167 11.6862 9.98945 11.6895 9.75722C11.6928 9.52499 11.6344 9.29604 11.5203 9.09375L10.4234 7.17188C10.3169 6.9874 10.1639 6.83406 9.97972 6.72715C9.79549 6.62023 9.58645 6.56346 9.37344 6.5625C8.52969 6.5625 7.72035 6.89703 7.12285 7.49278C6.52534 8.08853 6.18842 8.89687 6.18594 9.74063C6.18471 10.8002 6.39234 11.8496 6.79697 12.8289C7.2016 13.8082 7.79528 14.6981 8.54408 15.4477C9.29287 16.1974 10.1821 16.7921 11.1609 17.1979C12.1397 17.6036 13.1889 17.8125 14.2484 17.8125H14.2578C15.1016 17.81 15.9099 17.4731 16.5057 16.8756C17.1014 16.2781 17.4359 15.4688 17.4359 14.625C17.435 14.412 17.3782 14.203 17.2713 14.0187C17.1644 13.8345 17.011 13.6815 16.8266 13.575ZM14.2578 16.6875H14.2484C12.4076 16.685 10.6431 15.952 9.34232 14.6495C8.04155 13.347 7.31094 11.5814 7.31094 9.74063C7.31342 9.19524 7.53181 8.67304 7.91834 8.28827C8.30486 7.90351 8.82805 7.68749 9.37344 7.6875C9.40234 7.68987 9.42921 7.7033 9.44844 7.725L10.5453 9.64688C10.5604 9.6762 10.5674 9.70897 10.5658 9.74188C10.5641 9.7748 10.5538 9.8067 10.5359 9.83438L9.66407 11.3063C9.6147 11.382 9.58537 11.469 9.57881 11.5592C9.57225 11.6494 9.58868 11.7398 9.62657 11.8219C10.1391 12.9531 11.0454 13.8594 12.1766 14.3719C12.2587 14.4098 12.349 14.4262 12.4392 14.4196C12.5294 14.4131 12.6164 14.3837 12.6922 14.3344L14.1641 13.4625C14.1917 13.4446 14.2236 13.4343 14.2566 13.4327C14.2895 13.431 14.3222 13.4381 14.3516 13.4531L16.2734 14.55C16.2951 14.5692 16.3086 14.5961 16.3109 14.625C16.3109 15.1704 16.0949 15.6936 15.7102 16.0801C15.3254 16.4666 14.8032 16.685 14.2578 16.6875Z" fill="#121212" fillOpacity="0.54" /> </svg>  
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Instagram</label>
                  <input type="text" name="Dob" onChange={(e) => setInstagramLink(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.instagramLink} />
                  <div className="righticinp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M12 7.6875C11.1471 7.6875 10.3133 7.94042 9.6041 8.41429C8.89492 8.88815 8.34217 9.56167 8.01577 10.3497C7.68937 11.1377 7.60397 12.0048 7.77036 12.8413C7.93676 13.6779 8.34749 14.4463 8.9506 15.0494C9.55372 15.6525 10.3221 16.0632 11.1587 16.2296C11.9952 16.396 12.8623 16.3106 13.6503 15.9842C14.4383 15.6578 15.1118 15.1051 15.5857 14.3959C16.0596 13.6867 16.3125 12.8529 16.3125 12C16.3125 10.8563 15.8581 9.75935 15.0494 8.9506C14.2406 8.14185 13.1437 7.6875 12 7.6875ZM12 15.1875C11.3696 15.1875 10.7533 15.0006 10.2291 14.6503C9.70494 14.3001 9.29639 13.8022 9.05513 13.2198C8.81388 12.6374 8.75076 11.9965 8.87375 11.3781C8.99674 10.7598 9.30032 10.1919 9.7461 9.7461C10.1919 9.30032 10.7598 8.99674 11.3781 8.87375C11.9965 8.75076 12.6374 8.81388 13.2198 9.05513C13.8022 9.29639 14.3001 9.70494 14.6503 10.2291C15.0006 10.7533 15.1875 11.3696 15.1875 12C15.185 12.8446 14.8484 13.6539 14.2512 14.2512C13.6539 14.8484 12.8446 15.185 12 15.1875ZM16.125 2.8125H7.875C6.53234 2.8125 5.24467 3.34587 4.29527 4.29527C3.34587 5.24467 2.8125 6.53234 2.8125 7.875V16.125C2.8125 17.4677 3.34587 18.7553 4.29527 19.7047C5.24467 20.6541 6.53234 21.1875 7.875 21.1875H16.125C17.4677 21.1875 18.7553 20.6541 19.7047 19.7047C20.6541 18.7553 21.1875 17.4677 21.1875 16.125V7.875C21.1875 6.53234 20.6541 5.24467 19.7047 4.29527C18.7553 3.34587 17.4677 2.8125 16.125 2.8125ZM20.0625 16.125C20.0625 17.1693 19.6477 18.1708 18.9092 18.9092C18.1708 19.6477 17.1693 20.0625 16.125 20.0625H7.875C6.83071 20.0625 5.82919 19.6477 5.09077 18.9092C4.35234 18.1708 3.9375 17.1693 3.9375 16.125V7.875C3.9375 6.83071 4.35234 5.82919 5.09077 5.09077C5.82919 4.35234 6.83071 3.9375 7.875 3.9375H16.125C17.1693 3.9375 18.1708 4.35234 18.9092 5.09077C19.6477 5.82919 20.0625 6.83071 20.0625 7.875V16.125ZM17.8125 7.125C17.8125 7.31042 17.7575 7.49168 17.6545 7.64585C17.5515 7.80002 17.4051 7.92018 17.2338 7.99114C17.0625 8.06209 16.874 8.08066 16.6921 8.04449C16.5102 8.00831 16.3432 7.91902 16.2121 7.78791C16.081 7.6568 15.9917 7.48975 15.9555 7.3079C15.9193 7.12604 15.9379 6.93754 16.0089 6.76623C16.0798 6.59493 16.2 6.44851 16.3542 6.3455C16.5083 6.24248 16.6896 6.1875 16.875 6.1875C17.1236 6.1875 17.3621 6.28627 17.5379 6.46209C17.7137 6.6379 17.8125 6.87636 17.8125 7.125Z" fill="#121212" fillOpacity="0.54" /> </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Twitter</label>
                  <input type="text" name="Dob" onChange={(e) => setTwitterLink(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.twitterLink} />
                  <div className="righticinp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M22.5011 3.58929C22.501 3.50104 22.4777 3.41436 22.4333 3.33806C22.3889 3.26177 22.3252 3.19858 22.2485 3.1549C22.1718 3.11122 22.0849 3.08862 21.9967 3.08939C21.9084 3.09016 21.822 3.11428 21.7461 3.15929C21.0423 3.57838 20.2779 3.88602 19.4801 4.07129C18.6081 3.23881 17.4476 2.77646 16.2421 2.78129C15.5873 2.78222 14.9398 2.91905 14.3407 3.18313C13.7415 3.44721 13.2037 3.83279 12.7613 4.31546C12.3188 4.79813 11.9814 5.36739 11.7703 5.98721C11.5592 6.60702 11.4791 7.26391 11.5351 7.91629C8.51218 7.59503 5.73858 6.09268 3.81805 3.73629C3.76679 3.67369 3.7011 3.62446 3.62663 3.59283C3.55216 3.56121 3.47112 3.54813 3.39048 3.55472C3.30984 3.56131 3.232 3.58737 3.16365 3.63066C3.09529 3.67396 3.03847 3.7332 2.99805 3.80329C2.58317 4.52678 2.36494 5.34628 2.36505 6.18029C2.36383 7.09562 2.62856 7.9916 3.12705 8.75929L3.06705 8.72629C2.9887 8.68783 2.90171 8.67037 2.81459 8.67563C2.72747 8.68089 2.6432 8.70868 2.57005 8.75629C2.49383 8.80585 2.43127 8.87375 2.38812 8.95377C2.34496 9.03379 2.32259 9.12337 2.32305 9.21429C2.31905 9.33229 2.32605 9.45129 2.34505 9.56729C2.39231 10.2275 2.57873 10.8703 2.89206 11.4533C3.20539 12.0364 3.63854 12.5465 4.16305 12.9503C4.09912 12.9691 4.0396 13.0005 3.98799 13.0427C3.93637 13.0848 3.89371 13.1369 3.8625 13.1958C3.83129 13.2546 3.81216 13.3192 3.80625 13.3855C3.80033 13.4519 3.80774 13.5188 3.82805 13.5823C4.05906 14.3026 4.46036 14.9565 4.99792 15.4887C5.53549 16.0209 6.19347 16.4156 6.91605 16.6393C5.44054 17.4654 3.74117 17.8025 2.06205 17.6023C1.94953 17.5882 1.83557 17.6128 1.73887 17.672C1.64217 17.7313 1.56847 17.8216 1.52986 17.9282C1.49126 18.0348 1.49005 18.1514 1.52642 18.2588C1.5628 18.3662 1.6346 18.4581 1.73005 18.5193C3.7395 19.8132 6.07908 20.5009 8.46905 20.5003C11.1802 20.5302 13.8253 19.6634 15.9929 18.0347C18.1606 16.406 19.7293 14.1067 20.4551 11.4943C20.7941 10.3573 20.9671 9.17629 20.9691 7.98929C20.9691 7.86929 20.9691 7.74429 20.9661 7.61729C21.4862 7.08846 21.8911 6.45762 22.1552 5.76453C22.4194 5.07144 22.5372 4.33114 22.5011 3.59029V3.58929ZM20.0771 7.12229C19.9949 7.21941 19.953 7.34428 19.9601 7.47129C20.0147 8.73542 19.8579 9.99981 19.4961 11.2123C18.8507 13.6285 17.4133 15.7584 15.4141 17.261C13.4149 18.7636 10.9694 19.5521 8.46905 19.5003C6.94308 19.5003 5.43248 19.1954 4.02605 18.6033C5.67897 18.4199 7.24699 17.7754 8.55105 16.7433C8.63218 16.6795 8.6916 16.5922 8.72113 16.4933C8.75066 16.3944 8.74888 16.2888 8.71601 16.191C8.68314 16.0931 8.62081 16.0079 8.53757 15.9469C8.45432 15.8859 8.35424 15.8521 8.25105 15.8503C7.61101 15.8399 6.98455 15.664 6.43257 15.3399C5.8806 15.0157 5.42189 14.5542 5.10105 14.0003C5.52605 14.0013 5.94805 13.9433 6.35505 13.8263C6.46232 13.7949 6.55596 13.7284 6.62102 13.6375C6.68608 13.5466 6.71881 13.4365 6.71397 13.3248C6.70913 13.2132 6.66702 13.1063 6.59435 13.0214C6.52167 12.9365 6.42264 12.8783 6.31305 12.8563C5.59724 12.713 4.93968 12.3616 4.42287 11.846C3.90606 11.3305 3.55302 10.6737 3.40805 9.95829C3.83273 10.096 4.2748 10.1728 4.72105 10.1863C4.83099 10.1944 4.94033 10.1639 5.03016 10.1C5.12 10.0361 5.18468 9.94282 5.21305 9.83629C5.24572 9.73287 5.24387 9.62164 5.2078 9.51937C5.17172 9.41709 5.10337 9.32932 5.01305 9.26929C4.50429 8.93064 4.08746 8.47112 3.79985 7.93186C3.51225 7.3926 3.36286 6.79044 3.36505 6.17929C3.36505 5.76629 3.43205 5.35629 3.56505 4.96629C5.78208 7.36031 8.84644 8.79381 12.1051 8.96129C12.1829 8.96961 12.2616 8.95748 12.3333 8.92609C12.405 8.89469 12.4673 8.84513 12.5141 8.78229C12.5636 8.72286 12.5988 8.65272 12.6166 8.57741C12.6345 8.5021 12.6346 8.42366 12.6171 8.34829C12.551 8.07247 12.5175 7.78989 12.5171 7.50629C12.5181 6.51876 12.9107 5.57196 13.6088 4.87348C14.3069 4.17501 15.2535 3.78188 16.2411 3.78029C16.7497 3.77884 17.2532 3.88286 17.7196 4.08579C18.186 4.28872 18.6054 4.58614 18.9511 4.95929C19.0091 5.02122 19.082 5.06731 19.1629 5.09321C19.2437 5.11911 19.3298 5.12395 19.4131 5.10729C20.1227 4.96757 20.8127 4.74226 21.4681 4.43629C21.2977 5.4556 20.8106 6.39537 20.0761 7.12229H20.0771Z" fill="#121212" fillOpacity="0.54" /> </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Telegram</label>
                  <input type="text" name="Dob" onChange={(e) => setTelegramLink(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.telegramLink} />
                  <div className="righticinp">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" > <path d="M21.9455 2.7653C21.7299 2.58657 21.4699 2.46953 21.1932 2.42657C20.9164 2.38361 20.6332 2.41634 20.3735 2.5213L2.45651 9.7543C2.16698 9.87328 1.92049 10.0775 1.74975 10.3399C1.57901 10.6022 1.4921 10.9103 1.50056 11.2232C1.50903 11.5361 1.61246 11.839 1.79713 12.0918C1.9818 12.3445 2.23897 12.5351 2.53451 12.6383L6.40051 13.9803L8.49551 20.9063C8.49951 20.9203 8.51251 20.9293 8.51851 20.9423C8.5401 20.9976 8.57162 21.0484 8.61151 21.0923C8.67213 21.16 8.75037 21.2095 8.83751 21.2353C8.84751 21.2393 8.85451 21.2483 8.86451 21.2503H8.87051L8.87351 21.2513C8.95087 21.2679 9.03127 21.2638 9.10651 21.2393C9.11451 21.2373 9.12251 21.2373 9.13151 21.2343C9.20376 21.2089 9.26914 21.1672 9.32251 21.1123C9.32851 21.1053 9.33851 21.1043 9.34451 21.0983L12.3575 17.7723L16.7545 21.1773C17.0215 21.3863 17.3505 21.4993 17.6895 21.4993C18.4235 21.4993 19.0565 20.9853 19.2075 20.2683L22.4695 4.2503C22.5248 3.97837 22.5053 3.69653 22.413 3.43482C22.3208 3.17312 22.1592 2.94137 21.9455 2.7643V2.7653ZM9.58851 15.2953L8.88151 18.7323L7.40651 13.8543L14.7215 10.0443L9.72451 15.0423C9.65531 15.1114 9.60801 15.1994 9.58851 15.2953ZM18.2275 20.0673C18.2087 20.158 18.167 20.2423 18.1062 20.3122C18.0454 20.3821 17.9677 20.4351 17.8805 20.4663C17.7954 20.499 17.7033 20.5091 17.6132 20.4954C17.5231 20.4817 17.438 20.4448 17.3665 20.3883L12.6035 16.6993C12.5039 16.6224 12.3791 16.5859 12.2538 16.597C12.1285 16.6082 12.012 16.6661 11.9275 16.7593L9.83051 19.0703L10.5365 15.6433L17.7255 8.4533C17.8097 8.36883 17.8609 8.25705 17.8699 8.13814C17.879 8.01922 17.8452 7.901 17.7747 7.8048C17.7042 7.7086 17.6017 7.64077 17.4855 7.61354C17.3694 7.5863 17.2474 7.60147 17.1415 7.6563L6.77851 13.0543L2.86151 11.6923C2.75765 11.658 2.66707 11.5922 2.60237 11.504C2.53767 11.4158 2.50206 11.3097 2.50051 11.2003C2.49553 11.09 2.52501 10.9808 2.58486 10.888C2.6447 10.7952 2.73196 10.7233 2.83451 10.6823L20.7485 3.4493C20.8403 3.41029 20.9412 3.39768 21.0398 3.41287C21.1383 3.42807 21.2307 3.47046 21.3065 3.5353C21.3819 3.59629 21.4388 3.67702 21.471 3.76849C21.5031 3.85997 21.5092 3.95857 21.4885 4.0533L18.2275 20.0683V20.0673Z" fill="#121212" fillOpacity="0.54" /> </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles.profileinput} ${"input_item"}`}>
                <div className="defaultinp">
                  <label>Website</label>
                  <input type="text" name="Dob" onChange={(e) => setWebsiteLink(e.target.value === "" ? 'null' : e.target.value) } defaultValue={profileDetails.websiteLink} />
                  <div className="righticinp">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" > <path d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 3C10.657 3 11.407 3.59 12.022 4.908C12.239 5.374 12.428 5.91 12.581 6.5H7.419C7.572 5.91 7.761 5.374 7.979 4.908C8.592 3.59 9.342 3 10 3ZM7.072 4.485C6.77671 5.13181 6.54787 5.80694 6.389 6.5H3.936C4.78024 5.04087 6.12123 3.93415 7.714 3.382C7.473 3.712 7.258 4.086 7.072 4.485ZM6.192 7.5C6.06258 8.32701 5.99838 9.16292 6 10C6 10.87 6.067 11.712 6.193 12.5H3.46C3.15503 11.7018 2.99911 10.8545 3 10C3 9.12 3.163 8.276 3.46 7.5H6.193H6.192ZM6.389 13.5C6.565 14.243 6.796 14.922 7.072 15.515C7.258 15.914 7.473 16.288 7.714 16.618C6.12123 16.0659 4.78024 14.9591 3.936 13.5H6.39H6.389ZM7.419 13.5H12.581C12.4432 14.0466 12.2558 14.5795 12.021 15.092C11.408 16.41 10.658 17 10 17C9.343 17 8.593 16.41 7.978 15.092C7.74392 14.5794 7.55714 14.0465 7.42 13.5H7.419ZM12.794 12.5H7.206C7.06704 11.674 6.99813 10.8376 7 10C7 9.117 7.073 8.275 7.206 7.5H12.794C12.927 8.275 13 9.117 13 10C13 10.883 12.927 11.725 12.794 12.5ZM13.611 13.5H16.064C15.2198 14.9591 13.8788 16.0659 12.286 16.618C12.527 16.288 12.742 15.914 12.928 15.515C13.204 14.922 13.435 14.243 13.611 13.5ZM16.541 12.5H13.807C13.933 11.712 14 10.87 14 10C14 9.13 13.933 8.288 13.807 7.5H16.54C16.837 8.276 17 9.12 17 10C17 10.88 16.837 11.724 16.54 12.5H16.541ZM12.286 3.382C13.8788 3.93407 15.2198 5.04081 16.064 6.5H13.61C13.4511 5.80695 13.2223 5.13182 12.927 4.485C12.7489 4.09756 12.5339 3.72818 12.285 3.382H12.286Z" fill="#121212" fillOpacity="0.54" /> </svg>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  );
};

export default ProfileEdit;
