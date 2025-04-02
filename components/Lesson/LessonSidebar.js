"use client";



import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import axiosInstance from "@/utils/axiosInstance";

const LessonSidebar = ({ 
  course_slug, 
  lesson_slug, 
  topic_id, 
  setShowAlert ,
  setResult,
  type
}) => {
  const [activeTab, setActiveTab] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  const [tests, setTests] = useState([]);
  const [topics, setTopics] = useState([]);
  const [search, setSearch] = useState("");
  const [quizToggle, setQuizToggle] = useState(false);

  const handleClick = (e, passed) => {
    if (passed?.is_passed !== null) {
      setResult({
        is_passed:passed?.passed,
        score:passed?.score,
        pass_score:passed?.pass_score,
        count_of_questions:passed?.count_of_questions
      })
      e.preventDefault(); 
      setShowAlert(true); 
    } 
  };


  useEffect(()=>{
    const fetchData = async () => {
      try {
        const url=`/quiz/${course_slug}/`;
        const response = await axiosInstance.get(url);
        setTests(response.data.reverse());
        
      } catch (err) {
        console.log(err.message);
      }
    }
    if (course_slug) {
      fetchData();
    }
  },[course_slug]);



  useEffect(()=>{
    setActiveTab(topic_id)
    const fetchData = async () => {
      try {
        const url=`/topics/?course_slug=${course_slug}${search ? "&search="+search : ""}`;
        const response = await axiosInstance.get(url);
        setTopics(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    if (course_slug) {
      fetchData();
    }
  },[topic_id, course_slug,search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(search=>e.target.value);
  }
  
  
  
  return (
    <>
      <div className="rbt-course-feature-inner rbt-search-activation">
        <div className="section-title">
          <h4 className="rbt-title-style-3">
            Sapaklar
          </h4>
        </div>
        <div className="lesson-search-wrapper">
          <form action="#" className="rbt-search-style-1">
            <input
              className="rbt-search-active"
              type="text"
              placeholder="Sapak gözle"
              onChange={handleSearch}
            />
            <button className="search-btn disabled">
              <i className="feather-search"></i>
            </button>
          </form>
        </div>
        <hr className="mt--10" />
        <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
          <div className="accordion" id="accordionExampleb2">
            {topics?.map((topic, index) => (
              <div className="accordion-item card" key={index}>
                <h2
                  className="accordion-header card-header"
                  id={`headingTwo${index + 1}`}
                >
                  <button
                    className={`accordion-button ${
                      topic?.id === activeTab ? "" : "collapsed"
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    aria-expanded={topic?.id === activeTab}
                    data-bs-target={`#collapseTwo${index + 1}`}
                    aria-controls={`collapseTwo${index + 1}`}
                    onClick={() => setActiveTab(topic?.id)}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <p style={{ width: '250px' }} className="mb-0"> 
                        {topic.title}
                      </p>
                      <p className="rbt-badge-5 ml--30 mb-0">   
                        {topic.topic_duration}
                      </p>
                    </div>
                  </button>
                </h2>
                <div
                  id={`collapseTwo${index + 1}`}
                  className={`accordion-collapse collapse
                    ${
                    topic?.id === activeTab ? "show" : ""
                  }`}
                  aria-labelledby={`headingTwo${index + 1}`}
                >
                  <div className="accordion-body card-body">
                    <ul className="rbt-course-main-content liststyle">
                      {topic.lessons.map((lesson, innerIndex) => (
                        <li key={innerIndex}>
                          <Link
                            className={
                              lesson?.slug === lesson_slug ? "active" : ""
                            }
                            href={`/lesson/${lesson?.slug}/${course_slug}`}
                            onClick={() => setActiveTab(topic?.id)}
                          >
                            <div className="course-content-left">
                              <i
                                className={`feather-${
                                  lesson?.type !=="video"
                                    ? "file-text"
                                    : "play-circle"
                                }`}
                              ></i>
                              <span className="text">
                                {lesson.title} 
                              </span>
                            </div>
                            <div className="course-content-right">
                              {lesson?.type ==="video" && (
                                <span className="min-lable">
                                  {lesson.lesson_duration}
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="accordion-item card" key={"LessonQuiz"}>
              <h2
                className="accordion-header card-header"
                id={`headingTwoLessonQuiz`}
              >
                <button
                  //quizToggle ? "" : "collapsed"
                  className={`accordion-button ${
                    true ? "" : "collapsed"
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  aria-expanded={true}
                  data-bs-target={`#collapseTwoLessonQuiz`}
                  aria-controls={`collapseTwoLessonQuiz`}
                  onClick={() => setQuizToggle((prev)=> !prev)}
                >
                  <div 
                    className="d-flex align-items-center justify-content-between"
                  >
                    <p style={{ width: '250px' }} className="mb-0"> 
                      E-mugallym Test
                    </p>
                  </div>
                </button>
              </h2>
              <div
                id={`collapseTwoLessonQuiz`}
                className={`accordion-collapse collapse
                  ${
                  true ? "show" : ""
                }`}
                aria-labelledby={`headingTwoLessonQuiz`}
              >
                <div className="accordion-body card-body">
                  <ul className="rbt-course-main-content liststyle">
                    <li key="0">
                      <Link
                        className={
                          isActive(`/questions-types/${course_slug}`) ? "active" : ""
                        }
                        href={`/questions-types/${course_slug}`}
                      >
                        <div className="course-content-left">
                          {/* <i
                            className={`feather-${
                              lesson?.type !=="video"
                                ? "file-text"
                                : "play-circle"
                            }`}
                          ></i> */}
                          <span className="text">
                            Testler 
                          </span>
                        </div>
                        {/* <div className="course-content-right">
                          {lesson?.type ==="video" && (
                            <span className="min-lable">
                              {lesson.lesson_duration}
                            </span>
                          )}
                        </div> */}
                      </Link>
                    </li>
                    {tests?.map((test, index)=>(
                      <li key={index+1}>
                        <Link
                          className={
                            isActive(`/pagination-quiz/${test.slug}/${course_slug}`) ? "active" : ""
                          }
                          href={`/pagination-quiz/${test.slug}/${course_slug}`}
                          onClick={(e) => handleClick(e, test?.passed)}
                        >
                          <div className="course-content-left">
                            {/* <i
                              className={`feather-${
                                lesson?.type !=="video"
                                  ? "file-text"
                                  : "play-circle"
                              }`}
                            ></i> */}
                            <span className="text">
                             {index+1}. {test.title}
                            </span>
                          </div>
                          {/* <div className="course-content-right">
                            {lesson?.type ==="video" && (
                              <span className="min-lable">
                                {lesson.lesson_duration}
                              </span>
                            )}
                          </div> */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonSidebar;
