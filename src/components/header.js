import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import { Link, useLocation } from "react-router-dom";
import { Link as Scrolllink } from "react-scroll";
import styles from "../styles/header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import Context from "../context/Context";
import { auth } from "../config";
import { useSelector } from "react-redux";
// import { dashboardDeatils } from "../redux/actions/dashboard";

export default function Header() {
  const [open, closeMenu] = useState(false);
  // const [langopen, langcloseMenu] = useState(false);
  const [useropen, setUseropen] = useState(false);
  const status = useSelector((state) => state);
  const ContextOutput = useContext(Context);
  const { isOpen, setIsOpen } = ContextOutput;
  const [incomingTime, setIncomingTime] = useState("");

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   let apiData = {};
  //   dispatch(dashboardDeatils(apiData));
  // }, []);

  useEffect(() => {
    if (status.dashboardDetails.data !== "") {
      if (status.dashboardDetails.data.data.statusCode === "200") {
        setIncomingTime(status.dashboardDetails.data.data.result[0]);
        return;
      }
    }
  }, [status]);


  // const [activlang, setActivlang] = useState(
  //   localStorage.getItem("i18nextLng")
  //     ? localStorage.getItem("i18nextLng")
  //     : "en"
  // );
  // const { i18n } = useTranslation(["common"]);
  // useEffect(() => {
  //   let curentLang = localStorage.getItem("i18nextLng");
  //   i18next.changeLanguage(curentLang);
  // }, []);

  useEffect(() => {
    document.body.classList.toggle("sidemenu_open", isOpen);
  }, [isOpen]);

  // const handleLanguage = (data) => {
  //   const handleLanguageChange = (lang) => {
  //     i18n.changeLanguage(lang);
  //     localStorage.setItem("i18nextLng", lang);
  //     setActivlang(lang);
      // langcloseMenu(false);
  //   };
  //   handleLanguageChange(data);
  // };
  const router = useLocation();
  let rout = router.pathname.slice(0, 5);
  return (
    <>
      {router.pathname === "/accept-terms-conditions" ? (
        ""
      ) : (
        <div className={`${styles.header_wrapper} headerAlert`}>
          <div className={styles.custom_container}>
            <div className="row">
              <div className={styles.site_header}>
                <div className={styles.header_logo}>
                  <Link to={auth ? "/user/dashboard" : "/"}>
                    <img src="/images/logo.svg" alt="logo" />
                  </Link>
                </div>
                <div className={styles.header_menu_wrapper}>
                  {rout === "/user" ? (
                    <>
                      <div className={styles.dashboardmenu}>
                        <div className={styles.notification}>
                          <Link to="#">
                            <span className={styles.nitificationactive}></span>
                            <svg
                              width="27"
                              height="25"
                              viewBox="0 0 27 25"
                              fill="none"
                            >
                              <g clipPath="url(#clip0_729_16823)">
                                <path
                                  d="M19.8666 20.0084C19.2773 19.4831 18.7614 18.8808 18.3327 18.2179C17.8647 17.3028 17.5843 16.3034 17.5077 15.2784V12.2595C17.5118 10.6496 16.9278 9.09367 15.8655 7.88398C14.8032 6.67428 13.3358 5.89413 11.7388 5.6901V4.90177C11.7388 4.6854 11.6529 4.47789 11.4999 4.32489C11.3469 4.17189 11.1394 4.08594 10.923 4.08594C10.7066 4.08594 10.4991 4.17189 10.3461 4.32489C10.1931 4.47789 10.1072 4.6854 10.1072 4.90177V5.70233C8.52455 5.92106 7.07482 6.70593 6.02649 7.91156C4.97817 9.11719 4.40228 10.6619 4.4055 12.2595V15.2784C4.32896 16.3034 4.04848 17.3028 3.5805 18.2179C3.15938 18.8793 2.65173 19.4815 2.07106 20.0084C2.00587 20.0657 1.95363 20.1362 1.9178 20.2152C1.88198 20.2943 1.86339 20.38 1.86328 20.4668V21.2979C1.86328 21.46 1.92767 21.6154 2.04227 21.73C2.15688 21.8446 2.31232 21.909 2.47439 21.909H19.4633C19.6254 21.909 19.7808 21.8446 19.8954 21.73C20.01 21.6154 20.0744 21.46 20.0744 21.2979V20.4668C20.0743 20.38 20.0557 20.2943 20.0199 20.2152C19.984 20.1362 19.9318 20.0657 19.8666 20.0084ZM3.13439 20.6868C3.70298 20.1375 4.20359 19.522 4.6255 18.8534C5.21499 17.7482 5.55893 16.5288 5.63384 15.2784V12.2595C5.6096 11.5433 5.72973 10.8296 5.98709 10.1608C6.24444 9.49198 6.63374 8.8818 7.13182 8.36659C7.6299 7.85137 8.22656 7.44165 8.88628 7.16183C9.546 6.882 10.2553 6.7378 10.9719 6.7378C11.6885 6.7378 12.3978 6.882 13.0575 7.16183C13.7172 7.44165 14.3139 7.85137 14.812 8.36659C15.31 8.8818 15.6993 9.49198 15.9567 10.1608C16.214 10.8296 16.3342 11.5433 16.3099 12.2595V15.2784C16.3849 16.5288 16.7288 17.7482 17.3183 18.8534C17.7402 19.522 18.2408 20.1375 18.8094 20.6868H3.13439Z"
                                  fill="#121212"
                                  fillOpacity="0.87"
                                />
                                <path
                                  d="M11.0011 23.948C11.386 23.9392 11.7554 23.7944 12.044 23.5394C12.3325 23.2845 12.5216 22.9356 12.5777 22.5547H9.36328C9.42102 22.946 9.61892 23.303 9.92019 23.5593C10.2215 23.8156 10.6056 23.9537 11.0011 23.948Z"
                                  fill="#121212"
                                  fillOpacity="0.87"
                                />
                              </g>

                              <defs>
                                <clipPath id="clip0_729_16823">
                                  <rect
                                    width="22"
                                    height="22"
                                    fill="white"
                                    transform="translate(0 3)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </Link>
                        </div>
                        
                        <div className={styles.userloginactvi}>
                          <div className={styles.authorlogin}>
                            <div
                              className={styles.authorename}
                              onClick={() => {
                                setUseropen(!useropen);
                                setIsOpen(false);
                                // langcloseMenu(false);
                              }}
                              title={incomingTime && incomingTime.fullname}
                            >
                              <img
                                src="/images/circleuser.png"
                                height={24}
                                width={24}
                                alt="user"
                              />
                              <span>
                                {incomingTime && incomingTime.fullname}
                              </span>
                            </div>
                            <div
                              className={
                                useropen
                                  ? `${styles.submenuwrpuser} ${styles.submenuwrpuseropen}`
                                  : `${styles.submenuwrpuser}`
                              }
                            >
                              <div className={styles.useritem}>
                                <Link
                                  to="/user/setting/account"
                                  onClick={() => setUseropen(false)}
                                >
                                  <span>
                                    <svg
                                      width="22"
                                      height="22"
                                      viewBox="0 0 22 22"
                                      fill="none"
                                    >
                                      <path
                                        d="M13.0775 0.5C13.2362 0.500005 13.3909 0.550406 13.5192 0.643944C13.6476 0.737482 13.7429 0.86933 13.7915 1.0205L14.6165 3.584C14.963 3.7535 15.2945 3.944 15.611 4.1585L18.245 3.5915C18.4003 3.55834 18.5621 3.57534 18.7071 3.64003C18.8521 3.70473 18.9729 3.81379 19.052 3.9515L21.131 7.55C21.2103 7.68763 21.244 7.84693 21.227 8.0049C21.21 8.16288 21.1433 8.31139 21.0365 8.429L19.229 10.424C19.2553 10.8065 19.2553 11.1905 19.229 11.573L21.0365 13.571C21.1433 13.6886 21.21 13.8371 21.227 13.9951C21.244 14.1531 21.2103 14.3124 21.131 14.45L19.052 18.05C18.9727 18.1874 18.8518 18.2962 18.7068 18.3606C18.5618 18.425 18.4001 18.4418 18.245 18.4085L15.611 17.8415C15.296 18.0545 14.963 18.2465 14.618 18.416L13.7915 20.9795C13.7429 21.1307 13.6476 21.2625 13.5192 21.3561C13.3909 21.4496 13.2362 21.5 13.0775 21.5H8.91945C8.76067 21.5 8.60598 21.4496 8.47767 21.3561C8.34936 21.2625 8.25404 21.1307 8.20545 20.9795L7.38195 18.4175C7.03638 18.2485 6.70307 18.0555 6.38445 17.84L3.75195 18.4085C3.59665 18.4417 3.43483 18.4247 3.28981 18.36C3.14478 18.2953 3.02403 18.1862 2.94495 18.0485L0.865953 14.45C0.786565 14.3124 0.752939 14.1531 0.769923 13.9951C0.786907 13.8371 0.853624 13.6886 0.960453 13.571L2.76795 11.573C2.74177 11.1914 2.74177 10.8086 2.76795 10.427L0.960453 8.429C0.853624 8.31139 0.786907 8.16288 0.769923 8.0049C0.752939 7.84693 0.786565 7.68763 0.865953 7.55L2.94495 3.95C3.02425 3.81256 3.14509 3.70381 3.2901 3.63939C3.43511 3.57497 3.59681 3.55821 3.75195 3.5915L6.38445 4.16C6.70245 3.9455 7.03545 3.752 7.38195 3.5825L8.20695 1.0205C8.25538 0.869817 8.35024 0.738318 8.47795 0.644825C8.60567 0.551332 8.75968 0.500639 8.91795 0.5H13.076H13.0775ZM12.5285 2H9.46845L8.61645 4.6505L8.04195 4.931C7.75953 5.06921 7.48689 5.22657 7.22595 5.402L6.69495 5.762L3.97095 5.174L2.44095 7.826L4.30845 9.893L4.26345 10.529C4.2419 10.8426 4.2419 11.1574 4.26345 11.471L4.30845 12.107L2.43795 14.174L3.96945 16.826L6.69345 16.2395L7.22445 16.598C7.48539 16.7734 7.75803 16.9308 8.04045 17.069L8.61495 17.3495L9.46845 20H12.5315L13.3865 17.348L13.9595 17.069C14.2416 16.9311 14.5137 16.7737 14.774 16.598L15.3035 16.2395L18.029 16.826L19.559 14.174L17.69 12.107L17.735 11.471C17.7566 11.1569 17.7566 10.8416 17.735 10.5275L17.69 9.8915L19.5605 7.826L18.029 5.174L15.3035 5.759L14.774 5.402C14.5138 5.22622 14.2416 5.06884 13.9595 4.931L13.3865 4.652L12.53 2H12.5285ZM10.9985 6.5C12.1919 6.5 13.3365 6.97411 14.1804 7.81802C15.0243 8.66193 15.4985 9.80653 15.4985 11C15.4985 12.1935 15.0243 13.3381 14.1804 14.182C13.3365 15.0259 12.1919 15.5 10.9985 15.5C9.80498 15.5 8.66039 15.0259 7.81647 14.182C6.97256 13.3381 6.49845 12.1935 6.49845 11C6.49845 9.80653 6.97256 8.66193 7.81647 7.81802C8.66039 6.97411 9.80498 6.5 10.9985 6.5ZM10.9985 8C10.2028 8 9.43974 8.31607 8.87713 8.87868C8.31452 9.44129 7.99845 10.2044 7.99845 11C7.99845 11.7956 8.31452 12.5587 8.87713 13.1213C9.43974 13.6839 10.2028 14 10.9985 14C11.7941 14 12.5572 13.6839 13.1198 13.1213C13.6824 12.5587 13.9985 11.7956 13.9985 11C13.9985 10.2044 13.6824 9.44129 13.1198 8.87868C12.5572 8.31607 11.7941 8 10.9985 8Z"
                                        fill="#121212"
                                        fillOpacity="0.87"
                                      />
                                    </svg>
                                  </span>
                                  Account Settings
                                </Link>
                              </div>
                              <div className={styles.useritem}>
                                <Link
                                  to="/user/user-details"
                                  onClick={() => setUseropen(false)}
                                >
                                  <span>
                                    <img
                                      src="/images/circleuser.png"
                                      height={24}
                                      width={24}
                                      alt="user"
                                    />
                                  </span>
                                  Profile
                                </Link>
                              </div>
                              <div className={styles.useritem}>
                                <Link to="#" onClick={() => setUseropen(false)}>
                                  <span>
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M2 12L7 16V13H16V11H7V8L2 12Z"
                                        fill="#EE4135"
                                      />
                                      <path
                                        d="M13.0007 2.999C11.8182 2.99572 10.6469 3.22711 9.55447 3.67976C8.46206 4.13241 7.47032 4.79733 6.63672 5.636L8.05072 7.05C9.37272 5.728 11.1307 4.999 13.0007 4.999C14.8707 4.999 16.6287 5.728 17.9507 7.05C19.2727 8.372 20.0017 10.13 20.0017 12C20.0017 13.87 19.2727 15.628 17.9507 16.95C16.6287 18.272 14.8707 19.001 13.0007 19.001C11.1307 19.001 9.37272 18.272 8.05072 16.95L6.63672 18.364C8.33572 20.064 10.5957 21.001 13.0007 21.001C15.4057 21.001 17.6657 20.064 19.3647 18.364C21.0647 16.665 22.0017 14.405 22.0017 12C22.0017 9.595 21.0647 7.335 19.3647 5.636C18.5311 4.79733 17.5394 4.13241 16.447 3.67976C15.3546 3.22711 14.1832 2.99572 13.0007 2.999V2.999Z"
                                        fill="#EE4135"
                                      />
                                    </svg>
                                  </span>
                                  <span
                                    onClick={() => {
                                      window.sessionStorage.clear();
                                      window.location.reload();
                                    }}
                                  >
                                    Log Out
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.triggerheader}
                        onClick={() => {
                          setIsOpen(!isOpen);
                        }}
                      >
                        <MenuIcon fontSize="large" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.login_signup}>
                        <ul>
                          <li>
                            <Link
                              to="/login"
                              className="lightbtn"
                              onClick={() => {
                                closeMenu(false);
                                // langcloseMenu(false);
                              }}
                            >
                              LOGIN
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/sign-up"
                              className="darkbtn"
                              onClick={() => {
                                closeMenu(false);
                                // langcloseMenu(false);
                              }}
                            >
                              SIGN UP
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className={styles.header_menu}>
                        <Link
                          className={
                            open ? "menu_trigger open" : "menu_trigger"
                          }
                          onClick={() => {
                            closeMenu(!open);
                            // langcloseMenu(false);
                          }}
                          to="/"
                        >
                          <span className={styles.hamblaric}>
                            <em>
                              <svg viewBox="0 0 24 24" fill="none">
                                <path
                                  d="M6 7H11C11.2652 7 11.5196 7.10536 11.7071 7.29289C11.8946 7.48043 12 7.73478 12 8C12 8.26522 11.8946 8.51957 11.7071 8.70711C11.5196 8.89464 11.2652 9 11 9H6C5.73478 9 5.48043 8.89464 5.29289 8.70711C5.10536 8.51957 5 8.26522 5 8C5 7.73478 5.10536 7.48043 5.29289 7.29289C5.48043 7.10536 5.73478 7 6 7V7ZM13 15H18C18.2652 15 18.5196 15.1054 18.7071 15.2929C18.8946 15.4804 19 15.7348 19 16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H13C12.7348 17 12.4804 16.8946 12.2929 16.7071C12.1054 16.5196 12 16.2652 12 16C12 15.7348 12.1054 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15ZM6 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11Z"
                                  fill="#121212"
                                  fillOpacity="0.87"
                                />
                              </svg>
                            </em>
                            <label>&nbsp;MENU</label>
                          </span>
                        </Link>
                        <div
                          className={
                            open
                              ? "custom_menuprimary_wrapper open"
                              : "custom_menuprimary_wrapper"
                          }
                        >
                          <div className={styles.custom_menuprimary_container}>
                            <div className={styles.custom_menuprimary_row}>
                              <div className={styles.custom_menuprimary_flex}>
                                <span
                                  className={styles.close_menu}
                                  onClick={() => closeMenu(!open)}
                                >
                                  <svg
                                    width="36"
                                    height="36"
                                    viewBox="0 0 36 36"
                                    fill="none"
                                  >
                                    <path
                                      d="M27.4425 8.5575C26.8585 7.97346 25.9115 7.97346 25.3275 8.5575L18 15.885L10.6725 8.5575C10.0885 7.97346 9.14154 7.97346 8.5575 8.5575C7.97346 9.14154 7.97346 10.0885 8.5575 10.6725L15.885 18L8.5575 25.3275C7.97346 25.9115 7.97346 26.8585 8.5575 27.4425C9.14154 28.0265 10.0885 28.0265 10.6725 27.4425L18 20.115L25.3275 27.4425C25.9115 28.0265 26.8585 28.0265 27.4425 27.4425C28.0265 26.8585 28.0265 25.9115 27.4425 25.3275L20.115 18L27.4425 10.6725C28.0265 10.0885 28.0265 9.14154 27.4425 8.5575Z"
                                      fill="white"
                                    />
                                  </svg>
                                </span>
                                <ul className={styles.custom_menuprimary}>
                                  <li>
                                    <Scrolllink
                                      to="aboutscroll"
                                      spy={true}
                                      smooth={true}
                                      offset={-50}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      About us
                                    </Scrolllink>
                                  </li>
                                  <li>
                                    <Scrolllink
                                      to="growthstrategy"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      Growth strategy
                                    </Scrolllink>
                                  </li>
                                  <li>
                                    <Scrolllink
                                      to="howtostart"
                                      spy={true}
                                      smooth={true}
                                      offset={-30}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      How to Start
                                    </Scrolllink>
                                  </li>
                                  <li>
                                    <Scrolllink
                                      to="ourevents"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      Our Events
                                    </Scrolllink>
                                  </li>
                                  <li>
                                    <Scrolllink
                                      to="tokenallocation"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      Token Allocation
                                    </Scrolllink>
                                  </li>
                                  <li>
                                    <Scrolllink
                                      to="whychooseus"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      Why choose us?
                                    </Scrolllink>
                                  </li>
                                  <li>
                                    <Scrolllink
                                      to="ourteam"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      Our Team
                                    </Scrolllink>
                                  </li>
                                  <li>
                                    <Scrolllink
                                      to="ourpartners"
                                      spy={true}
                                      smooth={true}
                                      offset={-90}
                                      duration={500}
                                      onClick={() => closeMenu(false)}
                                    >
                                      Our Partners
                                    </Scrolllink>
                                  </li>
                                  <li className={styles.menu_button}>
                                    <Link
                                      to="/sign-up"
                                      onClick={() => closeMenu(false)}
                                    >
                                      TRY FOR FREE
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {/* <div className={styles.language_switcher}>
                    <div
                      className={styles.language_switch_in}
                      onClick={() => {
                        langcloseMenu(!langopen);
                        closeMenu(false);
                        setUseropen(false);
                      }}
                    >
                      <span
                        className={
                          langopen
                            ? `${styles.lang_active} ${activlang}`
                            : `${styles.lang_active} ${activlang}`
                        }
                      ></span>
                    </div>
                    <ul
                      className={
                        langopen
                          ? `${styles.lang_droupdown} ${styles.lang_droupdown_open}`
                          : `${styles.lang_droupdown}`
                      }
                    >
                      <li>
                        <button
                          onClick={() => handleLanguage("en")}
                          className="en"
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguage("ch")}
                          className="ch"
                        >
                          한국어
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguage("de")}
                          className="de"
                        >
                          Deutsch
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguage("hi")}
                          className="hi"
                        >
                          Hindi
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguage("py")}
                          className="py"
                        >
                          Русский
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguage("fr")}
                          className="fr"
                        >
                          Français
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguage("es")}
                          className="es"
                        >
                          Español
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleLanguage("it")}
                          className="it"
                        >
                          Italiano
                        </button>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
