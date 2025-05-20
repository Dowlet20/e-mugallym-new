import Image from "next/image";
import Link from "next/link";
import React from "react";

const Instructor = ({ checkMatchCourses, course }) => {
  
  return (
    <>
      <div className="about-author border-0 pb--0 pt--0">
        <div className="section-title mb--30">
          <h4 className="rbt-title-style-3">Çeşme</h4>
        </div>
        <div className="media align-items-center">
            <div className="thumbnail">
              <Link href={`/cesme/${course?.source?.slug ? course?.source?.slug : ""}`}>
                <img
                  src={course?.source?.icon ? course?.source?.icon  : "/images/client/avatar-02.png"}
                  width={250}
                  height={250}
                  alt={course?.source?.title}
                />
              </Link>
            </div>
            <div className="media-body">
              <div className="author-info">
                <h5 className="title">
                  <Link
                    className="hover-flip-item-wrapper"
                    href={`/cesme/${course?.source?.slug ? course?.source?.slug : ""}`}
                  >
                    {course?.source?.title}
                  </Link>
                </h5>
                <span className="b3 subtitle">
                </span>
              </div>
              <div className="content">
                <div className="description">
                  <div style={{
                    width: '100%', 
                    height: '7.5em',
                    overflow: 'hidden', 
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 5,
                    textOverflow: 'ellipsis',
                    lineHeight: '1.5em',
                }}>
                  {course?.source?.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
