"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import CourseCard from "./CourseCard";

import { useAppContext } from "@/context/Context";

const CourseFilterOneToggle = ({course, handleRender}) => {
  const { toggle } = useAppContext();

  return (
    <>
      <div
        className={`rbt-course-grid-column ${!toggle ? "active-list-view" : ""
          }`}
      >
        {course.map((data, index) => (
          <div className="course-grid-3" key={index}>
            <CourseCard
              data={data}
              toggle={toggle}
              handleRender={handleRender}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CourseFilterOneToggle;
