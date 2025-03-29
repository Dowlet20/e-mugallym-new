"use client";

import {useState, useEffect} from 'react';
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import StudentDashboardSidebar from "@/components/Student/StudentDashboardSidebar";
import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import OrderHistory from '@/components/Instructor/OrderHistory';

const StudentProfile = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/courses/analytics/');
        setAnalytics(response.data);
      } catch (error) {
        console.log(error);
      }
    } 
    fetchData();
  }, [])

  console.log(analytics);

  // const formattedDate = (isoString) => {
  //   const date = new Date(isoString);
  //   const day = String(date.getUTCDate()).padStart(2, '0');
  //   const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  //   const year = date.getUTCFullYear();
  //   const hours = String(date.getUTCHours()).padStart(2, '0');
  //   const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  //   const seconds = String(date.getUTCSeconds()).padStart(2, '0');

  //   const formatDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  //   return formatDate;
  // }

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image" />
          </div>
          <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* <StudentDashboardHeader /> */}

                  <div className="row g-5">
                    <div className="col-lg-3">
                      <StudentDashboardSidebar />
                    </div>

                    <div className="col-lg-9">
                      <OrderHistory 
                        analytics={analytics}
                      />
                      {/* <div >
                        <div className="rbt-my-account-inner">
                          <h3>Soňky giren kurslarym</h3>

                          <div className="rbt-my-account-table table-responsive text-center">
                            <table className="table table-bordered">
                              <thead className="thead-light">
                                <tr>
                                  <th>No</th>
                                  <th>Kurs</th>
                                  <th>Topic</th>
                                  <th>Sapak</th>
                                </tr>
                              </thead>

                              <tbody>
                                {analytics.map((analytic, index) => (
                                  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td style={{
                                      maxWidth:'300px',
                                      wordWrap: 'break-word',
                                      whiteSpace: 'normal'
                                    }}>
                                      {analytic.course.title}
                                    </td>
                                    <td style={{
                                      maxWidth:'300px',
                                      wordWrap: 'break-word',
                                      whiteSpace: 'normal'
                                    }}>
                                      {analytic.topic.title}
                                    </td>
                                    <td style={{
                                      maxWidth:'300px',
                                      wordWrap: 'break-word',
                                      whiteSpace: 'normal'
                                    }}>
                                      {analytic.lesson.title}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div> */}
                    </div>
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

export default StudentProfile;
