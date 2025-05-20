"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../../public/images/tab/tabs-10.jpg";

import axiosInstance from "@/utils/axiosInstance_user";
import VerificationModal from "../VerificationModal";
import { Ripple } from "react-css-spinners";

const InstructorRegistration = () => {
  // const [Roles, setRoles] = useState([]);
  const roles = [
    {
      id:1,
      title:"Mugallym",
      type:"teacher"
    },
    {
      id:2,
      title:"Talyp ýa-da okuwçy",
      type:"student"
    },
  ] 
  // const [selectedRole, setSelectedRole] = useState(0);
  //const [thumbnail, setThumbnail] = useState(null);
  const [role, setRole] = useState(true);
  const [img, setImg] = useState(null);


  // Email ya-da tel nomeri inputda bermeli!
  const [info, setInfo] = useState({
    email:"",
    password1:"",
    password2:"",
    first_name: "",
    last_name: "",
    role: role ? "student" : "teacher",
    educational_institution:""
  }
  )
  const [loading, setLoading] = useState(false);

  
  // const handleChange = (e) => {
  //   setSelectedRole(e.target.value);
  // }

  //console.log(role ? "student" :"teacher")
  
  const postInstructor = async (e) => {
    e.preventDefault();
    
    //setLoading(true);
    
    if (info.email.slice(0,4)==="+993") {
      info.phone_number = info.email;
      delete info.email;
    } else if (!info.email.includes("@gmail.com") && 
    !info.email.includes("+993")
  ) {
      alert(`Email ýa-da tel nomer "@gmail.com" ýa-da "+993" ýazgyny saklamaly.`);
      return;
    }
    
    if (
        !info?.email ||
        !info?.first_name || 
        !info?.last_name ||  
        !info?.password1 ||
        !info?.password2 ||
        !info?.educational_institution
      ) {
      alert("Maglumatynyzy doly giriziň!");
      return;
    }


    if (info.password1.length < 8 || info.password2.length < 8) {
      alert(`Açar sözi azyndan 8 (harp, san ýa-da symbol) bolmaly`);
      return;
    }

    if (info.password1 !== info.password2) {
      alert(`Açar sözi we tassyklanylýan açar sözi birmeňzeş bolmaly`);
      return;
    }
    
    // const formData = new FormData();

    // formData.append("email", info?.email);
    // formData.append("password1", info?.password1);
    // formData.append("password2", info?.password2);
    // formData.append("first_name", info?.first_name);
    // formData.append("last_name", info?.last_name);
    // formData.append("role", "instructor");
    // formData.append("educational_institution", "about institute");
    // formData.append("img", img);
    // formData.append("thumbnail", thumbnail);
    // formData.append("username", info?.username);
    // formData.append("middle_name", info?.middle_name);
    // formData.append("role", selectedRole);
    // formData.append("phone_number", info?.phone_number);
    // formData.append("biography", info?.biography);
    // formData.append("order", 1000000); //duzetmeli
    
    const url = "/registration/";
    try {
      
      const response = await axiosInstance.post(url, info);
      console.log(response);
      // localStorage.setItem('teacher_id', response.data.id);
      e.target.reset();
      // duzetmeli kabir zatlar menzes bolmaly dal diyip yalnyslyk cykarmaly
    } catch (error) {
      console.error("Error response:", error.response);
      console.error("Error message:", error.message);
    } finally {
      setLoading(false);
    }
    
  }
  
  // const handleFileImg = (event) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     setImg(event.target.files[0]);
  //   }
  // };

  // const handleFileThumbnail = (event) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     setThumbnail(event.target.files[0]);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("/Role");
  //       setRoles(response.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   fetchData();
  // }, []);

  console.log(info?.email?.includes("@gmail.com"))

  return (
    <>
      {loading && (
        <div className="d-flex bg-transparent" style={{ height: '100vh' }}>
          <Ripple
            color="rgba(162,145,247,1)"
            size={115}
            thickness={7}
            className="mx-auto align-self-center"
          />
        </div>
      )}
      <div className="row pt--60 g-5">
        {/* <div className="col-lg-4">
          <div className="thumbnail">
            <Image
              className="radius-10 w-100"
              src={img1}
              alt="Corporate Template"
            />
          </div> duzetmeli
        </div> */}

        <div className="col-lg-8">
          <div className="rbt-contact-form contact-form-style-1 max-width-auto">
            <div className="section-title text-start">
              <span className="subtitle bg-primary-opacity">
                Agza bolmak üçin
              </span>
            </div>
            {/* <h3 className="title">Mugallym Registrasiýa</h3>
            <hr className="mb--30" /> */}
            <form action="#" onSubmit={postInstructor} className="row row--15">
              {/* <div 
                className="col-lg-12"
                style={{
                  marginBottom : "10px"
                }}
              >
                <div className="filter-select">
                  <div className="filter-select rbt-modern-select search-by-category">
                    <select value={selectedRole} onChange={handleChange}>
                      <option value={0}>Rolyňy saýla</option>
                      {roles?.map((role, index) => {
                        return (
                          <option value={role?.id} key={index}>
                            {role?.title}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <span className="focus-border"></span>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    name="con_email"
                    type="email"
                    placeholder="Email ýa-da telefon nomeri"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "email": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                    <small 
                      className="d-block mt_dec--5"
                      style={{
                        paddingTop:"8px",
                        marginBottom:"-25px",
                        fontSize:"13px",
                      }}
                    >
                      <i 
                        className="feather-info"
                        style={{
                          color:"green",
                          marginRight:"7px"
                        }}
                      ></i> 
                      Email ýa-da tel nomer "@gmail.com" ýa-da "+993" ýazgyny saklamaly.
                    </small>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    name="con_name"
                    type="text"
                    placeholder="Ady"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "first_name": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    name="con_lastname"
                    type="text"
                    placeholder="Familiýasy"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "last_name": e.target.value,
                    }))}
                  />

                  <span className="focus-border"></span>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    name="con_password"
                    type="password"
                    placeholder="Açar sözi"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "password1": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                  <small 
                      className="d-block mt_dec--5"
                      style={{
                        paddingTop:"8px",
                        marginBottom:"-25px",
                        fontSize:"13px",
                      }}
                    >
                      <i 
                        className="feather-info"
                        style={{
                          color:"green",
                          marginRight:"7px"
                        }}
                      ></i> 
                      Açar sözi azyndan 8 (harp, san ýa-da symbol) bolmaly
                    </small>
                </div>
              </div>
              
              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    name="con_passwordconfirm"
                    type="password"
                    placeholder="Açar sözi tassyklamak"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "password2": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input
                    name="con_passwordconfirm"
                    type="text"
                    placeholder="Degişli ýokary okuw jaýy"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "educational_institution": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                </div>
              </div>
              
              <div className="col-lg-6">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setRole(true)
                    }}
                    className="rbt-btn btn-md hover-icon-reverse w-100"
                    style={{
                      marginBottom:"18px",
                      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.15)',
                      background:!role ? "white" : "",
                      color:!role ? "black" : ""
                    }}
                  >
                    <span>Talyp</span>
                  </button>
                </div>
              </div>

              <div className="col-lg-6">
                <div >
                  <button
                    type="button"
                    onClick={() => setRole(false)}
                    className="rbt-btn btn-md hover-icon-reverse w-100"
                    style={{
                      marginBottom:"18px",
                      boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.15)',
                      background:role ? "white" : "",
                      color:role ? "black" : ""
                    }}
                  >
                    <span>Mugallym</span>
                  </button>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="form-group">
                  <input
                    name="con_middlename"
                    type="text"
                    placeholder="Atasynyň ady"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "middle_name": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                </div>
              </div> */}

              {/* <div className="col-lg-6">
                <div className="form-group">
                  <input
                    name="con_username"
                    type="text"
                    placeholder="Ulanyjy ady"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "username": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                </div>
              </div> */}

              {/* <div className="col-lg-6">
                <div className="form-group">
                  <input
                    name="con_phone"
                    type="text"
                    placeholder="Telefon nomeri"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "phone_number": e.target.value,
                    }))}
                  />
                  <span className="focus-border"></span>
                </div>
              </div> */}

              


              {/* <div className="col-lg-6">
                <div className="form-group">
                  <span className="select-label d-block">
                    Mugallymyň suratyny saýlaň
                  </span>
                  <input
                    type="file"
                    onChange={handleFileImg}
                  />
                  <span className="focus-border"></span>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <span className="select-label d-block">
                    Mugallym paneli üçin suraty saýlaň
                  </span>
                  <input
                    type="file"
                    onChange={handleFileThumbnail}
                  />
                  <span className="focus-border"></span>
                </div>
              </div> */}


              {/* <div className="col-lg-12">
                <div className="form-group">
                  <textarea
                    placeholder="Bio"
                    onChange={(e) => setInfo((info) => ({
                      ...info,
                      "biography": e.target.value,
                    }))}
                  ></textarea>
                  <span className="focus-border"></span>
                </div>
              </div> */}


              <div className="col-lg-12">
                <div className="form-submit-group">
                  <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"       
                    data-bs-toggle="modal"
                    data-bs-target="#Verification"
                 >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Agza bol</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <VerificationModal 
          email={info?.email}
          password={info?.password1}
          //phone_number={info?.phone_number}
        />
      </div>
    </>
  );
};

export default InstructorRegistration;
