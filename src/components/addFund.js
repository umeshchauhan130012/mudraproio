import React, { useState, useEffect } from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "semantic-ui-react";
import styles from "../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  walletAddFund,
  walletPaymodeIdAddress,
  walletPaymodeList,
} from "../redux/actions/wallet";
import { uploadDocument } from "../redux/actions/profile";
import CircularProgress from "@mui/material/CircularProgress";

export default function AddFund() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [SelectStake, setSelectStake] = useState("");
  const [paymentList, setPaymentList] = useState("");
  const [referralLink, setReferralLink] = useState("");
  const [amountUSD, setAmountUSD] = useState("");
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");
  const [amountUSDAlert, setAmountUSDAlert] = useState("");
  const [paymentModeAlert, setPaymentModeAlert] = useState("");
  const [referenceAlert, setReferenceAlert] = useState("");
  const [screenshotAlert, setScreenshotAlert] = useState("");
  const [loader, setLoader] = useState(false);
  const [imgfile, setUploadimg] = useState("");
  const [imgprofile, setUploadProfileimg] = useState("");
  const [success, setSuccess] = useState("");

  const status = useSelector((state) => state);
  const [addmessage, setAddMessage] = useState(false);

  const residential = (e) => {
    setSelectStake(e.target.value);
  };

  const fileUpload = (e) => {
    setUploadimg((imgfile) => [URL.createObjectURL(e.target.files[0])]);
    setUploadProfileimg(e.target.files[0]);
  };


  useEffect(() => {
    dispatch(walletPaymodeList());
  }, []);

  useEffect(() => {
    if(SelectStake.length != ""){
    let apiDataadd = { PayModeId: SelectStake};
    dispatch(walletPaymodeIdAddress(apiDataadd));
    }
  }, [SelectStake]);

  
  useEffect(() => {
    if (status.paymodeList.data !== "") {
      if (status.paymodeList.data.data.message === "success") {
        setPaymentList(status.paymodeList.data.data.result);
      }
    }
    if (status.paymodeIdAddress.data !== "") {
      if (status.paymodeIdAddress.data.data.message === "success") {
        setReferralLink(
          status.paymodeIdAddress.data.data.result[0].dataFieldText
        );
      }
      if (status.paymodeIdAddress.data.data.statusCode === "400") {
        setReferralLink("");
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.addFund.data !== "") {
      if (status.addFund.data.data.statusCode === "200") {
        setSuccess(status.addFund.data.data.message);
        removeSuccess();
      }
      if (status.addFund.data.data.statusCode === "400") {
        setAmountUSDAlert(status.addFund.data.data.message);
        removeError();
        setLoader(false);
        return;
      }
    }
  }, [status]);

  const removeSuccess = () => {
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const removeError = () => {
    setTimeout(() => {
      setAmountUSDAlert("");
    }, 6000);
  };

  const removePaymentError = () => {
    setTimeout(() => {
      setPaymentModeAlert("");
    }, 5000);
  };

  const removeReferenceError = () => {
    setTimeout(() => {
      setReferenceAlert("");
    }, 5000);
  };

  const removeScreenshotError = () => {
    setTimeout(() => {
      setScreenshotAlert("");
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amountUSD < 5) {
      setAmountUSDAlert("Amount should be multiple of 5 USDT");
      removeError();
      return;
    }

    if (SelectStake === "") {
      setPaymentModeAlert("Please select payment mode");
      removePaymentError();
      return;
    }
  
    if (reference === "") {
      setReferenceAlert("Please Enter a reference");
      removeReferenceError();
      return;
    }

    if (imgprofile === "") {
      setScreenshotAlert("Uploade image");
      removeScreenshotError();
      return;
    }

    if(amountUSD < 5 || SelectStake === "" || reference === "" || imgprofile === "") {
      return;
    }
    setLoader(true);

    if (reference && referralLink && amountUSD && SelectStake && imgprofile) {
      
      var bodyFormData = new FormData();
      bodyFormData.append("Amount", parseFloat(amountUSD, 10));
      bodyFormData.append("PayModeId", SelectStake);
      bodyFormData.append("Referenceno", reference);
      bodyFormData.append("docupload", imgprofile);
      bodyFormData.append("Remarks", reference);
      bodyFormData.append("message ", reference);
      dispatch(walletAddFund(bodyFormData));
      setSelectStake("");
      setAmountUSD("");
      setReference("");
      setMessage("");
      setUploadProfileimg("");
      setTimeout(() => {
        let path = `/user/wallet`;
        navigate(path);
        window.location.reload();
      }, 5000);
    }
  };

  return (
    <div className={styles.bypackages}>
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">
            Enter amount in USD
          </InputLabel>
          <FilledInput
            id="filled-adornment-name"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <MonetizationOnOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            type="number"
            onChange={(e) => setAmountUSD(e.target.value)}
            value={amountUSD}
          />
        </FormControl>
        {/* <div className="minimumval">Minimum Deposit 200 USD</div> */}
        {amountUSDAlert && amountUSDAlert ? (
          <div className="validationalert">{amountUSDAlert}</div>
        ) : (
          ""
        )}
      </div>
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">
            Payment Mode
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={SelectStake}
            onChange={residential}
          >
            <MenuItem value="">
              <label>None</label>
            </MenuItem>
            {paymentList &&
              paymentList.map((data, index) => (
                <MenuItem value={data.dataFieldId} key={index}>
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
      <div className="input_item">
        <div className={`${styles.refall} ${styles.refallinpst}`}>
          <input
            type="text"
            placeholder="Payment Mode Address"
            readOnly
            className={styles.refallcopy}
            onChange={(e) => setReferralLink(e.target.value)}
            value={referralLink}
          />
          <span className={styles.copuelement}>
            <span
              className={styles.cpyclipboard}
              onClick={() => {
                navigator.clipboard.writeText(referralLink);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 19.5C18 20.2956 17.6839 21.0587 17.1213 21.6213C16.5587 22.1839 15.7956 22.5 15 22.5H4.5C3.70435 22.5 2.94129 22.1839 2.37868 21.6213C1.81607 21.0587 1.5 20.2956 1.5 19.5V9C1.5 8.20435 1.81607 7.44129 2.37868 6.87868C2.94129 6.31607 3.70435 6 4.5 6V7.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H15C15.3978 21 15.7794 20.842 16.0607 20.5607C16.342 20.2794 16.5 19.8978 16.5 19.5H18Z"
                  fill="#0164EB"
                />
                <path
                  d="M9 3C8.60218 3 8.22064 3.15804 7.93934 3.43934C7.65804 3.72064 7.5 4.10218 7.5 4.5V15C7.5 15.3978 7.65804 15.7794 7.93934 16.0607C8.22064 16.342 8.60218 16.5 9 16.5H19.5C19.8978 16.5 20.2794 16.342 20.5607 16.0607C20.842 15.7794 21 15.3978 21 15V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3H9ZM9 1.5H19.5C20.2956 1.5 21.0587 1.81607 21.6213 2.37868C22.1839 2.94129 22.5 3.70435 22.5 4.5V15C22.5 15.7956 22.1839 16.5587 21.6213 17.1213C21.0587 17.6839 20.2956 18 19.5 18H9C8.20435 18 7.44129 17.6839 6.87868 17.1213C6.31607 16.5587 6 15.7956 6 15V4.5C6 3.70435 6.31607 2.94129 6.87868 2.37868C7.44129 1.81607 8.20435 1.5 9 1.5Z"
                  fill="#0164EB"
                />
              </svg>
            </span>
          </span>
        </div>
      </div>
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">Reference #</InputLabel>
          <FilledInput
            id="filled-adornment-name"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <SyncAltIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            onChange={(e) => setReference(e.target.value)}
            value={reference}
          />
        </FormControl>
        {referenceAlert && referenceAlert ? (
          <div className="validationalert">{referenceAlert}</div>
        ) : (
          ""
        )}
      </div>
      {addmessage ? (
        <div className="input_item">
          <FormControl variant="filled">
            <InputLabel htmlFor="filled-adornment-name">Add Message</InputLabel>
            <FilledInput
              id="filled-adornment-name"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <DriveFileRenameOutlineIcon />
                  </IconButton>
                </InputAdornment>
              }
              variant="filled"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </FormControl>
        </div>
      ) : (
        ""
      )}
      <div className="filelable">
        <span className="addsms" onClick={() => setAddMessage(true)}>
          {addmessage ? "" : "Add Message"}
        </span>
        <span className="uplodescreenshot">Upload Screenshot*</span>
      </div>
<div className="input_file_item_wrap">
      <div className="input_file_item">
        <FormControl variant="filled">
          <FilledInput
            id="filled-adornment-file-input"
            variant="filled"
            datalabel="Choose File"
            type="file"
            onChange={fileUpload}
          />
        </FormControl>
        {imgprofile.name ? (
          <div className="uplode-file-name">
            <label title="Receipt.pdf">{imgprofile.name}</label>
            <span
              className="removefile"
              onClick={() => setUploadProfileimg("")}
            >
              <img src="/images/closefile.png" alt="uplode icon" />
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
        {screenshotAlert && screenshotAlert ? (
          <div className="validationalert">{screenshotAlert}</div>
        ) : (
          ""
        )}
      </div>
      <div className="buttoncontain">
        {success && success ?
        <div className="successMessage">{success && success}</div>
        : ""}
        <Button primary onClick={handleSubmit}>Send request {loader ? (<CircularProgress size="15px" style={{ color: "#ffffff" }}/>) : ("")}</Button>
      </div>
    </div>
  );
}
