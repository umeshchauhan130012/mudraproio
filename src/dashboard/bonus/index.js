import React from 'react';
import styles from '../../styles/dashboard.module.css';

export const InfinityBonus = () => {
  return (
    <>
    <ul className={styles.pagetabber}>
        <li className={styles.active} >Infinity Bonus</li>
    </ul>
    <div className={` ${styles.dashboard_content} pt10 nosidebarinner`}>
        <div className={styles.padding10} >
            <div className={` ${styles.bordercolor} ${styles.padding15} `}>
                <div className={styles.customdatatablewrap}>
                    <div className={` ${styles.customdatatable} ${styles.customdatatable4col} `}>
                        <table>
                            <tr>
                            <th>Rank</th>
                            <th>Target</th>
                            <th>Valid</th>
                            <th>Percentage (%)</th>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/diamond.png" height={35} width={35} alt="Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Diamond</h5>
                                            <label>25,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>15,00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>7 </span>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/startDiamond.png" height={35} width={35} alt="Start Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Start Diamond</h5>
                                            <label>50,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>35,00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>8 </span>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/superStarDiamond.png" height={35} width={35} alt="Superstar Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Superstar Diamond</h5>
                                            <label>1,00,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>75,00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>9 </span>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/powerDiamond.png" height={35} width={35} alt="Power Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Power Diamond</h5>
                                            <label>3,00,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>2,00,00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>10 </span>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/crownDiamond.png" height={35} width={35} alt="Crown Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Crown Diamond</h5>
                                            <label>7,50,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>5,00,00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>11 </span>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/backDiamond.png" height={35} width={35} alt="Black Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Black Diamond</h5>
                                            <label>15,00,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>15,00,00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>12 </span>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/doubleBlackDiamond.png" height={35} width={35} alt="Double Black Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Double Black Diamond</h5>
                                            <label>30,00,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>35,00,00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>13 </span>%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={styles.titlewidthtablouter}>
                                        <img src="/images/tripleBlackDiamond.png" height={35} width={35} alt="Triple Black Diamond" />
                                        <div className={styles.titlewidthtabl}>
                                            <h5>Triple Black Diamond</h5>
                                            <label>1,00,00,000<span> USD Reward</span></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.titlewidthtabl}>
                                        <label>100,00, 00,000<span> USD</span></label>
                                    </div>
                                </td>
                                <td><span className={styles.infinatebonus}>Infinity Bonus</span></td>
                                <td>
                                    <span className='good'>15 </span>%
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.padding10} >
        <div className={` ${styles.bordercolor} ${styles.differbgcolor} ${styles.padding15} `}>
         <div className={styles.simplecontent}>
          <h5>Infinity Bonus</h5>
          <p><strong>Infinity Bonus</strong><b> will be given on total business volume on monthly basis.</b></p>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}
