import React from 'react'
import Slider from "react-slick";
import styles from '../../styles/dashboard.module.css'

export default function CommunityPoll() {
var communitysettings = {
    dots: true
};
  return (
    <>
    <div className={styles.dashboard_rsides_title}>
        <span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 4H6C3.79086 4 2 5.79086 2 8V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V8C22 5.79086 20.2091 4 18 4Z" stroke="#7F7F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 2V6M16 2V6M2 10H22" stroke="#7F7F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </span>
        <span>Community Poll</span>
    </div>
    <div className="dashboard_rt_slider">
        <Slider {...communitysettings}>
        <div className={styles.dashboard_slider_item}>
        <div className={styles.inputs_slide}>
            <ul>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Security" />
                <span></span>
                </label>
                <span>Security</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Easy to use<" />
                <span></span>
                </label>
                <span>Easy to use</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Referral Sharing" />
                <span></span>
                </label>
                <span>Referral Sharing</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Investment" />
                <span></span>
                </label>
                <span>Investment</span>
            </li>
            </ul>
        </div>
        </div>
        <div className={styles.dashboard_slider_item}>
        <div className={styles.inputs_slide}>
            <ul>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Security" />
                <span></span>
                </label>
                <span>Security</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Easy to use<" />
                <span></span>
                </label>
                <span>Easy to use</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Referral Sharing" />
                <span></span>
                </label>
                <span>Referral Sharing</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Investment" />
                <span></span>
                </label>
                <span>Investment</span>
            </li>
            </ul>
        </div>
        </div>
        <div className={styles.dashboard_slider_item}>
        <div className={styles.inputs_slide}>
            <ul>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Security" />
                <span></span>
                </label>
                <span>Security</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Easy to use<" />
                <span></span>
                </label>
                <span>Easy to use</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Referral Sharing" />
                <span></span>
                </label>
                <span>Referral Sharing</span>
            </li>
            <li>
                <label className={styles.checkboxstyle}>
                <input type="checkbox" name="Investment" />
                <span></span>
                </label>
                <span>Investment</span>
            </li>
            </ul>
        </div>
        </div>
        </Slider>
    </div>
    </>
  )
}
