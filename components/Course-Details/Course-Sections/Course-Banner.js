import Image from "next/image";
import React from "react";
import Link from "next/link";


const CourseBanner = ({ bannerImg, course }) => {
  return (
    <div className="d-flex align-items-center gap-4">
  <Image
    className="w-50"
    src={bannerImg}
    width={800}
    height={550}
    priority
    alt="Card image"
  />
  <div className="media-body">
    <div className="author-info">
      <h5 className="title">
        <Link
          className="hover-flip-item-wrapper"
          href=""
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {course?.title}
        </Link>
      </h5>
      <span className="b3 subtitle"></span>
    </div>
    <div className="content">
      <div className="description">
        <div style={{
          width: '100%',
          height: '10.7em', 
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
          textOverflow: 'ellipsis',
          lineHeight: '1.5em',
          fontSize: '0.9em', 
          color: '#333', 
        }}>
          {course?.description}
        </div> 
      </div>
    </div>
  </div>
</div>
  );
};

export default CourseBanner;
