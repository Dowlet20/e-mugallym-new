"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context, { useAppContext } from "@/context/Context";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import CategoryHeadTwo from "@/components/Category/CategoryHeadTwo";
import CourseFilterOneToggle from "@/components/Category/Filter/CourseFilterOneToggle";
import Pagination from "@/components/Common/Pagination";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

import axiosInstance from "@/utils/axiosInstance";
import { Ripple } from 'react-css-spinners';

const CourseFilteTwoTogglePage = () => {
  const [taze,  setTaze] = useState(false);
  const [courses, setCourse] = useState([]);
  const [total_items, setTotal_items] =useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);

  let category = "";
  let level = "";
  let source = "";

  selectedValues.forEach((x, i) => {
    if (i !== selectedValues.length - 1) {
      category = category + x + ",";
    }
    else {
      category = category + x;
    }
  });
  useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setPage(parseInt(storedPage,10));
    }
  }, []);

  selectedLevels.forEach((x, i) => {
    if (i !== selectedLevels.length - 1) {
      level = level + x + ",";
    }
    else {
      level = level + x;
    }
  });

  selectedSources.forEach((x, i) => {
    if (i !== selectedSources.length - 1) {
      source = source + x + ",";
    }
    else {
      source = source + x;
    }
  });

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

  // const url =`/courses/${search ? `?search=${search}` : ""}${search && category ? `&category=${category}` : !search && category ? `?category=${category}` : ""}${(search || category) && level ? `&level=${level}` : !search && !category && level ? `?level=${level}` : ""}${(search || category || level) && search ? `&search=${search}` : !slug && !paid && !user && search ? `?search=${search}` : ""}${(slug || paid || user || search) && ordering ? `&ordering=${ordering}` : !slug && !paid && !user && !search && ordering ? `?ordering=${ordering}` : ""}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `/courses/${search ? `?search=${search}` : ""}${search && category ? `&category=${category}` : !search && category ? `?category=${category}` : ""}${(search || category) && level ? `&level=${level}` : !search && !category && level ? `?level=${level}` : ""}${(search || category || level) && source ? `&source=${source}` : !search && !level && !category && source ? `?source=${source}` : ""}${(search || category || level || source) && page ? `&page=${page}` : !search && !category && !level && !source && page ? `?page=${page}` : ""}`;
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
  }, [setTotalPages, setCourse, search, category, level, source, page]);



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
          <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
          <MobileMenu />
          <Cart />

          <CategoryHeadTwo
            category={courses}
            setSearch={setSearch}
            setSelectedValues={setSelectedValues}
            setSelectedLevels={setSelectedLevels}
            setSelectedSources={setSelectedSources}
            total_items={total_items}
            page={page}
          />
          <div className="rbt-section-overlayping-top rbt-section-gapBottom">
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

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CourseFilteTwoTogglePage;
