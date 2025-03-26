"use client"

import Link from "next/link";
import React, {useEffect, useState} from "react";
import axiosInstance from "@/utils/axiosInstance";

const QuestionType = ({course_slug}) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
       const fetchData = async () => {
        try {
          const url = `/quiz/${course_slug}`;
          const response = await axiosInstance.get(url);
          const result = response.data.reverse();
          setTests(result);
        } catch (error) {
          console.log(error.message);
        }
       }
       if (course_slug) fetchData();
    }, [course_slug]);

    
  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          {tests.map((test, index)=> (
            <div className="inner py-0 mb-5" key={index}>
              <div className="section-title">
                <p>
                  {test.title}
                </p>
                <p>
                  {test.description}
                </p>
              </div>

              <Link
                className="rbt-btn btn-gradient hover-icon-reverse mt--30"
                href={`/pagination-quiz/${test.slug}/${course_slug}`}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Teste başla</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuestionType;
