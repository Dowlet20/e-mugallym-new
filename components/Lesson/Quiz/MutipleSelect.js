"use client"

import React, {useState} from "react";

const MutipleSelect = ({ point, pointNum, question, index, upsertItem, answers }) => {
  const exists = answers.find((item) => item.question_id === question.id);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event, i) => {
    const { checked } = event.target;
    let updatedValues = [...selectedValues];

    if (checked) {
      updatedValues.push(i);
    } else {
      updatedValues = updatedValues.filter((value) => value !== i);
    }

    const answer = updatedValues.sort((a,b)=>a-b) || [];
    
    
    upsertItem({
      //"quiz_id":question.quiz, 
      "question_id":question.id, 
      "answer":answer
    })

    setSelectedValues(updatedValues);
  };
  console.log(question);

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
           {question?.answers?.map((answer, index)=> {
            return (
              <div className="col-lg-6" key={index}>
                <p className="rbt-checkbox-wrapper mb--5">
                  <input
                    id={"rbt-checkbox-"+`${index+1}`}
                    name={"rbt-checkbox-"+`${index+1}`}
                    type="checkbox"
                    value={`${index+1}`}
                    checked={selectedValues.includes(`${index+1}`) || exists?.answer?.includes(`${index+1}`) || false}
                    onChange={(e) => handleCheckboxChange(e, `${index+1}`)}
                  />
                  <label htmlFor={"rbt-checkbox-"+`${index+1}`}>
                    {answer.answer}
                  </label>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default MutipleSelect;
