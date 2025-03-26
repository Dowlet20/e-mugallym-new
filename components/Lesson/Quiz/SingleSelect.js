"use client"


import React, {useState, useEffect} from "react";

const SingleSelect = ({ point, pointNum, question, index, upsertItem }) => {
  const [selectedValue, setSelectedValue]= useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    upsertItem({
      "quiz_id":question.quiz, 
      "question_id":question.id, 
      "answer":event.target.value
    })
  };
  
  console.log(selectedValue);
  return (
    <>
      <div className="rbt-single-quiz">
        <h4>{index+1}. {question.question}</h4>
        {point ? (
          <div className="mb--10">
            <span>
              Mark: <strong> {pointNum}</strong>
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="row g-3">
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-1"
                value={question.answer1 || ""}
                checked={selectedValue === question.answer1}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="rbt-radio-1">
                {question.answer1}
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-2"
                value={question.answer2 || ""}
                checked={selectedValue === question.answer2}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="rbt-radio-2">
              {question.answer2}
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-3"
                value={question.answer3 || ""}
                checked={selectedValue === question.answer3}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="rbt-radio-3">
              {question.answer3}
              </label>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rbt-form-check">
              <input
                className="form-check-input"
                type="radio"
                name="rbt-radio"
                id="rbt-radio-4"
                value={question.answer4 || ""}
                checked={selectedValue === question.answer4}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="rbt-radio-4">
              {question.answer4}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSelect;
