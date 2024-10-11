import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Page404 from '../../pages/page404';
import styles from '../../styles/dashboard.module.css';
import { MyTeam } from './my-team';
import { TeamOverview } from './team-overview';

 const TeamPage = () => {
  return (
    <>
     <ul className={`${styles.pagetabber} ${styles.pagetabberlink}`}>
        <li><NavLink to="/user/team/my-team" className={({isActive})=> (isActive ? styles.active:"")}>My Team</NavLink></li>
        <li><NavLink to="/user/team/team-overview" className={({isActive})=> (isActive ? styles.active:"")}>Team Overview</NavLink></li>
    </ul>
    <Routes>
        <Route exect path="/my-team" element={<MyTeam/>}/>
        <Route exect path="/team-overview" element={<TeamOverview/>}/>
        <Route path="/*" element={<Page404 />} />
    </Routes>
    </>
  )
}

export default TeamPage