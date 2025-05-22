"use client"

import { useState } from "react";
import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import { useRouter } from "next/navigation";
import AlertDialog from "../AlertDialog";

const CourseDetailsOne = ({ checkMatchCourses, course }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState({});
  const router = useRouter();

  const handleConfirm = () =>{
      setResult({})
      router.replace(`/kurs-barada/${course?.slug}`);
    }
  
    if (Object.keys(result).length !== 0) {
          return (
          <>
            <AlertDialog
              isOpen={showAlert}
              onClose={() => {setShowAlert(false)}}
              result={result}
              onConfirm={handleConfirm}
            />
          </>
        )
        }
    
  

  return (
    <>
      <div className="col-lg-12">
        <div className="course-details-content">
          <div className="rbt-inner-onepage-navigation sticky-top mt--30">
            <CourseMenu />
          </div>
          
          <Overview  
            learning_outcomes={course?.description} 
            title="Kurs barada" 
          />

          <Overview   
            learning_outcomes={course?.learning_outcomes} 
            title="Siziň şu kursda öwrenýän materiallaryňyz"
          />

          <div
            className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
            id="coursecontent"
          >
            <Content 
              course_duration={course?.course_duration}  
              topics={course?.topics} 
              courseSlug={course?.slug}  
              setShowAlert={setShowAlert}
              setResult={setResult}
            />
          </div>

          <div
            className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
            id="intructor"
          >
            {checkMatchCourses &&
              checkMatchCourses.courseInstructor.map((data, index) => (
                <Instructor {...data} key={index} checkMatchCourses={data} course={course} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsOne;
