import React, { useEffect, useState } from "react";
import styles from "../../styles/dashboard.module.css";
import { Tab } from "semantic-ui-react";
// import { useDispatch, useSelector } from "react-redux";
// import { eventList } from "../../redux/actions/dashboard";

export const Event = () => {
  //   const [eventData, setEventData] = useState([]);
  //   const dispatch = useDispatch();
  //   const status = useSelector((state) => state);
  //   useEffect(() => {
  //     dispatch(eventList());
  //   }, []);

  //   useEffect(() => {
  //     if (status.eventList.data !== "") {
  //       if (status.eventList.data.data.statusCode === "200") {
  //         setEventData();
  //         console.log(status.eventList.data.data.statusCode);
  //       }
  //     }
  //   }, [status]);

  const panes = [
    {
      menuItem: "Upcoming Events",
      render: () => (
        <Tab.Pane attached={false}>
          <>
            <div className={`${styles.dashboard_content_item} ${styles.padding10}`}>
              <h2 style={{padding: "30px 10px"}}>Work In Progress</h2>
              {/* <div className={`tableholder ${styles.bordercolor} ${styles.padding10}`}>
                
                <div className={styles.eventwrapper}>
                  <div className={styles.eventitem}>
                    <div className={styles.eventinner}>
                      <div className={styles.eventitemborder}>
                        <div className={styles.eventimage}>
                          <img src="/images/event1.png" alt="event" />
                        </div>
                        <div className={styles.eventdate}>
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 1V5M15 1V5M1 9H21"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <label>Oct 23, 2022</label>
                        </div>
                        <h4>App Launch Meeting</h4>
                        <ul className={styles.eventlocation}>
                          <li>Noida, UP</li>
                          <li>
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                            >
                              <path
                                d="M8.1164 21.2641C6.94368 19.632 5.94667 18.2685 5.09929 17.1097C3.58461 15.0383 2.54796 13.6206 1.84022 12.4909C1.29489 11.6204 0.965039 10.9509 0.768017 10.3122C0.572315 9.67781 0.5 9.04893 0.5 8.25C0.5 3.98882 4.10425 0.5 8.59375 0.5C13.0833 0.5 16.6875 3.98882 16.6875 8.25C16.6875 9.04893 16.6152 9.67781 16.4195 10.3122C16.2225 10.9509 15.8926 11.6204 15.3473 12.4909C14.6395 13.6206 13.6029 15.0383 12.0882 17.1097C11.2408 18.2686 10.2438 19.6321 9.07099 21.2642C8.84368 21.5787 8.34359 21.5786 8.1164 21.2641ZM8.59375 12.1875C10.8281 12.1875 12.6745 10.4437 12.6745 8.25C12.6745 6.05633 10.8281 4.3125 8.59375 4.3125C6.35945 4.3125 4.51302 6.05633 4.51302 8.25C4.51302 10.4437 6.35945 12.1875 8.59375 12.1875Z"
                                stroke="#0164EB"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.eventitem}>
                    <div className={styles.eventinner}>
                      <div className={styles.eventitemborder}>
                        <div className={styles.eventimage}>
                          <img src="/images/event1.png" alt="event" />
                        </div>
                        <div className={styles.eventdate}>
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 1V5M15 1V5M1 9H21"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <label>Oct 23, 2022</label>
                        </div>
                        <h4>App Launch Meeting</h4>
                        <ul className={styles.eventlocation}>
                          <li>Noida, UP</li>
                          <li>
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                            >
                              <path
                                d="M8.1164 21.2641C6.94368 19.632 5.94667 18.2685 5.09929 17.1097C3.58461 15.0383 2.54796 13.6206 1.84022 12.4909C1.29489 11.6204 0.965039 10.9509 0.768017 10.3122C0.572315 9.67781 0.5 9.04893 0.5 8.25C0.5 3.98882 4.10425 0.5 8.59375 0.5C13.0833 0.5 16.6875 3.98882 16.6875 8.25C16.6875 9.04893 16.6152 9.67781 16.4195 10.3122C16.2225 10.9509 15.8926 11.6204 15.3473 12.4909C14.6395 13.6206 13.6029 15.0383 12.0882 17.1097C11.2408 18.2686 10.2438 19.6321 9.07099 21.2642C8.84368 21.5787 8.34359 21.5786 8.1164 21.2641ZM8.59375 12.1875C10.8281 12.1875 12.6745 10.4437 12.6745 8.25C12.6745 6.05633 10.8281 4.3125 8.59375 4.3125C6.35945 4.3125 4.51302 6.05633 4.51302 8.25C4.51302 10.4437 6.35945 12.1875 8.59375 12.1875Z"
                                stroke="#0164EB"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.eventitem}>
                    <div className={styles.eventinner}>
                      <div className={styles.eventitemborder}>
                        <div className={styles.eventimage}>
                          <img src="/images/event1.png" alt="event" />
                        </div>
                        <div className={styles.eventdate}>
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 1V5M15 1V5M1 9H21"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <label>Oct 23, 2022</label>
                        </div>
                        <h4>App Launch Meeting</h4>
                        <ul className={styles.eventlocation}>
                          <li>Noida, UP</li>
                          <li>
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                            >
                              <path
                                d="M8.1164 21.2641C6.94368 19.632 5.94667 18.2685 5.09929 17.1097C3.58461 15.0383 2.54796 13.6206 1.84022 12.4909C1.29489 11.6204 0.965039 10.9509 0.768017 10.3122C0.572315 9.67781 0.5 9.04893 0.5 8.25C0.5 3.98882 4.10425 0.5 8.59375 0.5C13.0833 0.5 16.6875 3.98882 16.6875 8.25C16.6875 9.04893 16.6152 9.67781 16.4195 10.3122C16.2225 10.9509 15.8926 11.6204 15.3473 12.4909C14.6395 13.6206 13.6029 15.0383 12.0882 17.1097C11.2408 18.2686 10.2438 19.6321 9.07099 21.2642C8.84368 21.5787 8.34359 21.5786 8.1164 21.2641ZM8.59375 12.1875C10.8281 12.1875 12.6745 10.4437 12.6745 8.25C12.6745 6.05633 10.8281 4.3125 8.59375 4.3125C6.35945 4.3125 4.51302 6.05633 4.51302 8.25C4.51302 10.4437 6.35945 12.1875 8.59375 12.1875Z"
                                stroke="#0164EB"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Past Events",
      render: () => (
        <Tab.Pane attached={false}>
          <>
            <div className={`${styles.dashboard_content_item} ${styles.padding10}`} >
            <h2 style={{padding: "30px 10px"}}>Work In Progress</h2>
              {/* <div className={`tableholder ${styles.bordercolor} ${styles.padding10}`}>
                <div className={styles.eventwrapper}>
                  <div className={styles.eventitem}>
                    <div className={styles.eventinner}>
                      <div className={styles.eventitemborder}>
                        <div className={styles.eventimage}>
                          <img src="/images/event1.png" alt="event" />
                        </div>
                        <div className={styles.eventdate}>
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 1V5M15 1V5M1 9H21"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <label>Oct 23, 2022</label>
                        </div>
                        <h4>App Launch Meeting</h4>
                        <ul className={styles.eventlocation}>
                          <li>Noida, UP</li>
                          <li>
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                            >
                              <path
                                d="M8.1164 21.2641C6.94368 19.632 5.94667 18.2685 5.09929 17.1097C3.58461 15.0383 2.54796 13.6206 1.84022 12.4909C1.29489 11.6204 0.965039 10.9509 0.768017 10.3122C0.572315 9.67781 0.5 9.04893 0.5 8.25C0.5 3.98882 4.10425 0.5 8.59375 0.5C13.0833 0.5 16.6875 3.98882 16.6875 8.25C16.6875 9.04893 16.6152 9.67781 16.4195 10.3122C16.2225 10.9509 15.8926 11.6204 15.3473 12.4909C14.6395 13.6206 13.6029 15.0383 12.0882 17.1097C11.2408 18.2686 10.2438 19.6321 9.07099 21.2642C8.84368 21.5787 8.34359 21.5786 8.1164 21.2641ZM8.59375 12.1875C10.8281 12.1875 12.6745 10.4437 12.6745 8.25C12.6745 6.05633 10.8281 4.3125 8.59375 4.3125C6.35945 4.3125 4.51302 6.05633 4.51302 8.25C4.51302 10.4437 6.35945 12.1875 8.59375 12.1875Z"
                                stroke="#0164EB"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.eventitem}>
                    <div className={styles.eventinner}>
                      <div className={styles.eventitemborder}>
                        <div className={styles.eventimage}>
                          <img src="/images/event1.png" alt="event" />
                        </div>
                        <div className={styles.eventdate}>
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 1V5M15 1V5M1 9H21"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <label>Oct 23, 2022</label>
                        </div>
                        <h4>App Launch Meeting</h4>
                        <ul className={styles.eventlocation}>
                          <li>Noida, UP</li>
                          <li>
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                            >
                              <path
                                d="M8.1164 21.2641C6.94368 19.632 5.94667 18.2685 5.09929 17.1097C3.58461 15.0383 2.54796 13.6206 1.84022 12.4909C1.29489 11.6204 0.965039 10.9509 0.768017 10.3122C0.572315 9.67781 0.5 9.04893 0.5 8.25C0.5 3.98882 4.10425 0.5 8.59375 0.5C13.0833 0.5 16.6875 3.98882 16.6875 8.25C16.6875 9.04893 16.6152 9.67781 16.4195 10.3122C16.2225 10.9509 15.8926 11.6204 15.3473 12.4909C14.6395 13.6206 13.6029 15.0383 12.0882 17.1097C11.2408 18.2686 10.2438 19.6321 9.07099 21.2642C8.84368 21.5787 8.34359 21.5786 8.1164 21.2641ZM8.59375 12.1875C10.8281 12.1875 12.6745 10.4437 12.6745 8.25C12.6745 6.05633 10.8281 4.3125 8.59375 4.3125C6.35945 4.3125 4.51302 6.05633 4.51302 8.25C4.51302 10.4437 6.35945 12.1875 8.59375 12.1875Z"
                                stroke="#0164EB"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.eventitem}>
                    <div className={styles.eventinner}>
                      <div className={styles.eventitemborder}>
                        <div className={styles.eventimage}>
                          <img src="/images/event1.png" alt="event" />
                        </div>
                        <div className={styles.eventdate}>
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 1V5M15 1V5M1 9H21"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <label>Oct 23, 2022</label>
                        </div>
                        <h4>App Launch Meeting</h4>
                        <ul className={styles.eventlocation}>
                          <li>Noida, UP</li>
                          <li>
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                            >
                              <path
                                d="M8.1164 21.2641C6.94368 19.632 5.94667 18.2685 5.09929 17.1097C3.58461 15.0383 2.54796 13.6206 1.84022 12.4909C1.29489 11.6204 0.965039 10.9509 0.768017 10.3122C0.572315 9.67781 0.5 9.04893 0.5 8.25C0.5 3.98882 4.10425 0.5 8.59375 0.5C13.0833 0.5 16.6875 3.98882 16.6875 8.25C16.6875 9.04893 16.6152 9.67781 16.4195 10.3122C16.2225 10.9509 15.8926 11.6204 15.3473 12.4909C14.6395 13.6206 13.6029 15.0383 12.0882 17.1097C11.2408 18.2686 10.2438 19.6321 9.07099 21.2642C8.84368 21.5787 8.34359 21.5786 8.1164 21.2641ZM8.59375 12.1875C10.8281 12.1875 12.6745 10.4437 12.6745 8.25C12.6745 6.05633 10.8281 4.3125 8.59375 4.3125C6.35945 4.3125 4.51302 6.05633 4.51302 8.25C4.51302 10.4437 6.35945 12.1875 8.59375 12.1875Z"
                                stroke="#0164EB"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.eventitem}>
                    <div className={styles.eventinner}>
                      <div className={styles.eventitemborder}>
                        <div className={styles.eventimage}>
                          <img src="/images/event1.png" alt="event" />
                        </div>
                        <div className={styles.eventdate}>
                          <span>
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M7 1V5M15 1V5M1 9H21"
                                stroke="#7F7F7F"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <label>Oct 23, 2022</label>
                        </div>
                        <h4>App Launch Meeting</h4>
                        <ul className={styles.eventlocation}>
                          <li>Noida, UP</li>
                          <li>
                            <svg
                              width="18"
                              height="22"
                              viewBox="0 0 18 22"
                              fill="none"
                            >
                              <path
                                d="M8.1164 21.2641C6.94368 19.632 5.94667 18.2685 5.09929 17.1097C3.58461 15.0383 2.54796 13.6206 1.84022 12.4909C1.29489 11.6204 0.965039 10.9509 0.768017 10.3122C0.572315 9.67781 0.5 9.04893 0.5 8.25C0.5 3.98882 4.10425 0.5 8.59375 0.5C13.0833 0.5 16.6875 3.98882 16.6875 8.25C16.6875 9.04893 16.6152 9.67781 16.4195 10.3122C16.2225 10.9509 15.8926 11.6204 15.3473 12.4909C14.6395 13.6206 13.6029 15.0383 12.0882 17.1097C11.2408 18.2686 10.2438 19.6321 9.07099 21.2642C8.84368 21.5787 8.34359 21.5786 8.1164 21.2641ZM8.59375 12.1875C10.8281 12.1875 12.6745 10.4437 12.6745 8.25C12.6745 6.05633 10.8281 4.3125 8.59375 4.3125C6.35945 4.3125 4.51302 6.05633 4.51302 8.25C4.51302 10.4437 6.35945 12.1875 8.59375 12.1875Z"
                                stroke="#0164EB"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div className={` ${styles.dashboard_content} tabsglobalstyle `}>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
};
