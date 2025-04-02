"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";

const Content = ({ 
    topics, 
    courseSlug, 
    course_duration,
    setShowAlert,
    setResult 
  }) => {

    const [tests, setTests] = useState([]);

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
          const url=`/quiz/${courseSlug}/`;
          const response = await axiosInstance.get(url);
          setTests(response.data.reverse());
          
        } catch (err) {
          console.log(err.message);
        }
      }
      if (courseSlug) {
        fetchData();
      }
    },[courseSlug]);

    console.log(tests);

  return (
    <>
      <div className="rbt-course-feature-inner">
        <div className="section-title">
          <h4 className="rbt-title-style-3" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Kursyň wideolary
            <span className="rbt-badge-5 ml--10" style={{ marginLeft: '-10px' }}>
              {course_duration}
            </span>
          </h4>
        </div>
        <div className="rbt-accordion-style rbt-accordion-02 accordion">
          <div className="accordion" id="accordionExampleb2">
            {topics?.map((item, innerIndex) => (
              <div className="accordion-item card" key={innerIndex}>
                <h2
                  className="accordion-header card-header"
                  id={`headingTwo${innerIndex}`}
                >
                  <button
                    className={`accordion-button ${
                      !innerIndex===0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo${innerIndex + 1}`}
                    aria-expanded={innerIndex===0} //item.expand
                    aria-controls={`collapseTwo${innerIndex + 1}`}
                  >
                    {item?.title}
                    <span className="rbt-badge-5 ml--10">
                      {item.topic_duration}
                    </span>
                  </button>
                </h2>
                <div
                  id={`collapseTwo${innerIndex + 1}`}
                  className={`accordion-collapse collapse ${
                    innerIndex===0 ? "show" : "" //item.isShow
                  }`}
                  aria-labelledby={`headingTwo${innerIndex}`}
                  data-bs-parent="#accordionExampleb2"
                >
                  <div className="accordion-body card-body pr--0">
                    <ul className="rbt-course-main-content liststyle">
                      {item?.lessons?.map((list, subIndex) => (
                        <li key={subIndex}>
                          <Link href={`/lesson/${list.slug}/${courseSlug}`}>
                            <div className="course-content-left" style={{ width: '85%' }}>
                              {/* list.playIcon */}
                              <i
                                  className={`feather-${
                                    list?.type !=="video"
                                      ? "file-text"
                                      : "play-circle"
                                  }`}
                                ></i>
                              <span className="text">{list.title}</span>
                            </div>
                            {true ? (
                              <div className="course-content-right">
                                <span className="min-lable">
                                  {list.lesson_duration}
                                </span>
                              </div>
                            ) : (
                              <div className="course-content-right">
                                <span className="course-lock">
                                  <i className="feather-lock"></i>
                                </span>
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <div className="accordion-item card" key={"last"}>
              <h2
                className="accordion-header card-header"
                id={`headingTwolast`}
              >
                <button
                  className={`accordion-button ${
                    true? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseTwolast1`}
                  aria-expanded={true} 
                  aria-controls={`collapseTwolast1`}
                >
                  E-mugallym testler
                  {/* <span className="rbt-badge-5 ml--10">
                    {item.topic_duration}
                  </span> */}
                </button>
              </h2>
              <div
                id={`collapseTwolast1`}
                className={`accordion-collapse collapse ${
                  true ? "show" : "" //item.isShow
                }`}
                aria-labelledby={`headingTwolast`}
                data-bs-parent="#accordionExampleb2"
              >
                <div className="accordion-body card-body pr--0">
                  <ul className="rbt-course-main-content liststyle">
                    <li key="0">
                      <Link
                        href={`/questions-types/${courseSlug}`}
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
                          href={`/pagination-quiz/${test.slug}/${courseSlug}`}
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

export default Content;
