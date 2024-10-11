import React from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import StorageIcon from "@mui/icons-material/Storage";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "../styles/dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { bypackages } from "../redux/actions/dashboard";
import { useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import {
  walletVerifyTransfer,
  walletGetUSDT,
  walletGetMDR,
} from "../redux/actions/wallet";
import CircularProgress from "@mui/material/CircularProgress";

export default function BuyPackageform() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [invalidUser, setInvalidUser] = useState(false);
  const [validAmount, setValidAmount] = useState("");
  const [validUser, setValidUser] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  // const initialInput = { amountUsd: "", amountMdr: "", userId: "" };
  const [packages, setPackages] = useState(1);
  // const [formInput, setFormInput] = useState(initialInput);

  const [amountUsd, setAmountUsd] = useState("");
  const [amountMdr, setAmountMdr] = useState("");
  const [userId, setUserId] = useState("");

  const [amountConvertedUsdt, setAmountConvertedUsdt] = useState("");
  const [amountConvertedMdr, setAmountConvertedMdr] = useState("");
  const [buyIngSuccess, setBuyIngSuccess] = useState("");
  const [loader, setLoader] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const status = useSelector((state) => state);

  // const handleChange = (e) => {
  //   setFormInput((pevState) => {
  //     return { ...pevState, [e.target.name]: e.target.value };
  //   });
  // };

  // console.log(amountUsd.length === 0 ? 'uhghgihi' : 'hello');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (amountUsd < 100 && amountMdr < 100) {
      setValidAmount("Enter Amount");
    }
    if (userId.length < 4) {
      setValidUser("Enter User Id");
    }
    if (
      (amountUsd && userId) ||
      (amountMdr && userId)
    ) {
      let apiData = {
        PackageId: packages,
        Amount: parseFloat(
          amountUsd !== ""
            ? amountUsd
            : amountConvertedUsdt.usdTamount,
          10
        ),
        ChildLoginId: userId,
      };
      setLoader(true)
      dispatch(bypackages(apiData));
      // setFormInput(initialInput);
      return;
    }
  };

  useEffect(() => {
    if (userId) {
      const apiData = { ChildLoginId: userId };
      dispatch(walletVerifyTransfer(apiData));
    }
  }, [userId]);

  useEffect(() => {
    if (amountUsd) {
      let apiData = { Amount: parseFloat(amountUsd, 10) };
      dispatch(walletGetMDR(apiData));
    }
    if (amountMdr) {
      let apiData = { Amount: parseFloat(amountMdr, 10) };
      dispatch(walletGetUSDT(apiData));
    }
    setAmountConvertedMdr("");
    setAmountConvertedUsdt("");
  }, [isBlur]);

  useEffect(() => {
    if (status.getMdr.data !== "") {
      if (status.getMdr.data.data.statusCode === "200") {
        setAmountConvertedMdr(status.getMdr.data.data.result);
        setValidAmount("");
      }
    }
    if (status.getUsdt.data !== "") {
      if (status.getUsdt.data.data.statusCode === "200") {
        setAmountConvertedUsdt(status.getUsdt.data.data.result);
        setValidAmount("");
      }
    }
  }, [status]);

  useEffect(() => {
    if (status.varifyTransfer.data !== "") {
      if (status.varifyTransfer.data.data.statusCode === "200") {
        setInvalidUser(true);
        return;
      }
      setInvalidUser(false);
    }
  }, [status]);
  

  useEffect(() => {
    if (status.bypackages.data !== "") {
      if (status.bypackages.data.data.statusCode === "200") {
        //console.log(status.bypackages.data.data);
        setBuyIngSuccess(status.bypackages.data.data.message);
        setLoader(false);
        removeError();
        setTimeout(() => {
          let path = `/user/buy-package/package`;
          navigate(path);
          window.location.reload();
        }, 2000);
        return;
      } 
      setBuyIngSuccess("");
      if (status.bypackages.data.data.statusCode === "400") {
        setEnterAmount(status.bypackages.data.data.message);
        setLoader(false);
        setTimeout(() => {
          let path = `/user/buy-package/package`;
          navigate(path);
          //window.location.reload();
        }, 2000);
      }
    }
  }, [status]);

  useEffect(() => {
  if (userId.length > 4) {
    setValidUser("");
  }
}, [userId]);

  const removeError = () => {
    setTimeout(() => {
      setBuyIngSuccess("");
    }, 2000);
  };


  return (
    <div className="bypackages">
      <div className={styles.hascheckbox}>
      <div className={styles.checkboxcontent}>
          <div className={`${styles.checkboxcontentin} ${styles.height100}`}>
            <input
              type="radio"
              name="modetype"
              defaultChecked={false}
              onClick={() => setPackages(7)}
            />
            <div className={styles.checkboxlabel}>
              <h5 style={{ color: "#0164eb" }}>Smart Mode</h5>
              <p>
               In smart mode you will received a continious staking air drop untill 24 months
              </p>
            </div>
          </div>
        </div>
        <div className={styles.checkboxcontent}>
          <div className={`${styles.checkboxcontentin} ${styles.height100}`}>
            <input
              type="radio"
              name="modetype"
              defaultChecked={true}
              onClick={() => setPackages(1)}
            />
            <div className={styles.checkboxlabel}>
              <h5 style={{ color: "#1dbf74" }}>Safe Mode</h5>
              <p>
                In safe mode your dollars would be staked and at the end of the
                year you will get your USD back or your initial investment back
                , in the form of mudra.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.checkboxcontent}>
          <div className={`${styles.checkboxcontentin} ${styles.height100}`}>
            <input
              type="radio"
              name="modetype"
              defaultChecked={false}
              onClick={() => setPackages(2)}
            />
            <div className={styles.checkboxlabel}>
              <h5>Risk Mode</h5>
              <p>
                In risk mode your coins are staked and at the time of maturity
                you will get your coin what ever would be staked at the initial
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">
            Enter amount in USD
          </InputLabel>
          <FilledInput
            id="filled-adornment-name"
            value={
              amountMdr !== ""
                ? amountConvertedUsdt.usdTamount
                : amountUsd
            }
            readOnly={amountMdr !== "" ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <MonetizationOnOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            name="amountUsd"
            type="number"
            onChange={(e) => setAmountUsd(e.target.value)}
            // onChange={handleChange}
            onBlur={() => setIsBlur(!isBlur)}
          />
        </FormControl>
        {validAmount && validAmount ? (
          <div className="validationalert">{validAmount && validAmount}</div>
        ) : (
          ""
        )}
        {enterAmount && enterAmount ? (
          <div className="validationalert">{enterAmount && enterAmount}</div>
        ) : (
          ""
        )}

        {/* {amountUsd && (
          <div className="minimumval">
            {amountConvertedMdr && amountConvertedMdr.mdRamount} in MDR
          </div>
        )} */}
      </div>
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">
            Enter amount in MDR
          </InputLabel> 
          <FilledInput
            id="filled-adornment-name"
            value={
              amountUsd !== ""
              ? amountConvertedMdr.mdRamount
              : amountMdr
            }
            readOnly={amountUsd !== "" ? true : false}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <StorageIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            name="amountMdr"
            type="number"
            // onChange={handleChange}
            onChange={(e) => setAmountMdr(e.target.value)}
            onBlur={() => setIsBlur(!isBlur)}
          />
        </FormControl>
        {validAmount && validAmount ? (
          <div className="validationalert">{validAmount && validAmount}</div>
        ) : (
          ""
        )}

        {/* {amountMdr && (
          <div className="minimumval">
            {amountConvertedUsdt && amountConvertedUsdt.usdTamount} in USDT
          </div>
        )} */}

      </div>
      <div className="input_item">
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-name">User id</InputLabel>
          <FilledInput
            id="filled-adornment-name"
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </InputAdornment>
            }
            variant="filled"
            name="userId"
            successuser={invalidUser && invalidUser ? "validuser" : "invalid"}
            // onChange={handleChange}
            onChange={(e) => setUserId(e.target.value)}
          />
        </FormControl>
        {invalidUser && invalidUser ? (<label className="validationalert">{invalidUser && invalidUser}</label>) : ("")}
        {validUser && validUser ? (<label className="validationalert">{validUser && validUser}</label>) : ("")}
      </div>
      <div className="buttoncontain">
        {buyIngSuccess && buyIngSuccess ? <div className="successMessage">{buyIngSuccess && buyIngSuccess}</div>: ""}
        <Button  primary onClick={handleSubmit}>Buy Package  {loader ? ( <CircularProgress size="15px" style={{ color: "#ffffff" }}/> ) : (  "" )}</Button>
      </div>
    </div>
  );
}
