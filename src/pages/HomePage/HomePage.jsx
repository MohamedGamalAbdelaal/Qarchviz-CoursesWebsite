import React from "react";
import Slider from "../../components/Slider/Slider";
import HomeVideo from "./HomeVideo/HomeVideo";
import DiscreptionText from "./../../components/Discreption-text/Discreption-text";
import CourseTopics from './../../components/Course-Topics/Course-Topics';
import Gallery from "../../components/Gallery/Gallery";
import CourseEnroll from './../../components/Course-Enroll/Course-Enroll';

export default function HomePage() {
  return (
    <div>
      <Slider />
      
      
      <DiscreptionText title1={"Modileng"}title2={"With 3ds Max"}text1={"Architectural modeling skills are essential"}text2={"for every student so you will learn it"}text3={"clearly and simply. using 3dmax"}/>
      <HomeVideo src={"/video1.mp4"} />
      <DiscreptionText title1={"Image Planning"}title2={"+Rendering"}text1={"composition is the way you control "}text2={"image elements,so mastering it is a must "}text3={"in order to make good rendered images "}/>
      <HomeVideo src={"/Image Planning.mp4"} />
      <DiscreptionText title1={"Post Production"}title2={"Process"}text1={"Post-production s the process of Refining"}text2={"images. By using Photoshop and Camera Raw"}text3={"filter. Also, edit Plans, Section, and diagrams"}/>
      <HomeVideo src={"/Post Production.mp4"} />
      <CourseTopics/>
      <Gallery/>
      <CourseEnroll/>
    </div>
  );
}
