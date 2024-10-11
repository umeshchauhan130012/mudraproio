import React from 'react';
import styles from '../../styles/dashboard.module.css';

export const Level = () => {
  return (
    <>
    <ul className={styles.pagetabber}>
        <li className={styles.active} >Level Bonus</li>
    </ul>
    <div className={` ${styles.dashboard_content} pt10 nosidebarinner`}>
      <div className={styles.padding10} >
        <div className={` ${styles.bordercolor} ${styles.padding15} `}>
          <div className={styles.customdatatablewrap}>
            <div className={styles.customdatatabletitle}>Distribution of Percentage</div>
            <div className={` ${styles.customdatatable} ${styles.customdatatable3col} `}>
              <table>
                <tr>
                  <th>Bonus</th>
                  <th>Level</th>
                  <th>Percentage</th>
                </tr>
                <tr>
                  <td>1 Direct Required</td>
                  <td>1</td>
                  <td><span className='good'>15%</span></td>
                </tr>
                <tr>
                  <td>1 Direct Required</td>
                  <td>2</td>
                  <td><span className='good'>10%</span></td>
                </tr>
                <tr>
                  <td>1 Direct Required</td>
                  <td>3</td>
                  <td><span className='good'>7%</span></td>
                </tr>
                <tr>
                  <td>1 Direct Required</td>
                  <td>4</td>
                  <td><span className='good'>5%</span></td>
                </tr>
                <tr>
                  <td>1 Direct Required</td>
                  <td>5 - 10</td>
                  <td><span className='good'>3%</span></td>
                </tr>
                <tr>
                  <td>1 Direct Required</td>
                  <td>11 - 20</td>
                  <td><span className='good'>2%</span></td>
                </tr>
                <tr>
                  <td>1 Direct Required</td>
                  <td>21 - 30</td>
                  <td><span className='good'>1%</span></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.padding10} >
        <div className={` ${styles.bordercolor} ${styles.differbgcolor} ${styles.padding15} `}>
         <div className={styles.simplecontent}>
          <h5>Dynamic Compression</h5>
          <p><strong>Dynamic compression</strong><b> assigns bonuses only to our active partners, without taking the inactive partners into consideration.</b></p>
         </div>
        </div>
      </div>
      <div className={styles.padding10} >
        <div className={` ${styles.bordercolor} ${styles.differbgcolor} ${styles.padding15} `}>
         <div className={styles.simplecontent}>
          <h5>Direct Bonus</h5>
          <p><b>DIRECT BONUS is a 5% commission on purchases your first-line* partners have conducted.</b></p>
          <p>*The first-line partner is a person who registered via your direct referral link. To receive the Direct Bonus it is a requirement to have an own "active partner" status.</p>
          <p>As soon as first-line partners start to recommend MUDRA products and people register via their referral links, these new applicants become you second-line partners, third-line partners and forth on. Your team will grow and commission from other levels can be gained. At the same time rank bonus achievements will accumulate.</p>
         </div>
        </div>
      </div>
      <div className={styles.padding10} >
        <div className={` ${styles.bordercolor} ${styles.differbgcolor} ${styles.padding15} `}>
         <div className={styles.simplecontent}>
          <h5>Team Bonus</h5>
          <p><b>The Team Bonus is a classic referral bonus limited to 30 compressed levels. However the single levels amount of partners are unlimited and the dynamic compression is effective for all 30 compressed levels. Thanks to the compression all 30 levels can be allocated throughout your entire structure.</b></p>
          <p><b>What is the difference between active and inactive partners?</b></p>
          <p><b>To receive commission and bonuses, you need to maintain your active partner status.</b></p>
          <p><strong>There are several ways to upgrade your account:</strong></p>
          <p><b>By Mudra  | BNB  |  USD  |  Pay for product in CASH or Fiat;</b></p>
          <p><b>If your first-line partner makes a first payment using Cash or Fiat. Please note that only the first payment is taken into consideration.</b></p>
          <p><b>Each of these actions extends your ‘active’ status for 15 days from the moment of payment. At least one condition should be fulfilled to maintain active partner status.</b></p>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}
