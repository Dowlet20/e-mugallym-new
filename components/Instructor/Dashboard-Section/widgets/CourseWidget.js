"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import { Star } from "lucide-react";
import { useAppContext } from "@/context/Context";

const CourseWidget = ({
    data,
    handleRender,
    courseStyle,
    showDescription,
    showAuthor,
    isProgress,
    isCompleted,
    isEdit,
  }) => {
    const { setToggle, toggle } = useAppContext();
  const [courseId, setCourseId] = useState(data?.id || 0);
    const [fav, setFav] = useState(data?.favourite || false);

    const isFavourite = async () => {
        try {
            await axiosInstance.post('/courses/favourite/', {"course_id":courseId});
            setToggle(toggle=>!toggle);
        } catch (error) {
            console.log(error);
        }
    }
    const toggleFavorite = () => {
        setFav((prev) => !prev); 
      };

      
  return (
    <>
      <div className={`rbt-card variation-01 rbt-hover ${!toggle ? "card-list-2" : "" }`}>
        <div className="rbt-card-img">
          <Link href={`/course-details/${data?.slug}`}>
            <div style={{ 
              height: toggle ? '214px' : '304px', 
              overflow: 'hidden', 
              position: 'relative' 
            }}>
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
              height: '2.5em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              textOverflow: 'ellipsis',
              lineHeight: '1.3em',
            }}>
              <Link href={`/course-details/${data?.slug}`}>
                  {data?.title}
              </Link>
            </div>
          </h4>

          <ul className="rbt-meta">
            <li> 
              {data?.category?.[0]?.title}
            </li>
          </ul>
          {/* <div className="rbt-card-text" style={{
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
          </div> */}
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
            <div
              style={{
              display:'flex',
              flexDirection:'row',
              gap:'10px',
              alignItems:'center',
              justifyContent:'space-between',
              width:'100%'               
              }}
            >
              <div className="rbt-author-info">
                <Link 
                  href={`/source/${data?.source?.slug ? data?.source?.slug : ""}`}
                >
                  {data?.source?.title}
                </Link>
              </div>
              <div>
                <button 
                  onClick={()=> {
                    toggleFavorite();
                    handleRender();
                    if (courseId!==0) isFavourite();
                  }} 
                  className="btn p-0 bg-transparent border-0"
                >
                  <Star 
                    fill={fav ? "gold" : "none"} 
                    color={fav ? "gold" : "gray"} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseWidget;
