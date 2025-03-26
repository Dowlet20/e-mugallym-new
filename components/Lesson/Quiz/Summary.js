"use client"
import React, {useState, useEffect} from "react";

const Summary = ({ point, pointNum, question, index }) => {
  const [inputs, setInputs] = useState([]);
  let sendText ="";

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
  };

  splittedText.forEach((x,i)=>{
    if (x==='') {
      sendText+=inputs[i]+"_hide";
    } else {
      sendText+=x;
    }
  })

  
  // console.log(splittedText);

  // const text = "new_hide another_hide Next.js is a popular javascript_hide framework built on top of react_hide.I enables developers to create extraordinary_hide applications with features. wow_hide";
  // const result = splitByHide(text);
  // console.log(result);

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
                          value={inputs[ind] || ""}
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
