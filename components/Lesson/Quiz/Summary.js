"use client"
import React, {useState, useEffect} from "react";

const Summary = ({ point, pointNum, question, index, upsertItem, answers }) => {
  const [inputs, setInputs] = useState([]);
  const exists = answers.find((item) => item.question_id === question.id);
  const matches = exists?.answer?.split(/(\w+)?_hide/g).map(part => part === undefined ? '' : part) || [];
  if (matches?.[0] === '') matches.shift();
  if (matches?.[matches.length - 1] === '') matches.pop();


  function splitByHide(text) {
    return text.split(/\b\w*_hide\b/).flatMap((part, index, arr) => {
        const result = [part];
        if (index < arr.length - 1) {
            result.push(''); 
        }

        return result;
    });
  }

  const splittedText = splitByHide(question.question) || [];

  useEffect(()=>{
    const newInputs = splittedText.map(x=> '');
    setInputs(newInputs);
  }, []);
  

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value.trim();
    setInputs(newInputs);
  
    
    let updatedSendText = "";
    splittedText.forEach((x, i) => {
      if (x === "") {
        updatedSendText += newInputs[i] + "_hide";
      } else {
        updatedSendText += x;
      }
    });
  
    
    upsertItem({
      "quiz_id": question.quiz,
      "question_id": question.id,
      "answer": updatedSendText || ""
    });
  };
  

  return (
    <>
      <div className="rbt-single-quiz">
        <h4>{index+1}. Dolduryň.</h4>
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
          <div className="col-lg-12">
            <div className="rbt-form-chec" style={{ lineHeight: "55px" }}>
              {splittedText.map((text, ind)=> {
                let i=0;

                return (
                  <React.Fragment key={ind}>
                   {
                    text === '' ? (
                      <>
                        <input 
                          value={inputs[ind] || matches[ind] || ""}
                          className="form-blank-input mx-2" 
                          type="text" 
                          onChange={(event) => handleInputChange(ind, event)}
                        />
                      </>
                    ) : (
                      <span className="form-check-label">
                        {text}
                      </span>
                    )
                  }
                  </React.Fragment>
                )
              })}
              </div>
              {/* <span className="form-check-label">built on top of </span>
              <span className="form-check-label">
                .It enables developers to create
              </span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label">
                applications with features such as
              </span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label"> rendering and </span>
              <input className="form-blank-input mx-2" type="text" />
              <span className="form-check-label"> generation. </span> */}
              
               {/* {question.question} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
