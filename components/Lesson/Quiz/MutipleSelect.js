"use client"

import React, {useState} from "react";

const MutipleSelect = ({ point, pointNum, question, index, upsertItem, answers }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const exists = answers.find((item) => item.question_id === question.id);

  const handleCheckboxChange = (event, i) => {
    const { checked } = event.target;
    let updatedValues = [...selectedValues];

    if (checked) {
      updatedValues.push(i);
    } else {
      updatedValues = updatedValues.filter((value) => value !== i);
    }

    const answer=updatedValues.sort((a,b)=>a-b).join(",") || '';
    
    upsertItem({
      "quiz_id":question.quiz, 
      "question_id":question.id, 
      "answer":answer
    })

    setSelectedValues(updatedValues);
  };

  console.log(selectedValues)
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
            <p className="rbt-checkbox-wrapper mb--5">
              <input
                id="rbt-checkbox-1"
                name="rbt-checkbox-1"
                type="checkbox"
                value="1"
                checked={selectedValues.includes("1") || exists?.answer?.includes('1') || false}
                onChange={(e) => handleCheckboxChange(e, "1")}
              />
              <label htmlFor="rbt-checkbox-1">
                {question.answer1}
              </label>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-2"
                name="rbt-checkbox-2"
                type="checkbox"
                value="2"
                checked={selectedValues.includes("2") || exists?.answer?.includes('2') || false}
                onChange={(e) => handleCheckboxChange(e, "2")}
              />
              <label htmlFor="rbt-checkbox-2">
                {question.answer2}
              </label>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-3"
                name="rbt-checkbox-3"
                type="checkbox"
                value="3"
                checked={selectedValues.includes("3") || exists?.answer?.includes('3') || false}
                onChange={(e) => handleCheckboxChange(e, "3")}
              />
              <label htmlFor="rbt-checkbox-3">
                {question.answer3}
              </label>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-4"
                name="rbt-checkbox-4"
                type="checkbox"
                value="4"
                checked={selectedValues.includes("4") || exists?.answer?.includes('4') || false}
                onChange={(e) => handleCheckboxChange(e, "4")}
              />
              <label htmlFor="rbt-checkbox-4">
                {question.answer4}
              </label>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MutipleSelect;
