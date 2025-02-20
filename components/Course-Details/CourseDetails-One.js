import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Instructor from "./Course-Sections/Instructor";
import Overview from "./Course-Sections/Overview";
import Requirements from "./Course-Sections/Requirements";

const CourseDetailsOne = ({ checkMatchCourses, course }) => {
  

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
