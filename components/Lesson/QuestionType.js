"use client"

import Link from "next/link";
import React, {useEffect, useState} from "react";
import axiosInstance from "@/utils/axiosInstance";
import AlertDialog from "../AlertDialog";
import { useRouter } from "next/navigation";


const QuestionType = ({course_slug}) => {
  const [tests, setTests] = useState([]);
  const [result, setResult] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [totalScore, setTotalScore] = useState(null);
  const router = useRouter();

  const handleClick = (e, is_passed, total_score) => {
    if (is_passed !== null) {
      e.preventDefault(); 
      setResult({
        is_passed:is_passed,
        score:total_score,
        pass_score:"20"
      })
      setShowAlert(true); 
      setTotalScore(total_score);
    } 
  };

  const handleConfirm = () =>{
    setResult({});
    router.push(`/questions-types/${course_slug}`)
  }

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

    console.log(tests);
    
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
                onClick={(e) => handleClick(e, test.passed.is_passed, test.passed.total_score)}

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

      {showAlert && Object.keys(result).length !== 0 && (
        <AlertDialog
          isOpen={showAlert}
          onClose={() => {setShowAlert(false)}}
          result={result}
          totalScore={"20"}
          onConfirm={handleConfirm}
        />
      )}
    </>
  );
};

export default QuestionType;
