
"use client";

import Link from "next/link";
import Image from "next/image";

import CourseData from "../../../data/course-details/courseData.json";
import { useAppContext } from "@/context/Context";
import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

const Search = () => {
  const { search } = useAppContext();
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchapi, setSearchapi] = useState("");


  const startIndex = (page - 1) * 6;

  const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let slug="";
  let paid="";
  let user="";
  let ordering="";


  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =`/course/${slug ? `?category_slug=${slug}` : ""}${slug && paid ? `&paid=${paid}` : !slug && paid ? `?paid=${paid}` : ""}${(slug || paid) && user ? `&user=${user}` : !slug && !paid && user ? `?user=${user}` : ""}${(slug || paid || user) && searchapi ? `&search=${searchapi}` : !slug && !paid && !user && searchapi ? `?search=${searchapi}` : ""}${(slug || paid || user || searchapi) && ordering ? `&ordering=${ordering}` : !slug && !paid && !user && !searchapi && ordering ? `?ordering${ordering}` : ""}`;
        const response = await axiosInstance.get(url);
        const allCourse = response.data.items;
        setCourse(allCourse);
        setTotalPages(response.data.total_pages);
      
      } catch (error) {
        console.log(error.Message);
      }
    }
    fetchData();
  }, [setTotalPages, setCourse, searchapi]);

  return (
    <>
      <div className={`rbt-search-dropdown ${!search ? "active" : ""}`}>
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12">
              <form action="#">
                <input 
                  type="text" 
                  placeholder="Siz näme gözleýärsiňiz?"
                  onChange={(e)=>setSearchapi(e.target.value)} 
                />
                <div className="submit-btn">
                  <Link className="rbt-btn btn-gradient btn-md" href="#">
                    Gözleg
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="rbt-separator-mid">
            <hr className="rbt-separator m-0" />
          </div>

          <div className="row g-4 pt--30 pb--60">
            <div className="col-lg-12">
              <div className="section-title">
                <h5 className="rbt-title-style-2">Biziň top kurslarymyz</h5>
              </div>
            </div>

            {courses?.slice(0, 4).map((data, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href={`/kurs-barada/${data?.slug}`}>
                    <div style={{ height: '128px', overflow: 'hidden', position: 'relative' }}>
                        <img
                            src={data?.thumbnail ? data?.thumbnail.replace("http://", "https://")  : "/images/course/course-01.jpg"}
                            alt="Card image"
                            // layout="fill" 
                            // objectFit="cover" 
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    </a>
                  </div>
                  <div className="rbt-card-body">
                    <h5 className="rbt-card-title">
                    <div style={{
                      width: '100%', 
                      margin: '10px auto',
                      height: '3em',
                      overflow: 'hidden', 
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2,
                      textOverflow: 'ellipsis',
                      lineHeight: '1.5em',
                    }}>
                      <a href={`/kurs-barada/${data?.slug}`}>
                        {data?.title}
                      </a>
                    </div>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
