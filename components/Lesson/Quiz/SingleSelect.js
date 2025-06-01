"use client"


import React, {useState, useEffect} from "react";

const SingleSelect = ({ point, pointNum, question, index, upsertItem, answers }) => {
  const [selectedValue, setSelectedValue]= useState("");
  const exists = answers.find((item) => item.question_id === question.id);
  

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    upsertItem({ 
      //"quiz_id":question.quiz,
      "question_id":question.id, 
      "answer":[
        event.target.value
      ]
    })
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
                  <div className="rbt-form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rbt-radio"
                      id={"rbt-radio-"+`${index+1}`}
                      value={`${index+1}`}
                      checked={selectedValue ? selectedValue === `${index+1}` : exists?.answer?.[0] === `${index+1}`}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={"rbt-radio-"+`${index+1}`}>
                      {answer.answer}
                    </label>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default SingleSelect;
