import React from "react";
import style from "./Course-Topices.module.css";

const courseTopic = [
  "./Cards/Zone 5 Card_1.jpg",
  "./Cards/Zone 5 Card_2.jpg",
  "./Cards/Zone 5 Card_3.jpg",
  "./Cards/Zone 5 Card_4.jpg",
  "./Cards/Zone 5 Card_5.jpg",
  "./Cards/Zone 5 Card_6.jpg",
  "./Cards/Zone 5 Card_7.jpg",
  "./Cards/Zone 5 Card_8.jpg",
  "./Cards/Zone 5 Card_9.jpg",
  "./Cards/Zone 5 Card_10.jpg",
  "./Cards/Zone 5 Card_11.jpg",
  "./Cards/Zone 5 Card_12.jpg",
  "./Cards/Zone 5 Card_13.jpg",
  "./Cards/Zone 5 Card_14.jpg",
  "./Cards/Zone 5 Card_15.jpg",
  "./Cards/Zone 5 Card_16.jpg",
  "./Cards/Zone 5 Card_17.jpg",
  "./Cards/Zone 5 Card_18.jpg",
  "./Cards/Zone 5 Card_19.jpg",
  "./Cards/Zone 5 Card_20.jpg",
  "./Cards/Zone 5 Card_21.jpg",
];

const CourseTopics = () => {
  return (
    <div className={style.topicSection}>
      <p className={style.title}>Course Topics Overview</p>
      <div className="container-fluid">
        <div className="row p-3 g-3 mt-5">
          {courseTopic.map((topic, index) => (
            <div className="col-lg-4 col-12" key={index}>
              <div className={style.image}>
                <img src={topic} alt={`Course Topic ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTopics;
