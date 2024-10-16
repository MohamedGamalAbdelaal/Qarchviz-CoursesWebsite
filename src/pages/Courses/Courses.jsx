import React from 'react';
import style from './Courses.module.css'
import Usegetcourse from '../../CustomHooks/CourseDetail/usegetcourse';
import { isError } from './../../../node_modules/react-query/es/core/utils';
import isFetchSupported from './../../../node_modules/axios/lib/adapters/fetch';
const Courses = () => {
    
    return <>
    <section className={`${style.courseSection}`}>
       <img src="./course/Courses Page Cover photo.jpg" alt="" />
       <div className="container">
       <div className={`${style.courseText}`}>
            <h1>Courses</h1>
           <p>Find the Best Architecture Visualization Courses with Qarchviz platform and train with the best instructors.
            </p>
       </div>
       </div>
       
    </section>
    <section className={`${style.courseContent}`}>
        <div className="container p-5">
            <div className="row g-5">
                <div className="col-md-4 col-12">
                <div className={`${style.courseItem}`}>
                        <img src="./course/Qarchviz Architectural Course 2.jpg" alt="" />
                        <div className={`${style.itemText}`}>
                            <h5>Qarchviz interior course</h5>
                            <h6 className='mb-1'>Online</h6>
                            <p className={style.s}>The Architectural Visualization Course from Qarchviz is the simplest and the most structured academic-oriented course for Architecture students. The course is designed for those who want to know all the aspects of entering the Archviz world with clear and steady methods.</p> 
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 col-12">
                <div className={`${style.courseItem}`}>
                        <img src="./course/Qarchviz Interior Course 2.jpg" alt="" />
                        <div className={`${style.itemText}`}>
                            <h5>Qarchviz interior course</h5>
                            <h6 className='mb-4'>Online</h6>
                            <p>Coming in <span>October - 2024</span></p> 
                        </div>
                    </div>
                    </div>
                <div className="col-md-4 col-12">
                    <div className={`${style.courseItem}`}>
                        <img src="./course/Qarchviz Sketching Course 2.jpg" alt="" />
                        <div className={`${style.itemText}`}>
                            <h5>Qarchviz Sketching + water coloring (manwal+digital)</h5>
                            <h6>Online+inclass</h6>
                            <p>Coming in <span>December - 2024</span></p> 
                        </div>
                    </div>
                </div> 
                    
                
            </div>
        </div>
    </section>
    </>
}

export default Courses;
