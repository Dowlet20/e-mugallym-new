"use client"

import Link from "next/link";
import React, {useEffect, useState} from "react";
import axiosInstance from "@/utils/axiosInstance";
import AlertDialog from "../AlertDialog";
import { useRouter } from "next/navigation";


const QuestionType = ({
    course_slug, 
    setResult,
    setShowAlert
  }) => {
  const [tests, setTests] = useState([]);
  const [totalScore, setTotalScore] = useState(null);
  const router = useRouter();

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
      setTotalScore("20");
    } 
  };


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
        <div className="rbt-lesson-content-wrapper row">
          {tests.map((test, index)=> (
            <div className="inner py-5 mb-5 px-5 col-md-12" key={index}>
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
                onClick={(e) => handleClick(e, test.passed)}

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

      {/* {showAlert && Object.keys(result).length !== 0 && (
        <AlertDialog
          isOpen={showAlert}
          onClose={() => {setShowAlert(false)}}
          result={result}
          totalScore={"20"}
          onConfirm={handleConfirm}
        />
      )} */}
    </>
  );
};

export default QuestionType;
