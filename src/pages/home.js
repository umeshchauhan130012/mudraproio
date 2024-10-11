import React from "react";
// import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import ScrollToTop from "../components/scrollToTop";
import styles from "../styles/home.module.css";

export default function Home() {
  // const { t } = useTranslation(["home"]);

  const partnerLogo = [
    {
      title: "CoinMarketCap",
      image: "/images/coinmarketcap.png",
      link: "https://coinmarketcap.com/currencies/mudra-mdr/",
    },
    {
      title: "BscScan",
      image: "/images/bscscan.png",
      link: "https://bscscan.com/token/0x4505e2ae4f9c512fd2e7e4d99c99dc94e0e93ccb",
    },
    {
      title: "CoinPaprika",
      image: "/images/coinparika.png",
      link: "https://coinpaprika.com/coin/mdr-mudra/",
    },
    {
      title: "Play Earn",
      image: "/images/playearn.png",
      link: "https://playtoearn.net/crypto-token/mudra-mdr",
    },
    {
      title: "Mudra",
      image: "/images/mudra.png",
      link: "https://www.mudrapro.io/BLUE_PAPER.pdf",
    },
    {
      title: "Gecko",
      image: "/images/coingeck.png",
      link: "https://www.coingecko.com/en/coins/mudra-mdr",
    },
    {
      title: "Consbit",
      image: "/images/consbit.png",
      link: "https://coinsbit.io/trade/MDR_USDT",
    },
    {
      title: "Nomics",
      image: "/images/nomics.png",
      link: "https://nomics.com/assets/mdr2-mudra",
    },
    {
      title: "Azbit",
      image: "/images/azbit.png",
      link: "https://azbit.com/exchange/MDR_USDT",
    },
    {
      title: "bullionsx",
      image: "/images/bullionsx-logo.png",
      link: "https://bullionsx.com/",
    },
    {
      title: "Bullionsx",
      image: "/images/bullionsx.png",
      link: "https://bullionscan.io/",
    },
  ];

  return (
    <div className="homeWrapper">
      <div className={styles.banner_wrapper}>
        <div className="container">
          <div className={styles.banner_content}>
            <div className={styles.bannerinner}>
              <div className={styles.lighter_title}>BUILD YOUR FUTURE WITH</div>
              <h1>MUDRA</h1>
              <h4>Start building the future today.</h4>
              <p>
                MUDRA community is a global community of people who love
                innovative blockchain technologies. United by our passion for
                disruptive technologies, we’re confident we can implement future
                innovations today.
              </p>
              <div className={styles.bannerBtn}>
                <Link to="/sign-up" className="secondry_dark_btn">
                  Must Try
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Element className={styles.sectionwrapper} id="aboutscroll">
        <div className="container">
          <div className={styles.home_about}>
            <div className={styles.about_content}>
              <h5>ABOUT</h5>
              <h2>
                <span>Achieve success with</span> MUDRA Community
              </h2>
              <p>
                Our partners build international teams, travel around the world,
                study new technologies, and acquire unique experience in
                developing their own business.
              </p>
              <p>
                High awards for achievements, regular meetings in different
                cities around the world, a constant flow of new knowledge and
                rapid growth — our partners gain all this and more when they
                work with us!
              </p>
              <p>
                Your age, experience, level of education and wealth don’t matter
                — we give everyone a chance to build a better future!
              </p>
            </div>
            <div className={styles.about_images}>
              <div className={styles.about_images_wrp}>
                <div className={styles.about_images_item}>
                  <img
                    src="/images/aboutret1.png"
                    height={391}
                    width={270}
                    alt=""
                  />
                </div>
                <div
                  className={`${styles.about_images_item} ${styles.about_images_item2}`}
                >
                  <div className={styles.about_images_item}>
                    <img
                      src="/images/aboutret2.png"
                      height={304}
                      width={367}
                      alt=""
                    />
                  </div>
                  <span className={styles.popup_vid}>
                    <span className="popup_vid_icon">
                      <img
                        src="/images/player.png"
                        alt="player"
                        height={77}
                        width={77}
                      />
                    </span>
                  </span>
                  <div className={styles.about_images_item}>
                    <img
                      src="/images/aboutret3.png"
                      height={208}
                      width={270}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      {/* <div>{t('home')} --- Page</div>   */}

      <Element className={styles.sectionwrapper} id="growthstrategy">
        <div className="container">
          <div className={styles.titlecontain}>
            <div className={styles.pretitle}>OUR ECOSYSTEM</div>
            <div className={styles.maintitle}>Growth strategy</div>
            <div className={styles.titledescription}>Mudra aims to grow globally with its partners and business associates with agressive marketing strategies and innovative technologies.</div>
          </div>
          <div className={styles.ourecosystem_wrap}>
            <div className={styles.ecosystem_item}>
              <div className={styles.ecosystem_item_inner}>
                <div className={styles.eco_icon_wrap}>
                  <span className={styles.eco_icon}>
                    <img
                      src="/images/eco1.png"
                      alt="eco system"
                      height={77}
                      width={77}
                    />
                  </span>
                </div>
                <h3>
                  A community for enthusiasts of disruptive blockchain
                  technology
                </h3>
                <p>
                  Our technical team is actively analyzing the crypto market and
                  developing their own unique solutions which have helped people
                  all around the world to transform their lives!
                </p>
              </div>
            </div>
            <div className={styles.ecosystem_item}>
              <div className={styles.ecosystem_item_inner}>
                <div className={styles.eco_icon_wrap}>
                  <span className={styles.eco_icon}>
                    <img
                      src="/images/eco2.png"
                      alt="eco system"
                      height={77}
                      width={77}
                    />
                  </span>
                </div>
                <h3>
                  A community of like-minded people who dream of growth and
                  development
                </h3>
                <p>
                  10000 people have already joined us, and our ultimate goal is
                  to grow our community to 100 000 members by the end of 2022!
                  That’s why we’re constantly improving our technologies and the
                  partnership conditions for our users.
                </p>
              </div>
            </div>
            <div className={styles.ecosystem_item}>
              <div className={styles.ecosystem_item_inner}>
                <div className={styles.eco_icon_wrap}>
                  <span className={styles.eco_icon}>
                    <img
                      src="/images/eco3.png"
                      alt="eco system"
                      height={77}
                      width={77}
                    />
                  </span>
                </div>
                <h3>
                  Unprecedented opportunities for income and personal growth
                </h3>
                <p>
                  We make complex crypto technologies accessible for mass use,
                  enabling hundreds of thousands of our users to rapidly
                  increase their income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element className="bottomtop50" id="howtostart">
        <div className={`${styles.sectionwrapper} ${styles.themebgcolor}`}>
          <div className="container">
            <div className={styles.titlecontain}>
              <div className={styles.pretitle}>
                HOW CAN YOU START EARNING WITH US?
              </div>
              <div className={styles.maintitle}>
                We invite you to join our global community!
              </div>
              <div className={styles.titledescription}>
                Grow, change, and achieve new heights together with Mudra World!
              </div>
            </div>
            <div className={styles.global_community}>
              <ul className={styles.global_community_itm}>
                <li>
                  <div className={styles.community_itm_in}>
                    <span className={styles.count_style}>1</span>
                    <p>Register with Mudra</p>
                  </div>
                </li>
                <li>
                  <div className={styles.community_itm_in}>
                    <span className={styles.count_style}>2</span>
                    <p>
                      Review the tools and instructions in your personal cabinet
                    </p>
                  </div>
                </li>
                <li>
                  <div className={styles.community_itm_in}>
                    <span className={styles.count_style}>3</span>
                    <p>Start building your team</p>
                  </div>
                </li>
                <li>
                  <div className={styles.community_itm_in}>
                    <span className={styles.count_style}>4</span>
                    <p>Earn money with technologies!</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Element>

      <Element className={styles.sectionwrapper} id="ourevents">
        <div className="container">
          <div className={styles.titlecontain}>
            <div className={styles.pretitle}>JOIN US</div>
            <div className={styles.maintitle}>Our Events</div>
            <div className={styles.titledescription}>
              We are conducting Events and Leader Meetings
            </div>
          </div>
        </div>
        <div className={styles.container_custom}>
          <div className={styles.our_event}>
            <div className={styles.event_item}>
              <div className={styles.event_item_inner}>
                <div className={styles.event_images}>
                  <img
                    src="/images/event.png"
                    alt="event"
                    height={427}
                    width={427}
                  />
                </div>
                <div className={styles.event_details}>
                  <h5>Upcoming</h5>
                  <label>2022</label>
                </div>
              </div>
            </div>
            <div className={styles.event_item}>
              <div className={styles.event_item_inner}>
                <div className={styles.event_images}>
                  <img
                    src="/images/event2.png"
                    alt="event"
                    height={427}
                    width={427}
                  />
                </div>
                <div className={styles.event_details}>
                  <h5>Punjab</h5>
                  <label>2022</label>
                </div>
              </div>
            </div>
            <div className={styles.event_item}>
              <div className={styles.event_item_inner}>
                <div className={styles.event_images}>
                  <img
                    src="/images/event3.png"
                    alt="event"
                    height={427}
                    width={427}
                  />
                </div>
                <div className={styles.event_details}>
                  <h5>Mumbai</h5>
                  <label>2021</label>
                </div>
              </div>
            </div>
            <div className={styles.event_item}>
              <div className={styles.event_item_inner}>
                <div className={styles.event_images}>
                  <img
                    src="/images/event4.png"
                    alt="event"
                    height={427}
                    width={427}
                  />
                </div>
                <div className={styles.event_details}>
                  <h5>Ramada, New Delhi</h5>
                  <label>2019</label>
                </div>
              </div>
            </div>
            <div className={styles.event_item}>
              <div className={styles.event_item_inner}>
                <div className={styles.event_images}>
                  <img
                    src="/images/event5.png"
                    alt="event"
                    height={427}
                    width={427}
                  />
                </div>
                <div className={styles.event_details}>
                  <h5>Gurgaon</h5>
                  <label>2019</label>
                </div>
              </div>
            </div>
            <div className={styles.event_item}>
              <div className={styles.event_item_inner}>
                <div className={styles.event_images}>
                  <img
                    src="/images/event6.png"
                    alt="event"
                    height={427}
                    width={427}
                  />
                </div>
                <div className={styles.event_details}>
                  <h5>Srinagar</h5>
                  <label>2018</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element className={styles.sectionwrapper} id="tokenallocation">
        <div className="container">
          <div className={styles.titlecontain}>
            <div className={styles.pretitle}>OUR INFRASTRUCTURE</div>
            <div className={styles.maintitle}>Token Allocation</div>
            <div className={styles.titledescription}>
              We have secured infrastructure.
            </div>
          </div>
          <div className={styles.token_allocation}>
            <ul>
              <li>
                <h3>1</h3>
                <h4>Billion</h4>
                <p>TOTAL MDR</p>
              </li>
              <li>
                <h3>100%</h3>
                <h4>Community</h4>
                <p>100 MILLION</p>
              </li>
              <li>
                <h3>6%</h3>
                <h4>Burning</h4>
                <p>60 MILLION</p>
              </li>
              <li>
                <h3>5%</h3>
                <h4>Sale</h4>
                <p>50 MILLION</p>
              </li>
              <li>
                <h3>4%</h3>
                <h4>Team</h4>
                <p>40 MILLION</p>
              </li>
              <li>
                <h3>20%</h3>
                <h4>Reserve</h4>
                <p>200 MILLION</p>
              </li>
              <li>
                <h3>70%</h3>
                <h4>Lock</h4>
                <p>700 MILLION</p>
              </li>
              <li>
                <h3>5%</h3>
                <h4>Bounty</h4>
                <p>50 MILLION</p>
              </li>
            </ul>
          </div>
          <div className={styles.bsc_scam}>
            <div className={styles.bsc_scambtn}>
              <a
                href="https://bscscan.com/token/0x4505e2ae4f9c512fd2e7e4d99c99dc94e0e93ccb"
                target="_blank"
                className="secondry_dark_btn"
              >
                BSC SCAN
              </a>
            </div>
            <div className={styles.token_locked}>
              <div className={styles.milionview}>
                <label>70%</label>
                <p>700 MILLION</p>
              </div>
              <div className={styles.milionview_details}>
                <p>
                  70% MDR would be locked till 2031 & would we released from Feb.
                  2026 in a phased manner.
                </p>
                <p>
                  Locking done in a smart contract until 02 Feb 2024, 12 O’Clock
                  which will be autorenewed till 02 Feb 2026, 12 O’Clock
                </p>
                <a
                  href="https://bscscan.com/tx/0x79303805a2b4db67fc21dad0b5d69b9b97e24e2a2c2acc2445ad51b3baff18ed"
                  target="_blank"
                  className={styles.linkbtn}
                >
                  Token locked link
                </a>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element className={styles.sectionwrapper} id="whychooseus">
        <div className="container">
          <div className={styles.titlecontain}>
            <div className={styles.pretitle}>OUR FEATURES</div>
            <div className={styles.maintitle}>Why choose MUDRA</div>
            <div className={styles.titledescription}>
              Mudra combines the best of Binance and sovereign blockchains into
              an attractive feature set.
            </div>
          </div>
          <div className={styles.why_choose_wrapper}>
            <div className={styles.choose_item}>
              <div className={styles.choose_icon}>
                <img src="/images/exchange.svg" alt="" height={77} width={77} />
              </div>
              <h4>Exchange</h4>
              <p>
              Token swaps on MUDRA are a simple way to trade one BEP-20 token for another via automated liquidity pools.
              </p>
            </div>
            <div className={styles.choose_item}>
              <div className={styles.choose_icon}>
                <img
                  src="/images/mudragame.svg"
                  alt=""
                  height={77}
                  width={77}
                />
              </div>
              <h4>MUDRA Games</h4>
              <p>
              The introduction of the MUDRA Games allows users to hatch and earn more MUDRA every few days.
              </p>
            </div>
            <div className={styles.choose_item}>
              <div className={styles.choose_icon}>
                <img src="/images/buysell.svg" alt="" height={77} width={77} />
              </div>
              <h4>Buy & Sell</h4>
              <p>
              Buy MDR with any of the cryptocurrencies to get MUDRA Token (MDR). Sell MUDRA Token (MDR) to get any cryptocurrency.
              </p>
            </div>
            <div className={styles.choose_item}>
              <div className={styles.choose_icon}>
                <img
                  src="/images/transparent.svg"
                  alt=""
                  height={77}
                  width={77}
                />
              </div>
              <h4>Transparent</h4>
              <p>
              Smart contracts may provide parties with a degree of trust. They automatically perform transactions following predetermined laws with utmost transparency.
              </p>
            </div>
            <div className={styles.choose_item}>
              <div className={styles.choose_icon}>
                <img
                  src="/images/nftplatform.svg"
                  alt=""
                  height={77}
                  width={77}
                />
              </div>
              <h4>NFT Platform</h4>
              <p>
              Nonfungible Token's (NFTs) is a phenomenon that has gained attention in the crypto sphere over the past few years with increasing acceptance and use cases.
              </p>
            </div>
            <div className={styles.choose_item}>
              <div className={styles.choose_icon}>
                <img src="/images/swapping.svg" alt="" height={77} width={77} />
              </div>
              <h4>Cross-Chain Swapping</h4>
              <p>
                Token swaps on MUDRA are a simple way to trade one BEP-20 token
                for another via automated liquidity pools. MUDRA was envisioned as an independent but complementary system to the existing Binance Smart Chain network.
              </p>
            </div>
            <div className={styles.choose_item}>
              <div className={styles.choose_icon}>
                <img src="/images/stacking.svg" alt="" height={77} width={77} />
              </div>
              <h4>Stacking</h4>
              <p>
              Staking unlike it's staking counterparts which works with purchasing and then staking proof of stake tokens to earn a return denominated in the same assets.
              </p>
            </div>
          </div>
        </div>
      </Element>

      {/* <Element className={styles.sectionwrapper} id="ourteam">
        <div className="container">
          <div className={styles.titlecontain}>
            <div className={styles.pretitle}>JOIN US</div>
            <div className={styles.maintitle}>Our Leadership Team</div>
            <div className={styles.titledescription}>
              Mudra combines the best of Binance and sovereign blockchains into
              an attractive feature set.
            </div>
          </div>
          <div className={styles.teamsection}>
            <div className={styles.teamitem}>
              <div className={styles.teamdetails}>
                <h4>Mr. Picasso Williams</h4>
                <p>
                  NonFungible Token (NFT) is a phenomenon that has gained
                  attention in the cry to sphere
                </p>
                <ul className={styles.team_social_link}>
                  <li>
                    <Link to="" target="_blank">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.50094 9.00046H3.50094C3.36833 9.00046 3.24115 9.05314 3.14739 9.14691C3.05362 9.24068 3.00094 9.36785 3.00094 9.50046V21.5005C3.00094 21.6331 3.05362 21.7602 3.14739 21.854C3.24115 21.9478 3.36833 22.0005 3.50094 22.0005H7.50094C7.63355 22.0005 7.76072 21.9478 7.85449 21.854C7.94826 21.7602 8.00094 21.6331 8.00094 21.5005V9.50046C8.00094 9.36785 7.94826 9.24068 7.85449 9.14691C7.76072 9.05314 7.63355 9.00046 7.50094 9.00046ZM7.00094 21.0005H4.00094V10.0005H7.00094V21.0005ZM18.0009 9.00046C16.9159 9.00046 15.8609 9.35846 15.0009 10.0195V9.50046C15.0009 9.36785 14.9483 9.24068 14.8545 9.14691C14.7607 9.05314 14.6335 9.00046 14.5009 9.00046H10.5009C10.3683 9.00046 10.2412 9.05314 10.1474 9.14691C10.0536 9.24068 10.0009 9.36785 10.0009 9.50046V21.5005C10.0009 21.6331 10.0536 21.7602 10.1474 21.854C10.2412 21.9478 10.3683 22.0005 10.5009 22.0005H14.5009C14.6335 22.0005 14.7607 21.9478 14.8545 21.854C14.9483 21.7602 15.0009 21.6331 15.0009 21.5005V16.0005C15.0009 15.6026 15.159 15.2211 15.4403 14.9398C15.7216 14.6585 16.1031 14.5005 16.5009 14.5005C16.8988 14.5005 17.2803 14.6585 17.5616 14.9398C17.8429 15.2211 18.0009 15.6026 18.0009 16.0005V21.5005C18.0009 21.6331 18.0536 21.7602 18.1474 21.854C18.2412 21.9478 18.3683 22.0005 18.5009 22.0005H22.5009C22.6335 22.0005 22.7607 21.9478 22.8545 21.854C22.9483 21.7602 23.0009 21.6331 23.0009 21.5005V14.0005C22.9994 12.6749 22.4721 11.404 21.5347 10.4667C20.5974 9.52934 19.3265 9.00205 18.0009 9.00046ZM22.0009 21.0005H19.0009V16.0005C19.0009 15.3374 18.7375 14.7015 18.2687 14.2327C17.7999 13.7639 17.164 13.5005 16.5009 13.5005C15.8379 13.5005 15.202 13.7639 14.7332 14.2327C14.2643 14.7015 14.0009 15.3374 14.0009 16.0005V21.0005H11.0009V10.0005H14.0009V11.2035C14.0009 11.307 14.033 11.408 14.0929 11.4925C14.1527 11.5771 14.2374 11.6409 14.3351 11.6753C14.4327 11.7096 14.5387 11.7128 14.6383 11.6843C14.7378 11.6559 14.8261 11.5972 14.8909 11.5165C15.4045 10.8655 16.1083 10.3911 16.9044 10.1593C17.7004 9.92747 18.5489 9.94985 19.3316 10.2233C20.1144 10.4968 20.7922 11.0076 21.2707 11.6847C21.7492 12.3618 22.0045 13.1714 22.0009 14.0005V21.0005ZM5.86894 2.00246C5.75144 1.99418 5.63353 1.99351 5.51594 2.00046C5.14171 1.975 4.76623 2.02664 4.41277 2.1522C4.05931 2.27776 3.7354 2.47455 3.46109 2.73039C3.18678 2.98623 2.96793 3.29566 2.81808 3.63953C2.66823 3.98339 2.59058 4.35436 2.58994 4.72946C2.58683 5.10064 2.66001 5.4685 2.80494 5.81023C2.94987 6.15196 3.16345 6.46027 3.43245 6.71605C3.70145 6.97182 4.02013 7.16961 4.36872 7.29715C4.71731 7.42469 5.08839 7.47925 5.45894 7.45746H5.48694C5.84512 7.48254 6.20473 7.43683 6.54525 7.32294C6.88576 7.20904 7.20051 7.02919 7.47151 6.79365C7.74252 6.55812 7.96448 6.27151 8.12473 5.95019C8.28497 5.62887 8.38036 5.27914 8.40544 4.92096C8.43052 4.56278 8.38481 4.20317 8.27091 3.86265C8.15702 3.52214 7.97717 3.20739 7.74163 2.93639C7.50609 2.66538 7.21949 2.44342 6.89817 2.28317C6.57685 2.12293 6.22712 2.02754 5.86894 2.00246ZM5.83394 6.46046C5.71846 6.47096 5.60222 6.46995 5.48694 6.45746H5.45894C5.21827 6.47555 4.97647 6.44326 4.74898 6.36265C4.52149 6.28204 4.3133 6.15488 4.13772 5.98929C3.96214 5.82369 3.82301 5.62331 3.72923 5.40092C3.63545 5.17854 3.58906 4.93904 3.59304 4.69773C3.59702 4.45641 3.65127 4.21857 3.75234 3.9994C3.8534 3.78023 3.99906 3.58454 4.18001 3.42483C4.36095 3.26511 4.57321 3.14488 4.80324 3.07181C5.03326 2.99875 5.27599 2.97444 5.51594 3.00046C5.97476 2.95829 6.43155 3.10012 6.7858 3.39474C7.14006 3.68936 7.36277 4.11264 7.40494 4.57146C7.44711 5.03029 7.30528 5.48707 7.01066 5.84133C6.71604 6.19558 6.29276 6.41829 5.83394 6.46046Z"
                          fill="#0164EB"
                          fillOpacity="0.54"
                          stroke="#0164EB"
                          strokeOpacity="0.54"
                          strokeWidth="0.3"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.team_images}>
                <img
                  src="/images/picasoo.png"
                  alt=""
                  height={172}
                  width={172}
                />
              </div>
            </div>
            <div className={`${styles.teamitem} ${styles.reverse_item}`}>
              <div className={styles.teamdetails}>
                <h4>Mr. Faizal Wahab</h4>
                <p>
                  NonFungible Token (NFT) is a phenomenon that has gained
                  attention in the cry to sphere
                </p>
                <ul className={styles.team_social_link}>
                  <li>
                    <Link to="" target="_blank">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.50094 9.00046H3.50094C3.36833 9.00046 3.24115 9.05314 3.14739 9.14691C3.05362 9.24068 3.00094 9.36785 3.00094 9.50046V21.5005C3.00094 21.6331 3.05362 21.7602 3.14739 21.854C3.24115 21.9478 3.36833 22.0005 3.50094 22.0005H7.50094C7.63355 22.0005 7.76072 21.9478 7.85449 21.854C7.94826 21.7602 8.00094 21.6331 8.00094 21.5005V9.50046C8.00094 9.36785 7.94826 9.24068 7.85449 9.14691C7.76072 9.05314 7.63355 9.00046 7.50094 9.00046ZM7.00094 21.0005H4.00094V10.0005H7.00094V21.0005ZM18.0009 9.00046C16.9159 9.00046 15.8609 9.35846 15.0009 10.0195V9.50046C15.0009 9.36785 14.9483 9.24068 14.8545 9.14691C14.7607 9.05314 14.6335 9.00046 14.5009 9.00046H10.5009C10.3683 9.00046 10.2412 9.05314 10.1474 9.14691C10.0536 9.24068 10.0009 9.36785 10.0009 9.50046V21.5005C10.0009 21.6331 10.0536 21.7602 10.1474 21.854C10.2412 21.9478 10.3683 22.0005 10.5009 22.0005H14.5009C14.6335 22.0005 14.7607 21.9478 14.8545 21.854C14.9483 21.7602 15.0009 21.6331 15.0009 21.5005V16.0005C15.0009 15.6026 15.159 15.2211 15.4403 14.9398C15.7216 14.6585 16.1031 14.5005 16.5009 14.5005C16.8988 14.5005 17.2803 14.6585 17.5616 14.9398C17.8429 15.2211 18.0009 15.6026 18.0009 16.0005V21.5005C18.0009 21.6331 18.0536 21.7602 18.1474 21.854C18.2412 21.9478 18.3683 22.0005 18.5009 22.0005H22.5009C22.6335 22.0005 22.7607 21.9478 22.8545 21.854C22.9483 21.7602 23.0009 21.6331 23.0009 21.5005V14.0005C22.9994 12.6749 22.4721 11.404 21.5347 10.4667C20.5974 9.52934 19.3265 9.00205 18.0009 9.00046ZM22.0009 21.0005H19.0009V16.0005C19.0009 15.3374 18.7375 14.7015 18.2687 14.2327C17.7999 13.7639 17.164 13.5005 16.5009 13.5005C15.8379 13.5005 15.202 13.7639 14.7332 14.2327C14.2643 14.7015 14.0009 15.3374 14.0009 16.0005V21.0005H11.0009V10.0005H14.0009V11.2035C14.0009 11.307 14.033 11.408 14.0929 11.4925C14.1527 11.5771 14.2374 11.6409 14.3351 11.6753C14.4327 11.7096 14.5387 11.7128 14.6383 11.6843C14.7378 11.6559 14.8261 11.5972 14.8909 11.5165C15.4045 10.8655 16.1083 10.3911 16.9044 10.1593C17.7004 9.92747 18.5489 9.94985 19.3316 10.2233C20.1144 10.4968 20.7922 11.0076 21.2707 11.6847C21.7492 12.3618 22.0045 13.1714 22.0009 14.0005V21.0005ZM5.86894 2.00246C5.75144 1.99418 5.63353 1.99351 5.51594 2.00046C5.14171 1.975 4.76623 2.02664 4.41277 2.1522C4.05931 2.27776 3.7354 2.47455 3.46109 2.73039C3.18678 2.98623 2.96793 3.29566 2.81808 3.63953C2.66823 3.98339 2.59058 4.35436 2.58994 4.72946C2.58683 5.10064 2.66001 5.4685 2.80494 5.81023C2.94987 6.15196 3.16345 6.46027 3.43245 6.71605C3.70145 6.97182 4.02013 7.16961 4.36872 7.29715C4.71731 7.42469 5.08839 7.47925 5.45894 7.45746H5.48694C5.84512 7.48254 6.20473 7.43683 6.54525 7.32294C6.88576 7.20904 7.20051 7.02919 7.47151 6.79365C7.74252 6.55812 7.96448 6.27151 8.12473 5.95019C8.28497 5.62887 8.38036 5.27914 8.40544 4.92096C8.43052 4.56278 8.38481 4.20317 8.27091 3.86265C8.15702 3.52214 7.97717 3.20739 7.74163 2.93639C7.50609 2.66538 7.21949 2.44342 6.89817 2.28317C6.57685 2.12293 6.22712 2.02754 5.86894 2.00246ZM5.83394 6.46046C5.71846 6.47096 5.60222 6.46995 5.48694 6.45746H5.45894C5.21827 6.47555 4.97647 6.44326 4.74898 6.36265C4.52149 6.28204 4.3133 6.15488 4.13772 5.98929C3.96214 5.82369 3.82301 5.62331 3.72923 5.40092C3.63545 5.17854 3.58906 4.93904 3.59304 4.69773C3.59702 4.45641 3.65127 4.21857 3.75234 3.9994C3.8534 3.78023 3.99906 3.58454 4.18001 3.42483C4.36095 3.26511 4.57321 3.14488 4.80324 3.07181C5.03326 2.99875 5.27599 2.97444 5.51594 3.00046C5.97476 2.95829 6.43155 3.10012 6.7858 3.39474C7.14006 3.68936 7.36277 4.11264 7.40494 4.57146C7.44711 5.03029 7.30528 5.48707 7.01066 5.84133C6.71604 6.19558 6.29276 6.41829 5.83394 6.46046Z"
                          fill="#0164EB"
                          fillOpacity="0.54"
                          stroke="#0164EB"
                          strokeOpacity="0.54"
                          strokeWidth="0.3"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.team_images}>
                <img src="/images/faizal.png" alt="" height={172} width={172} />
              </div>
            </div>
            <div className={styles.teamitem}>
              <div className={styles.teamdetails}>
                <h4>Mr. Zubin Amin</h4>
                <p>
                  NonFungible Token (NFT) is a phenomenon that has gained
                  attention in the cry to sphere
                </p>
                <ul className={styles.team_social_link}>
                  <li>
                    <Link to="" target="_blank">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.50094 9.00046H3.50094C3.36833 9.00046 3.24115 9.05314 3.14739 9.14691C3.05362 9.24068 3.00094 9.36785 3.00094 9.50046V21.5005C3.00094 21.6331 3.05362 21.7602 3.14739 21.854C3.24115 21.9478 3.36833 22.0005 3.50094 22.0005H7.50094C7.63355 22.0005 7.76072 21.9478 7.85449 21.854C7.94826 21.7602 8.00094 21.6331 8.00094 21.5005V9.50046C8.00094 9.36785 7.94826 9.24068 7.85449 9.14691C7.76072 9.05314 7.63355 9.00046 7.50094 9.00046ZM7.00094 21.0005H4.00094V10.0005H7.00094V21.0005ZM18.0009 9.00046C16.9159 9.00046 15.8609 9.35846 15.0009 10.0195V9.50046C15.0009 9.36785 14.9483 9.24068 14.8545 9.14691C14.7607 9.05314 14.6335 9.00046 14.5009 9.00046H10.5009C10.3683 9.00046 10.2412 9.05314 10.1474 9.14691C10.0536 9.24068 10.0009 9.36785 10.0009 9.50046V21.5005C10.0009 21.6331 10.0536 21.7602 10.1474 21.854C10.2412 21.9478 10.3683 22.0005 10.5009 22.0005H14.5009C14.6335 22.0005 14.7607 21.9478 14.8545 21.854C14.9483 21.7602 15.0009 21.6331 15.0009 21.5005V16.0005C15.0009 15.6026 15.159 15.2211 15.4403 14.9398C15.7216 14.6585 16.1031 14.5005 16.5009 14.5005C16.8988 14.5005 17.2803 14.6585 17.5616 14.9398C17.8429 15.2211 18.0009 15.6026 18.0009 16.0005V21.5005C18.0009 21.6331 18.0536 21.7602 18.1474 21.854C18.2412 21.9478 18.3683 22.0005 18.5009 22.0005H22.5009C22.6335 22.0005 22.7607 21.9478 22.8545 21.854C22.9483 21.7602 23.0009 21.6331 23.0009 21.5005V14.0005C22.9994 12.6749 22.4721 11.404 21.5347 10.4667C20.5974 9.52934 19.3265 9.00205 18.0009 9.00046ZM22.0009 21.0005H19.0009V16.0005C19.0009 15.3374 18.7375 14.7015 18.2687 14.2327C17.7999 13.7639 17.164 13.5005 16.5009 13.5005C15.8379 13.5005 15.202 13.7639 14.7332 14.2327C14.2643 14.7015 14.0009 15.3374 14.0009 16.0005V21.0005H11.0009V10.0005H14.0009V11.2035C14.0009 11.307 14.033 11.408 14.0929 11.4925C14.1527 11.5771 14.2374 11.6409 14.3351 11.6753C14.4327 11.7096 14.5387 11.7128 14.6383 11.6843C14.7378 11.6559 14.8261 11.5972 14.8909 11.5165C15.4045 10.8655 16.1083 10.3911 16.9044 10.1593C17.7004 9.92747 18.5489 9.94985 19.3316 10.2233C20.1144 10.4968 20.7922 11.0076 21.2707 11.6847C21.7492 12.3618 22.0045 13.1714 22.0009 14.0005V21.0005ZM5.86894 2.00246C5.75144 1.99418 5.63353 1.99351 5.51594 2.00046C5.14171 1.975 4.76623 2.02664 4.41277 2.1522C4.05931 2.27776 3.7354 2.47455 3.46109 2.73039C3.18678 2.98623 2.96793 3.29566 2.81808 3.63953C2.66823 3.98339 2.59058 4.35436 2.58994 4.72946C2.58683 5.10064 2.66001 5.4685 2.80494 5.81023C2.94987 6.15196 3.16345 6.46027 3.43245 6.71605C3.70145 6.97182 4.02013 7.16961 4.36872 7.29715C4.71731 7.42469 5.08839 7.47925 5.45894 7.45746H5.48694C5.84512 7.48254 6.20473 7.43683 6.54525 7.32294C6.88576 7.20904 7.20051 7.02919 7.47151 6.79365C7.74252 6.55812 7.96448 6.27151 8.12473 5.95019C8.28497 5.62887 8.38036 5.27914 8.40544 4.92096C8.43052 4.56278 8.38481 4.20317 8.27091 3.86265C8.15702 3.52214 7.97717 3.20739 7.74163 2.93639C7.50609 2.66538 7.21949 2.44342 6.89817 2.28317C6.57685 2.12293 6.22712 2.02754 5.86894 2.00246ZM5.83394 6.46046C5.71846 6.47096 5.60222 6.46995 5.48694 6.45746H5.45894C5.21827 6.47555 4.97647 6.44326 4.74898 6.36265C4.52149 6.28204 4.3133 6.15488 4.13772 5.98929C3.96214 5.82369 3.82301 5.62331 3.72923 5.40092C3.63545 5.17854 3.58906 4.93904 3.59304 4.69773C3.59702 4.45641 3.65127 4.21857 3.75234 3.9994C3.8534 3.78023 3.99906 3.58454 4.18001 3.42483C4.36095 3.26511 4.57321 3.14488 4.80324 3.07181C5.03326 2.99875 5.27599 2.97444 5.51594 3.00046C5.97476 2.95829 6.43155 3.10012 6.7858 3.39474C7.14006 3.68936 7.36277 4.11264 7.40494 4.57146C7.44711 5.03029 7.30528 5.48707 7.01066 5.84133C6.71604 6.19558 6.29276 6.41829 5.83394 6.46046Z"
                          fill="#0164EB"
                          fillOpacity="0.54"
                          stroke="#0164EB"
                          strokeOpacity="0.54"
                          strokeWidth="0.3"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.team_images}>
                <img src="/images/zubin.png" alt="" height={172} width={172} />
              </div>
            </div>
            <div className={`${styles.teamitem} ${styles.reverse_item}`}>
              <div className={styles.teamdetails}>
                <h4>Mr. Dezian M</h4>
                <p>
                  NonFungible Token (NFT) is a phenomenon that has gained
                  attention in the cry to sphere
                </p>
                <ul className={styles.team_social_link}>
                  <li>
                    <Link to="" target="_blank">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.50094 9.00046H3.50094C3.36833 9.00046 3.24115 9.05314 3.14739 9.14691C3.05362 9.24068 3.00094 9.36785 3.00094 9.50046V21.5005C3.00094 21.6331 3.05362 21.7602 3.14739 21.854C3.24115 21.9478 3.36833 22.0005 3.50094 22.0005H7.50094C7.63355 22.0005 7.76072 21.9478 7.85449 21.854C7.94826 21.7602 8.00094 21.6331 8.00094 21.5005V9.50046C8.00094 9.36785 7.94826 9.24068 7.85449 9.14691C7.76072 9.05314 7.63355 9.00046 7.50094 9.00046ZM7.00094 21.0005H4.00094V10.0005H7.00094V21.0005ZM18.0009 9.00046C16.9159 9.00046 15.8609 9.35846 15.0009 10.0195V9.50046C15.0009 9.36785 14.9483 9.24068 14.8545 9.14691C14.7607 9.05314 14.6335 9.00046 14.5009 9.00046H10.5009C10.3683 9.00046 10.2412 9.05314 10.1474 9.14691C10.0536 9.24068 10.0009 9.36785 10.0009 9.50046V21.5005C10.0009 21.6331 10.0536 21.7602 10.1474 21.854C10.2412 21.9478 10.3683 22.0005 10.5009 22.0005H14.5009C14.6335 22.0005 14.7607 21.9478 14.8545 21.854C14.9483 21.7602 15.0009 21.6331 15.0009 21.5005V16.0005C15.0009 15.6026 15.159 15.2211 15.4403 14.9398C15.7216 14.6585 16.1031 14.5005 16.5009 14.5005C16.8988 14.5005 17.2803 14.6585 17.5616 14.9398C17.8429 15.2211 18.0009 15.6026 18.0009 16.0005V21.5005C18.0009 21.6331 18.0536 21.7602 18.1474 21.854C18.2412 21.9478 18.3683 22.0005 18.5009 22.0005H22.5009C22.6335 22.0005 22.7607 21.9478 22.8545 21.854C22.9483 21.7602 23.0009 21.6331 23.0009 21.5005V14.0005C22.9994 12.6749 22.4721 11.404 21.5347 10.4667C20.5974 9.52934 19.3265 9.00205 18.0009 9.00046ZM22.0009 21.0005H19.0009V16.0005C19.0009 15.3374 18.7375 14.7015 18.2687 14.2327C17.7999 13.7639 17.164 13.5005 16.5009 13.5005C15.8379 13.5005 15.202 13.7639 14.7332 14.2327C14.2643 14.7015 14.0009 15.3374 14.0009 16.0005V21.0005H11.0009V10.0005H14.0009V11.2035C14.0009 11.307 14.033 11.408 14.0929 11.4925C14.1527 11.5771 14.2374 11.6409 14.3351 11.6753C14.4327 11.7096 14.5387 11.7128 14.6383 11.6843C14.7378 11.6559 14.8261 11.5972 14.8909 11.5165C15.4045 10.8655 16.1083 10.3911 16.9044 10.1593C17.7004 9.92747 18.5489 9.94985 19.3316 10.2233C20.1144 10.4968 20.7922 11.0076 21.2707 11.6847C21.7492 12.3618 22.0045 13.1714 22.0009 14.0005V21.0005ZM5.86894 2.00246C5.75144 1.99418 5.63353 1.99351 5.51594 2.00046C5.14171 1.975 4.76623 2.02664 4.41277 2.1522C4.05931 2.27776 3.7354 2.47455 3.46109 2.73039C3.18678 2.98623 2.96793 3.29566 2.81808 3.63953C2.66823 3.98339 2.59058 4.35436 2.58994 4.72946C2.58683 5.10064 2.66001 5.4685 2.80494 5.81023C2.94987 6.15196 3.16345 6.46027 3.43245 6.71605C3.70145 6.97182 4.02013 7.16961 4.36872 7.29715C4.71731 7.42469 5.08839 7.47925 5.45894 7.45746H5.48694C5.84512 7.48254 6.20473 7.43683 6.54525 7.32294C6.88576 7.20904 7.20051 7.02919 7.47151 6.79365C7.74252 6.55812 7.96448 6.27151 8.12473 5.95019C8.28497 5.62887 8.38036 5.27914 8.40544 4.92096C8.43052 4.56278 8.38481 4.20317 8.27091 3.86265C8.15702 3.52214 7.97717 3.20739 7.74163 2.93639C7.50609 2.66538 7.21949 2.44342 6.89817 2.28317C6.57685 2.12293 6.22712 2.02754 5.86894 2.00246ZM5.83394 6.46046C5.71846 6.47096 5.60222 6.46995 5.48694 6.45746H5.45894C5.21827 6.47555 4.97647 6.44326 4.74898 6.36265C4.52149 6.28204 4.3133 6.15488 4.13772 5.98929C3.96214 5.82369 3.82301 5.62331 3.72923 5.40092C3.63545 5.17854 3.58906 4.93904 3.59304 4.69773C3.59702 4.45641 3.65127 4.21857 3.75234 3.9994C3.8534 3.78023 3.99906 3.58454 4.18001 3.42483C4.36095 3.26511 4.57321 3.14488 4.80324 3.07181C5.03326 2.99875 5.27599 2.97444 5.51594 3.00046C5.97476 2.95829 6.43155 3.10012 6.7858 3.39474C7.14006 3.68936 7.36277 4.11264 7.40494 4.57146C7.44711 5.03029 7.30528 5.48707 7.01066 5.84133C6.71604 6.19558 6.29276 6.41829 5.83394 6.46046Z"
                          fill="#0164EB"
                          fillOpacity="0.54"
                          stroke="#0164EB"
                          strokeOpacity="0.54"
                          strokeWidth="0.3"
                        ></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.team_images}>
                <img src="/images/dezien.png" alt="" height={172} width={172} />
              </div>
            </div>
          </div>
        </div>
      </Element> */}

      <Element className={styles.sectionwrapper} id="ourpartners">
        <div className="container">
          <div className={styles.titlecontain}>
            <div className={styles.pretitle}>OUR VALUABLE</div>
            <div className={styles.maintitle}>Awesome Partners</div>
            <div className={styles.titledescription}>
              Mudra is a part and partner of follwing tech. giants in this industry.
            </div>
          </div>
          <div className={styles.partner_logo}>
            {partnerLogo &&
              partnerLogo.map((item, ind) => (
                <div className={styles.logo_items} key={ind}>
                  <a href={item.link} target="_blank">
                  <img
                    src={item.image}
                    alt={item.title}
                    height={100}
                    width={140}
                  />
                  </a>
                </div>
              ))}
          </div>
        </div>
      </Element>
      <ScrollToTop />
    </div>
  );
}
