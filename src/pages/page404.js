import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <section className="pagesection">
        <div className="fullwidthscreen">
            <div className="containerfluid">
                <div className="contentdetail">
                    <h1 className="globaltitle"><span>4</span><span>0</span><span>4</span></h1>

                    <h4 className="subtitle">Oops!</h4>

                    <p className="detailtext">We're sorry,<br/> The page you were looking for doesn't exist anymore.</p> 

                    <div className="backbtn">
                        <Link to="/" className="btnerr">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Page404;
