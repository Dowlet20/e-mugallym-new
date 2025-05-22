"use client"
// import PageHead from "../Head";
import { useState, useEffect } from "react";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Separator from "@/components/Common/Separator";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import Pagination from "@/components/Common/Pagination";
import BreadCrumb from "@/components/Common/BreadCrumb";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Shop from "@/components/Shop/Shop";
import FooterOne from "@/components/Footer/Footer-One";
import Wishlist from "@/components/wishlist/Wishlist";
import axiosInstance from "@/utils/axiosInstance";

const WishlistPage = () => {
  const [taze, setTaze] = useState(false);
  const [courses, setCourse] = useState([]);
  const [total_items, setTotal_items] =useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  
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
        setCourse(allCourse);
        setTotalPages(response.data.total_pages);
        setTotal_items(response.data.total_items);
        localStorage.setItem('currentPage', page);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setTotalPages, setCourse, page, taze]);


  return (
    <>
      {/* <PageHead title="Wishlist - Online Courses & Education NEXTJS14 Template" /> */}

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />
          <BreadCrumb title="Halanlarym" text="Halanlarym" />

          <div 
            className="rbt-section-overlayping-top rbt-section-gapBottom"
            style={{
              marginTop:'60px'
            }}
          >
            <div className="inner">
              <div className="container">
                <CourseFilterOneToggle
                  course={courses}
                  handleRender={handleRender}
                />
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

          {/* <Wishlist /> */}

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default WishlistPage;
