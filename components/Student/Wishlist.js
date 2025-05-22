"use client"


import { useState, useEffect } from 'react';
import Courses from "../../data/dashboard/instructor/instructor.json";
import CourseWidget from "../Instructor/Dashboard-Section/widgets/CourseWidget";
import { useAppContext } from "@/context/Context";
import axiosInstance from '@/utils/axiosInstance';
import Pagination from '../Common/Pagination';

const Wishlist = () => {
  const [taze, setTaze] = useState(false);
  const [courses, setCourses] = useState([]);
  const [total_items, setTotal_items] =useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const { toggle } = useAppContext();
  
  useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setPage(parseInt(storedPage,10));
    }
  }, []);
  

  const handleClick = (num) => {
    setPage(num);
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRender = () => {
    setTaze((prev)=>!prev)
  }

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = '/course/favourite/';
        const response = await axiosInstance.get(url);
        const allCourse = response.data.items;
        setCourses(allCourse);
        setTotalPages(response.data.total_pages);
        setTotal_items(response.data.total_items);
        localStorage.setItem('currentPage', page);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setTotalPages, setCourses, page, taze, toggle]);
  

  return (
    <>
      <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
        <div className="content">
          <div className="section-title">
            <h4 className="rbt-title-style-3">
              Halanlarym
            </h4>
          </div>
          <div className="row g-5">
            {
              courses.map((data,index) => (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  key={`course-wishlist-${index}`}
                >
                  <CourseWidget
                    data={data}
                    handleRender={handleRender}
                    courseStyle="two"
                    isCompleted={false}
                    isProgress={false}
                    showDescription={false}
                    showAuthor={false}
                    isEdit={false}
                  />
                </div>
              ))
            }
            
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
    </>
  );
};

export default Wishlist;
