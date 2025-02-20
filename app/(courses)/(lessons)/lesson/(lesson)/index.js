"use client";
import {useEffect, useState} from "react";
import LessonSidebar from "@/components/Lesson/LessonSidebar";
import LessonTop from "@/components/Lesson/LessonTop";
import axiosInstance from "@/utils/axiosInstance";
import { useParams } from "next/navigation";
import React from "react";
import { base_URL } from "@/utils/axiosInstance";
import { Ripple } from "react-css-spinners";

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const DownloadButton = ({ fileUrl }) => {

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

  const handleMouseOver = (e) => {
    e.currentTarget.style.background = '#2f57ef'; 
  };

  const handleMouseOut = (e) => {
      e.currentTarget.style.background = '#2f57ef';
  };

  const downloadFile = async () => {
      try {
          const response = await fetch(fileUrl);
          
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = 'downloaded_file.html'; 
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.URL.revokeObjectURL(url); 
      } catch (error) {
          console.error('Error downloading the file:', error);
      }
  };

  return (
    <div className="flex items-center justify-content-center m-5">
      <button 
        style={buttonStyle}
        onClick={downloadFile}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
          Faýly ýükläň
      </button>
    </div>
  );
};

const LessonPage = () => {
  const params = useParams();
  const lesson_slug= params?.lessonId;
  const course_slug= params?.courseId;

  const [lesson, setLesson] = useState({});
  const [lesson_title, setLesson_title] = useState('');
  const [loading, setLoading] = useState(true);
  const [baseUrl, setBaseUrl] = useState('');



  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/lesson/${lesson_slug}`);
        setLesson(response.data);
        setLesson_title(response.data?.title);
        const parsedUrl = new URL(response.data?.material);
        setBaseUrl(`${parsedUrl.protocol}//${parsedUrl.hostname}:${parsedUrl.port}`);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    if (lesson_slug) {
      fetchData();
    }
  }, []);

  if (loading && !baseUrl) {
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
  

  return (
    <>
      <div className="rbt-lesson-area bg-color-white">
        <div className="rbt-lesson-content-wrapper">
          <div className="rbt-lesson-leftsidebar">
            <LessonSidebar course_slug={course_slug} lesson_slug={lesson_slug} topic_id={lesson?.topic} type={lesson?.type} />
          </div>

          <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
            <LessonTop lesson_title={lesson_title} course_slug={course_slug} />
            <div className="inner">
              <div className="plyr__video-embed rbtplayer">
              {lesson?.type === "video" ? (
                <ReactPlayer
                  url={lesson_slug ? `${baseUrl}/api/lesson/${lesson_slug}/material` : "https://www.youtube.com/embed/qKzhrXqT6oE"}
                  width="100%"
                  height="100%"
                  playing={false} 
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
