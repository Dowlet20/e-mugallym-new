"use client";

import React, { useRef, useState } from "react";
import axiosInstance from "@/utils/axiosInstance_user";

const VerificationModal = ({
        email,
        password
    }) => {
  const codeInputRef =useRef(null);
  const orderInputRef =useRef(null);
  const closeModalButtonRef=useRef(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  console.log(email)

  const verificationPost = async () => {
    setIsSubmitting(true);
  
    if (!verificationCode) {
      setError("Tassyklanyş koduny giriziň!");
      return;
    }
  
    try {
        if (email?.includes("@gmail.com")) {
            const response = await axiosInstance.post(
                "/registration/verify-email/", 
                {
                    "email":email,
                    "code":verificationCode
                }
          );

          const response2 = await axiosInstance.post('/token/', {
              "phone_number":email,
              "password":password
          });    
          sessionStorage.setItem('authToken', response.data.access);
          sessionStorage.setItem('refreshToken', response.data.refresh);
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
          window.location.href = '/';
              // if (response.status === 200) {
              // }
        //   if (response.status === 201) {
        //     }
          console.log(response)
          console.log(response2)

        }
        if (email?.slice(0,4) === "+993") {
            const response = await axiosInstance.post(
                "/registration/verify-phone/", 
                {
                    "phone_number":email,
                    "code": verificationCode.toString()
                }
           );
           const response2 = await axiosInstance.post('/token/', {
               "phone_number":email,
               "password":password
           });    
           sessionStorage.setItem('authToken', response.data.access);
           sessionStorage.setItem('refreshToken', response.data.refresh);
           axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
           window.location.href = '/';
            //    if (response.data.access) {
            //    }
        //    if (response.status === 201) {
        //     }
           console.log(response)
           console.log(response2)
        }

      setVerificationCode("");
      codeInputRef.current.value = "";
      closeModalButtonRef.current.click();
    } catch (err) {
      console.log("Error during lesson post:", err);
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('refreshToken');
      delete axiosInstance.defaults.headers.common['Authorization'];
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <div
        className="rbt-default-modal modal fade"
        id="Verification"
        tabIndex="-1"
        aria-labelledby="VerificationLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="rbt-round-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="inner rbt-default-form">
                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="modal-title mb--20" id="VerificationLabel">
                      Sapak goş
                    </h5>
                    <div className="course-field mb--20">
                      <label htmlFor="modal-field-1">
                        Email poçtaňyza gelen tassyklanyş kody giriz:
                      </label>
                      <input 
                        ref={codeInputRef}
                        id="modal-field-1" 
                        type="text" 
                        onChange={(e)=>setVerificationCode(e.target.value)}
                      />
                      <small>
                        <i className="feather-info"> </i> 
                        Tassyklanyş kodyny giriz.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-circle-shape"></div>
            <div className="modal-footer pt--30 justify-content-between">
              <button
                ref={closeModalButtonRef}
                type="button"
                className="rbt-btn btn-border btn-md radius-round-10"
                data-bs-dismiss="modal"
              >
                Çyk
              </button>
              <div className="content">
                <button 
                  type="button" 
                  className="rbt-btn btn-md"
                  onClick={verificationPost}
                >
                  Sapagy goş
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerificationModal;
