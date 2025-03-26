import React from "react";

const MutipleSelect = ({ point, pointNum, question, index }) => {
  
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
                value="yes"
              />
              <label htmlFor="rbt-checkbox-1">{question.answer1}</label>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-2"
                name="rbt-checkbox-2"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="rbt-checkbox-2">{question.answer2}</label>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-3"
                name="rbt-checkbox-3"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="rbt-checkbox-3">{question.answer3}</label>
            </p>
          </div>
          <div className="col-lg-6">
            <p className="rbt-checkbox-wrapper">
              <input
                id="rbt-checkbox-4"
                name="rbt-checkbox-4"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="rbt-checkbox-4">{question.answer4}</label>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MutipleSelect;
