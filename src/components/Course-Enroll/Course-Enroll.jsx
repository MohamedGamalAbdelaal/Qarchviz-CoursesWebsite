import React from "react";
import style from "./Course-Enroll.module.css";
const CourseEnroll = () => {
  return (
    <>
      {/* <div className={style.enrollSection}>
        <div className="row">
            <div className="col-lg-6 col-12">
                <div className={`${style.content}`}>
                    <p>Get detailed review about Qarchviz Architectural course</p>
                    <button className={`btn btn1`}>Enroll The Course</button>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <img src="../../../public/Image.jpg" alt="" />
            </div> 
        </div>
    </div> */}

      <div className={style.enrollSection}>
        <div className=" d-flex flex-column flex-md-row gap-3  justify-content-center align-items-center">
          <div className={`${style.content} `}>
            <p>Get detailed review about Qarchviz Architectural course</p>
            <button className={`btn btn1`}>Enroll The Course</button>
          </div>

          <div className="">
            <img src="Image.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseEnroll;
