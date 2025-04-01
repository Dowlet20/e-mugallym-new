"use client";

import { useEffect, useState } from "react";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonTop from "@/components/Lesson/LessonTop";
import QuestionType from "@/components/Lesson/QuestionType";
import { useParams, useRouter } from "next/navigation";
import AlertDialog from "@/components/AlertDialog";

const QuestionTypeLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  const [details, setDetails] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState({});
  const router = useRouter();
  const params = useParams();
  const course_slug = params?.courseId;
  
  const handleConfirm = () =>{
    setResult({})
    router.replace(`/questions-types/${course_slug}`);
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
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div
            className={`rbt-lesson-leftsidebar ${
              sidebar ? "" : "sibebar-none"
            }`}
          >
            <LessonSidebar 
              course_slug={course_slug}
              setShowAlert={setShowAlert}
              setResult={setResult}
            />
          </div>

          <div className="rbt-lesson-rightsidebar overflow-hidden">
            <LessonTop
              sidebar={sidebar}
              setSidebar={() => setSidebar(!sidebar)}
              course_slug={course_slug} 
            />

            <div className="inner py-0">
              <div className="content">
                <div className="section-title">
                  <p className="mb--10">Quiz</p>
                  <h5>Questions Types</h5>
                </div>

                <hr />
                <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
                  <QuestionType 
                    course_slug={course_slug}
                    setResult={setResult}
                    setShowAlert={setShowAlert}
                    details={details} 
                    setDetails={setDetails} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionTypeLayout;
