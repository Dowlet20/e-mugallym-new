"use client";
import {useEffect, useState} from "react";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonTop from "@/components/Lesson/LessonTop";
import axiosInstance, {base_URL} from "@/utils/axiosInstance";
import { useParams } from "next/navigation";
import React from "react";
import { Ripple } from "react-css-spinners";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic'
import AlertDialog from "@/components/AlertDialog";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


const DownloadButton = ({ fileUrl }) => {
  const handleMouseOver = (e) => {
    e.currentTarget.style.background = '#2f57ef'; 
  };

  const handleClick = () => {
    window.open(fileUrl, '_blank');
  };
  
  const buttonStyle = {
    background: 'linear-gradient(45deg, #2f57ef, #1a3e9e)',
    color: 'white',
    border: 'none',
    borderRadius: '8px', 
    padding: '12px 24px',
    fontSize: '1.8rem',
    cursor: 'pointer',
    transition: 'background 0.3s, transform 0.2s',
    display: 'inline-block',
  };

  const handleMouseOut = (e) => {
      e.currentTarget.style.background = '#2f57ef';
  };

  return (
    <div className="flex items-center justify-content-center m-5">
      <button 
        style={buttonStyle}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Faýly açyň
      </button>
    </div>
  );
};

const LessonPage = () => {
  const params = useParams();
  const lesson_slug = params?.lessonId;
  const course_slug = params?.courseId;
  const [sidebar, setSidebar] = useState(true);
  const [lesson, setLesson] = useState({});
  const [lesson_title, setLesson_title] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [result, setResult] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const new_base_URL = process.env.NEXT_PUBLIC_VIDEO_BASE_URL
  

    const handleConfirm = () =>{
      setResult({})
      router.replace(`/test-barada/${course_slug}`)
    }
    
    
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await axiosInstance.get(`/lesson/${lesson_slug}/`);
          setLesson(response.data);
          setLesson_title(response.data?.title);
          // tBaseUrl(`${parsedUrl.protocol}//${parsedUrl.hostname}:${parsedUrl.port}`);
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      }
  
      if (lesson_slug) {
        fetchData();
      }
    }, [lesson_slug]);

    if (loading) {
      return (
        <div className="d-flex bg-transparent"  style={{height: '100vh'}}>
        <Ripple
          color="rgba(162,145,247,1)"
          size={115}
          thickness={7}
          className="mx-auto align-self-center"
        />
      </div>
    );
  }


  
  if (Object.keys(result).length !== 0) {
      return (
      <>
        <AlertDialog
          isOpen={showAlert}
          onClose={() => setShowAlert(false)}
          result={result}
          onConfirm={handleConfirm}
        />
      </>
    )
    }
    
  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div className="rbt-lesson-leftsidebar">
            <LessonSidebar 
              course_slug={course_slug} 
              lesson_slug={lesson_slug} 
              topic_id={lesson?.topic} 
              type={lesson?.type} 
              setShowAlert={setShowAlert}
              setResult={setResult}
            />
          </div>

          <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
            <LessonTop 
              lesson_title={lesson_title} 
              course_slug={course_slug} 
              sidebar={sidebar}
              setSidebar={setSidebar}
            />
            <div className="inner">
              <div className="plyr__video-embed rbtplayer">
                {lesson?.type === "video" ? (
                  <ReactPlayer
                     url={lesson_slug ? `${new_base_URL}/video/${lesson?.video_name}` : "https://www.youtube.com/embed/qKzhrXqT6oE"}
                     width="100%"
                     height="100%"
                     playing={true} 
                     controls={true} 
                     light={false}
                   />
                ) : 
              (
                <div>
                  <DownloadButton fileUrl={lesson?.material} />
                 </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonPage;
