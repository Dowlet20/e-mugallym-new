import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"
import { Ripple } from 'react-css-spinners';
import axiosInstance, {base_URL} from "@/utils/axiosInstance";
import axios from "axios"

import CourseDetails from "../../data/course-details/courseData.json";
import CourseFilterOneToggle from "../Category/Filter/CourseFilterOneToggle";

const Card = ({ start, end, col, mt, isDesc, isUser }) => {

  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total_items, setTotal_items] =useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = base_URL+`/course/?page=1`;
        const response = await axios.get(
          url,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem("authToken")}`,
              'Content-Type': 'application/json',
            }
          }
        );
        const allCourse = response.data.items;
        
        setCourse(allCourse);
        setTotalPages(response.data.total_pages);
        setTotal_items(response.data.total_items);
        // localStorage.setItem('currentPage', page);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [setTotalPages, setCourse]);



  if (loading) {
    return (
      <></>
    );
  }

  console.log(courses)

  return (
    <>
      {/* {CourseDetails &&
        CourseDetails.courseDetails.slice(start, end).map((data, index) => (
          <div
            className={`${col} ${mt}`}
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div className="rbt-card variation-01 rbt-hover">
              <div className="rbt-card-img">
                <Link href={`/kurs-barada/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={355}
                    height={244}
                    alt="Card image"
                  />
                  {data.offPrice > 0 ? (
                    <div className="rbt-badge-3 bg-white">
                      <span>-{data.offPrice}%</span>
                      <span>Off</span>
                    </div>
                  ) : (
                    ""
                  )}
                </Link>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-card-top">
                  <div className="rbt-review">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="rating-count">
                      ({data.review} Reviews)
                    </span>
                  </div>
                  <div className="rbt-bookmark-btn">
                    <Link className="rbt-round-btn" title="Bookmark" href="#">
                      <i className="feather-bookmark"></i>
                    </Link>
                  </div>
                </div>

                <h4 className="rbt-card-title">
                  <Link href={`/kurs-barada/${data.id}`}>
                    {data.courseTitle}
                  </Link>
                </h4>

                <ul className="rbt-meta">
                  <li>
                    <i className="feather-book"></i>
                    {data.lesson} Lessons
                  </li>
                  <li>
                    <i className="feather-users"></i>
                    {data.student} Students
                  </li>
                </ul>
                {isDesc ? <p className="rbt-card-text">{data.desc}</p> : ""}
                {isUser ? (
                  <div className="rbt-author-meta mb--10">
                    <div className="rbt-avater">
                      <Link href={`/profile/${data.id}`}>
                        <Image
                          src={data.userImg}
                          width={33}
                          height={33}
                          alt="Sophia Jaymes"
                        />
                      </Link>
                    </div>
                    <div className="rbt-author-info">
                      By
                      <Link href={`/profile/${data.id}`}>{data.userName}</Link>
                      In <Link href="#">{data.userCategory}</Link>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="rbt-card-bottom">
                  <div className="rbt-price">
                    <span className="current-price">${data.price}</span>
                    <span className="off-price">${data.offPrice}</span>
                  </div>
                  {data.button ? (
                    <Link
                      className="rbt-btn-link left-icon"
                      href={`/kurs-barada/${data.id}`}
                    >
                      <i className="feather-shopping-cart"></i> Add To Cart
                    </Link>
                  ) : (
                    <Link
                      className="rbt-btn-link"
                      href={`/kurs-barada/${data.id}`}
                    >
                      Learn More<i className="feather-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))} */}
        <div className="container">
                <CourseFilterOneToggle
                  course={courses}
                  //handleRender={handleRender}
                />
                {/* <div className="row">
                  <div className="col-lg-12 mt--60">
                    <Pagination
                      totalPages={totalPages}
                      pageNumber={page}
                      handleClick={handleClick}
                    />
                  </div>
                </div> */}
              </div>
    </>
  );
};

export default Card;
