"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import axiosInstance from "@/utils/axiosInstance";
import CourseData from "../../data/course-details/courseData.json";

import MutipleSelect from "./Quiz/MutipleSelect";
import SingleSelect from "./Quiz/SingleSelect";
import Summary from "./Quiz/Summary";
import AlertDialog from "../AlertDialog";



const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = sessionStorage.getItem(key);
        return saved ? JSON.parse(saved) : defaultValue;
      } catch (error) {
        console.error("Error parsing sessionStorage:", error);
        return defaultValue;
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};


  
const PaginationQuiz = ({test_slug, course_slug,  setResult, setShowAlert}) => {
  const [questions, setQuestions] = useState([]);    
  const [length, setLength] = useState(0);
  const [answers, setAnswers] = usePersistedState("quizAnswers", []);
  const [courseList, setCourseList] = useState(CourseData.courseDetails);
  const [hydrated, setHydrated] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [gorkezme, setGorkezme] = useState(false);
  const [tabsyr, setTabsyr] = useState(false);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  
  useEffect(() => {
    const fetchData = async () => {
     try {
       const url = `/quiz/${course_slug}`;
       const response = await axiosInstance.get(url);
       const result = response.data;
       const findItem = result.find(item => item.slug === test_slug);
        if (findItem?.passed?.is_passed !== null) {
          setResult(findItem?.passed);
          setTabsyr(true);
        }
      
      } catch (error) {
       console.log(error.message);
     }
    }
    if (course_slug) fetchData();
 }, [course_slug]);

  const upsertItem = (newItem) => {
    setAnswers((prevItems) => {
      const exists = prevItems.some((item) => item.question_id === newItem.question_id);

      if (exists) {
        return prevItems.map((item) =>
          item.question_id === newItem.question_id ? { ...item, ...newItem } : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };


  useEffect(() => {
    const fetchData = async () => {
     try {
       const url = `/questions/${test_slug}`;
       const response = await axiosInstance.get(url);
       const res = response.data.reverse();
       setQuestions(response.data.reverse());
       setLength(response.data.length);
     } catch (error) {
       console.log(error.message);
     }
    }
    if (test_slug) fetchData();
  }, [test_slug]);


  const handlePaginationClick = (questionNumber) => {
    setActiveQuestion(questionNumber);
  };

  const handleNextClick = () => {
    setActiveQuestion((prev) => Math.min(prev + 1, length));
  };

  const handlePreviousClick = () => {
    setActiveQuestion((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    setHydrated(true);
  }, []);


  function handleDragEnd(event) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCourseList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const renderPagination = () => {
    const totalPages = questions.length;
    const maxVisiblePages = 5; 
    const pages = [];
  
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (activeQuestion <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (activeQuestion >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", activeQuestion - 1, activeQuestion, activeQuestion + 1, "...", totalPages);
      }
    }
  
    return pages.map((page, index) => (
      <li
        key={index}
        className={page === activeQuestion ? "active" : ""}
        onClick={() => typeof page === "number" && handlePaginationClick(page)}
      >
        {typeof page === "number" ? <Link href="#">{page}</Link> : <span>...</span>}
      </li>
    ));
  };


  const postAnswers = async () => {
    try {
      const body= answers || [];
      const response = await axiosInstance.post('/answer/', body);
      setResult(response.data);
      setShowAlert(true);
      if (typeof window !== "undefined") {
        sessionStorage.removeItem('quizAnswers');
        setAnswers([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(length)

  if (!hydrated) {
    return null;
  }


  return (
    <>
      <div className="quize-top-meta">
        <div className="quize-top-left">
          <span>
            Sorag:
            <strong> {activeQuestion}/{length}</strong>
          </span>
          <span>
            bu soragyň baly: <strong>{questions?.[activeQuestion-1]?.score || ""}</strong>
          </span>
        </div>
      </div>
      <hr />
      <nav>
        <div className="nav-links mb--30">
          <ul className="rbt-pagination justify-content-start">
            <li className="" onClick={handlePreviousClick}>
              <Link href="#" aria-label="Previous">
                <i className="feather-chevron-left" />
              </Link>
            </li>
            {renderPagination()}
            <li onClick={handleNextClick}>
              <Link href="#" aria-label="Next">
                <i className="feather-chevron-right" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <form id="quiz-form" className="quiz-form-wrapper">
        {questions.map((question,index)=> (
          <div key={index}>
            {activeQuestion === index+1 && question.type === "multiple_choice" ? (
              <div
                id="question-1"
                className={`question ${activeQuestion === index+1 && question.type === "multiple_choice" ? "" : "d-none"}`}
              >
                <MutipleSelect 
                  question={question}
                  upsertItem={upsertItem}
                  index={index}
                  answers={answers}
                />
              </div>
            ) : (
            <>
            </>)
            }

            {activeQuestion === index+1 && question.type === "single_choice" ? (
              <div
                id="question-2"
                className={`question ${activeQuestion === index+1 && question.type ===  "single_choice" ? "" : "d-none"}`}
              >
                <SingleSelect 
                  question={question}
                  upsertItem={upsertItem}
                  index={index}
                  answers={answers}
                />
              </div>
              ) : (
                <>
                </>
              )
            }

            {activeQuestion === index+1 && question.type === "fill_in_the_blank" ? (
              <div
                id="question-5"
                className={`question ${activeQuestion === index+1 && question.type === "fill_in_the_blank" ? "" : "d-none"}`}
              >
                <Summary
                  question={question}
                  upsertItem={upsertItem}
                  index={index}
                  answers={answers}
                />
              </div>
              ) : (
                <>
                </>
              )
            }
          </div>
        ))}

        {/* <div
          id="question-6"
          className={`question ${activeQuestion === 6 ? "" : "d-none"}`}
        >
          <div className="rbt-single-quiz">
            <h4>6. Change Question Order</h4>
            <div className="row g-3 mt--10">
              <div className="col-lg-12">
                <div className="rbt-form-chec">
                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToVerticalAxis]}
                  >
                    <SortableContext
                      items={courseList}
                      strategy={verticalListSortingStrategy}
                    >
                      {courseList.slice(0, 3).map((course) => (
                        <Ordering key={course.id} course={course} />
                      ))}
                    </SortableContext>
                  </DndContext>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </form>
      <div className="submit-btn mt--40">
        <button
          className="rbt-btn btn-gradient hover-icon-reverse"
          onClick={() => {
            if (activeQuestion === length) {
                if (answers.length===0) {
                  setShowAlert(true);
                  setResult("Bosh")
                } else {
                  setGorkezme(true);
                  // postAnswers()
                }
              } else {
                handleNextClick()
              }
          }}
        >
          <span className="icon-reverse-wrapper">
            <span className="btn-text">
              {activeQuestion === length ? "Tabşyrmak" : "Indiki"}
            </span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </span>
        </button>
      </div>
      {gorkezme && (
        <AlertDialog
          isOpen={gorkezme}
          onClose={() => setGorkezme(false)}
          result={"Confirm"}
          onConfirm={postAnswers}
        />
      )}
    </>
  );
};

export default PaginationQuiz;
