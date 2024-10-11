import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import styles from '../styles/login.module.css';

export default function KeepMeLogin() {
   
  return ( 
    <div className='login_wrapper top60'>
        <div className='container'>
            <form className='row customrow_style'>
                <div className='col-md-custom'>
                    <div className={styles.logincontent_center}>
                        <div className={styles.usertitleicon}>
                           <label>
                                <h5>Choose an Account</h5>
                                <p>You may now log in with</p>
                            </label>
                        </div>
                        <div className={styles.keeplogin}>
                            <div className={styles.kwwploginic}>
                                <img src='/images/circleuser.png' alt='user' height={38} width={38} />
                            </div>
                            <div className={styles.keeeplogintext}>
                                <label>Robert Fox</label>
                                <p><Link to="">robertfox@gmail.com</Link></p>
                            </div>
                            <div className={styles.svgimagearrow}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M0 7H12.17L6.58 1.41L8 0L16 8L8 16L6.59 14.59L12.17 9H0V7Z" fill="#121212"/>
                                </svg>
                            </div>
                        </div>
                        <div className='buttoncontainlight'>
                        <Button content='Login into another account' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
} 
