"use client";
"use strict"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import sal from "sal.js";

const UserCourses = ({ courses }) => {
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);

  return (
    <>
      {courses.isEmpty ? [] : courses.map((course, index) => (
        <div
          className="col-lg-4 col-md-6 col-sm-12 col-12"
          key={index}
        >
          <div className="rbt-card variation-01 rbt-hover">
          <div className="rbt-card-img">
                <Link href={`/kurs-barada/${course?.slug}`}>
                  <div style={{ height: '244px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={course?.thumbnail ? course?.thumbnail.replace("http://", "https://") : "/images/course/course-01.jpg"}
                      alt="Card image"
                      // layout="fill"
                      // objectFit="cover"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  <Link href={`/kurs-barada/${course?.slug}`}>
                    {course?.title}
                  </Link>
                </div>
              </h4>
              <div className="rbt-card-text">
                <div className="rbt-card-text" style={{
                  width: '100%',
                  height: '6em',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                  textOverflow: 'ellipsis',
                  lineHeight: '1.5em'
                }}>
                  {course?.short_description}
                </div>
              </div>
              <div className="rbt-author-meta mb--10">
                <div className="rbt-avater">
                  <Link href={`/cesme/${course?.source?.slug}`}>
                    <img
                      src={course?.source?.icon ? course?.source?.icon.replace("http://", "https://") : "/images/course/course-online-01.jpg"}
                      width={33}
                      height={33}
                      alt="Sophia Jaymes"
                    />
                  </Link>
                </div>
                <div className="rbt-author-info">
                  <Link href={`/cesme/${course?.source?.slug}`}>
                    {course?.source?.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCourses;
