"use client";
"use strict"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import CourseData from "../../../data/course-details/courseData.json";
import UserProfile from "@/components/User-Profile/User-Profile";
import Biography from "@/components/User-Profile/User-Biography";
import UserCourses from "@/components/User-Profile/User-Courses";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import axiosInstance_user from "@/utils/axiosInstance_user";
import axiosInstance from "@/utils/axiosInstance";
import { Ripple } from "react-css-spinners";
import Pagination from "@/components/Common/Pagination";


const SingleProfile = ({ getParams }) => {
  const [source, setSource] = useState({});
  const [courses, setCourses] = useState([]);
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const postId = getParams.profileId;
  let getCourse;
  const [loading, setLoading] = useState(true);

  getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

  const checkMatchProfile = getCourse.find((course) => course.id === postId);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response_s = await axiosInstance.get(`/source/${postId}`);
        setSource(response_s.data);

        const response = await axiosInstance.get(`/course/?source=${postId}&page=${page}`);
        setCourses(response.data.items);
        setTotalPages(response.data.total_pages)
        setLoading(false);

      } catch (err) {
        console.error(err)
      }
    }
    if (postId) {
      fetchData();
    }
  }, [page]);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <div className="d-flex bg-transparent" style={{ height: '100vh' }}>
        <Ripple
          color="rgba(162,145,247,1)"
          size={115}
          thickness={7}
          className="mx-auto align-self-center"
        />
      </div>
    );
  }


  return (
    <>
      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="" headerType={true} />
          <MobileMenu />
          <Cart />

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image"></div>
          </div>
          <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row">
                <UserProfile checkMatchProfile={checkMatchProfile} source={source} />
                <Biography source={source} checkMatchProfile={checkMatchProfile} />
              </div>
              <div className="rbt-profile-course-area mt--60">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sction-title">
                      <h2 className="rbt-title-style-3">
                        Çeşmä degişli kurslar
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row g-5 mt--5">
                  <UserCourses {...courses} key={"ssss"} courses={courses} />
                </div>
                <div className="row">
                  <div className="col-lg-12 mt--60">
                    <Pagination
                      totalPages={totalPages}
                      pageNumber={page}
                      handleClick={handleClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleProfile;
