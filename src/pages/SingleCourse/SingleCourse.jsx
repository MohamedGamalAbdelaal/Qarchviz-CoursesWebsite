import React from 'react';
import style from './SingleCourse.module.css'
const SingleCourse = () => {
    return <>
    <section>
    <div className="container mt-5 pt-5">
        <div className={style.mainSection}>
          <div className="row ">
            <div className="col-md-9 col-12">
              <div className={`${style.containSection}`}>
              <h1>Qarchviz Architectural Course </h1>
             <h3>Get detailed review about Qarchviz Architectural Course by watching this video.</h3>
             <div className={style.vedioItem}>
             <video controls className='w-75' src="./Image Planning.mp4"></video>

             </div>
              </div>
             
            </div>
            <div className="col-md-3 col-12 p-0 m-0">
                <div className={`${style.courseDetails}`}>
                  <img className='w-100' src="./Pay Card image.jpg" alt="" />
                  <div className={style.courseText}>
                    <h4>Qarchviz Architectural Course </h4>
                    <h5>Online</h5>
                    <br /><br /><br /><br />
                    <p>$ 299  or 212 jod - Personal</p>
                    <p>$ 210  or 148 jod - Groups Discount</p>
                    <p>72 hours Money-Back Guarantee</p>
                    <button className={`btn`}>Purchase Course</button>
                    <h6>Course Include</h6>
                    <p>-  5 Chapters </p>
                    <p>-  130+ Videos</p>
                    <p>-  Personal Support</p>
                    <p>-  35+ hours of Content</p>
                    <p>-  10+ Assignments</p>
                    <p>-  1 Big Project</p>
                    <p>-  1 year access (Renewable for 35 $)</p>
                    <p></p>
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
    </div>
    </section>
    
    </>
}

export default SingleCourse;
