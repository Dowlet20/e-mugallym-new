"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppContext } from "@/context/Context";

import Pagination from "@/components/Common/Pagination";

const CourseFilterOneToggle = ({ course, start, end }) => {
  const { toggle } = useAppContext();
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 6;

  const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCourse(course);
    setTotalPages(Math.ceil(course.length / 6));
  }, [setTotalPages, setCourse, getSelectedCourse]);

  return (
    <>
      <div
        className={`rbt-course-grid-column ${!toggle ? "active-list-view" : ""
          }`}
      >
        {course.slice(start, end).map((data, index) => (
          <div className="course-grid-3" key={index}>
            <div
              className={`rbt-card variation-01 rbt-hover ${!toggle ? "card-list-2" : ""
                }`}
            >
              <div className="rbt-card-img">
                <Link href={`/course-details/${data?.slug}`}>
                  <div style={{ height: toggle ? '244px' : '304px', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src={data?.thumbnail ? data?.thumbnail : "/images/course/course-01.jpg"}
                      alt="Card image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="rbt-card-body">

                <h4 className="rbt-card-title">
                  <div style={{
                    width: '100%',
                    height: '3em',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    textOverflow: 'ellipsis',
                    lineHeight: '1.5em',
                  }}>
                    <Link href={`/course-details/${data?.slug}`}>
                      {data?.title}
                    </Link>
                  </div>
                </h4>

                <ul className="rbt-meta">
                  <li> {data?.category?.[0]?.title}
                  </li>
                </ul>
                <div className="rbt-card-text" style={{
                  width: '100%', 
                  height: '6em', 
                  overflow: 'hidden', 
                  display: '-webkit-box', 
                  WebkitBoxOrient: 'vertical', 
                  WebkitLineClamp: 4, 
                  textOverflow: 'ellipsis', 
                  lineHeight: '1.5em',
                }}>
                  {data?.short_description}

                </div>
                <div className="rbt-author-meta mb--10">
                  <div className="rbt-avater">
                    <Link href={`/source/${data?.source?.slug ? data?.source?.slug : ""}`}>
                      <Image
                        src={data?.source?.icon ? data?.source?.icon : "/images/client/avatar-02.png"}
                        width={33}
                        height={33}
                        alt="Sophia Jaymes"
                      />
                    </Link>
                  </div>
                  <div className="rbt-author-info">
                    <Link href={`/source/${data?.source?.slug ? data?.source?.slug : ""}`}>
                      {data?.source?.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {course.length > 6 ? (
        <div className="row">
          <div className="col-lg-12 mt--60">
            <Pagination
              totalPages={totalPages}
              pageNumber={page}
              handleClick={handleClick}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CourseFilterOneToggle;
