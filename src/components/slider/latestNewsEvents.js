import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { eventList } from "../../redux/actions/dashboard";
import styles from "../../styles/dashboard.module.css";

export default function LatestNewsEvents() {
  const [eventData, setEventData] = useState([]);
  const dispatch = useDispatch();
  const status = useSelector((state) => state);
  useEffect(() => {
    dispatch(eventList());
  }, []);

  useEffect(() => {
    if (status.eventList.data !== "") {
      if (status.eventList.data.data.statusCode === "200") {
        setEventData(status.eventList.data.data.result);
      }
    }
  }, [status]);

  var eventssettings = {
    dots: true,
  };
  return (
    <>
      <div className={styles.dashboard_rsides_title}>
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z"
              stroke="#7F7F7F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M8 2V6M16 2V6M2 10H22"
              stroke="#7F7F7F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <span>Latest News / Events</span>
      </div>
      <div className="dashboard_rt_slider">
        <Slider {...eventssettings}>
          {eventData &&
            eventData.map((item, ind) => (
              <div
                className={styles.dashboard_slider_item}
                key={ind}
                dangerouslySetInnerHTML={{ __html: item.dataFieldText }}
              >
              </div>
            ))}
        </Slider>
        
      </div>
    </>
  );
}
