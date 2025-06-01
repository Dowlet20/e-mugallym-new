"use client";

import { useEffect, useState } from "react";

import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonPagination from "@/components/Lesson/LessonPagination";
import LessonTop from "@/components/Lesson/LessonTop";
import PaginationQuiz from "@/components/Lesson/PaginationQuiz";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import AlertDialog from "@/components/AlertDialog";


const PaginationQuizLayout = () => {
  const [sidebar, setSidebar] = useState(true);
  const params = useParams();
  const test_slug = params?.testId;
  const course_slug= params?.courseId;
  const router = useRouter();
  const [result, setResult] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  
  const handleConfirm = () =>{
    setResult({})
    router.replace(`/test-barada/${course_slug}`)
  }


  // if (Object.keys(result).length !== 0) {
  //     return (
  //     <>
  //       <AlertDialog
  //         isOpen={showAlert}
  //         onClose={() => setShowAlert(false)}
  //         result={result}
  //         onConfirm={handleConfirm}
  //       />
  //     </>
  //   )
  //   }

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

            <div className="inner">
              <div className="content">
                <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30 overflow-hidden">
                  <PaginationQuiz
                    test_slug={test_slug}
                    course_slug={course_slug}
                    setResult={setResult}
                    setShowAlert={setShowAlert}
                  />
                </div>
              </div>
            </div>

            {/* <LessonPagination
              urlPrev="/all-questions"
              urlNext="/single-question"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginationQuizLayout;
