
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import CategoryBanner from "./Category-Banner";

import CourseFilterTwo from "./Filter/CourseFilterTwo";
import { useAppContext } from "@/context/Context";
import SearchThree from "../Search/Search-Three";

const CategoryHeadTwo = ({ category, setSearch, setSelectedValues, setSelectedLevels, setSelectedSources, total_items, page }) => {
  const pathname = usePathname();
  const { toggle, setToggle } = useAppContext();
  const [filterToggle, setFilterToggle] = useState(true);
  const [activeTab, setActiveTab] = useState("All Course");
  const handleButtonClick = (courseType) => {
    //setCourseFilter(getAllCourse);
    setActiveTab(courseType);
    //filterItem(courseType);
  };

  return (
    <>
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image"></div>

        <div className="rbt-banner-content">
          {category ? (
            <CategoryBanner category={category} />
          ) : (
            <CategoryBanner />
          )}

          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    <div className="rbt-short-item switch-layout-container">
                      <ul className="course-switch-layout">
                        <li className="course-switch-item">
                          <button
                            className={`rbt-grid-view ${
                              toggle ? "active" : ""
                            }`}
                            title="Grid Layout"
                            onClick={() => setToggle(!toggle)}
                          >
                            <i className="feather-grid"></i>
                          </button>
                        </li>
                        <li className="course-switch-item">
                          <button
                            className={`rbt-grid-view ${
                              !toggle ? "active" : ""
                            }`}
                            title="List Layout"
                            onClick={() => setToggle(!toggle)}
                          >
                            <i className="feather-list"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    {category && (
                      <div className="rbt-short-item">
                        <span className="course-index">
                          {total_items} netijäniň {(page-1)*6+1}-{page*6}-y görkezilýär
                        </span>
                        
                      </div>
                    )}
                  </div>
                </div>
                <div className="rbt-elements-area rbt-section-gap">
                  <SearchThree />
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                    <div className="rbt-short-item">
                      <form action="#" className="rbt-search-style me-0">
                        <input 
                          type="text" 
                          placeholder="Kursy gözläň.."
                          onChange={(e)=>{
                            setSearch(e.target.value);
                          }} 
                        />
                        <button
                          type="submit"
                          className="rbt-search-btn rbt-round-btn"
                        >
                          <i className="feather-search"></i>
                        </button>
                      </form>
                    </div>
                    {pathname === "/course-filter-two-open" ? (
                      ""
                    ) : (
                      <div className="rbt-short-item">
                        <div className="view-more-btn text-start text-sm-end">
                          <button
                            className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round"
                            onClick={() => setFilterToggle(!filterToggle)}
                          >
                            Filter<i className="feather-filter"></i>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`row default-exp-wrapper ${
                  filterToggle ? "default-exp-expand" : ""
                } top-border-less`}
              >
                <CourseFilterTwo
                  setSelectedValues={setSelectedValues}
                  setSelectedLevels={setSelectedLevels}
                  setSelectedSources={setSelectedSources}
                />
              </div>
              <div className="container">
            <div className="row mb--30">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title w-600">
                    Histudy Course Student <br /> Can{" "}
                    <span className="theme-gradient">Join With Us</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mb--40 mb_sm--30">
              <div className="col-lg-12">
                <div className="rbt-course-tab-button-wrap">
                  <ul
                    className="rbt-course-tab-button nav nav-tabs"
                    id="rbt-myTab"
                    role="tablist"
                  >
                    {[
                      "All Course",
                      "featured",
                      "popular",
                      "trending",
                      "latest",
                    ].map((courseType, index) => (
                      <li key={index} className="nav-item" role="presentation">
                        <button
                          className={activeTab === courseType ? "active" : ""}
                          type="button"
                          onClick={() => handleButtonClick(courseType)}
                        >
                          <span className="filter-text text-capitalize">
                            {courseType}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryHeadTwo;
