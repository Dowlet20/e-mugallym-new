"use client";

import { useEffect } from "react";
import Link from "next/link";
import sal from "sal.js";

import CategoryOne from "../Category/CategoryOne";
import MainDemoBanner from "./MainDemoBanner";
import Card from "../Cards/Card";
import AboutTwo from "../Abouts/About-Two";
import CallToAction from "../Call-To-Action/CallToAction";
import Counter from "../Counters/Counter";
import TestimonialSeven from "../Testimonials/Testimonial-Seven";
import EventCarouse from "../Events/EventCarouse";
import TeamTwo from "../Team/TeamTwo";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";
import NewsletterTwo from "../Newsletters/Newsletter-Two";
import { useAppContext } from "@/context/Context";
import { ParallaxProvider } from "react-scroll-parallax";

const MainDemo = ({ blogs }) => {
  const { token, setToken } = useAppContext();
  useEffect(() => {
    sal({
      threshold: 0.01,
      once: true,
    });
  }, []);
  
  return (
    <>
      <main className="rbt-main-wrapper">
        <div className="rbt-splash-slider d-flex align-items-center">
        <div className="wrapper">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-xl-6 order-2 order-xl-1">
                        <div className="inner">
                            <div className="banner-top">
                                <div className="banner-badge-top">
                                    <div className="icon">
                                        <div className="rating">
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                            <a href="#"><i className="fa fa-star"></i></a>
                                        </div>
                                    </div>
                                    <span className="subtitle">12500+ ulanyjylar</span>
                                </div>

                                <div className="banner-badge-top">
                                    <div className="icon">
                                        <img src="/images/icons/elite.svg" alt="Icons Images"/>
                                    </div>
                                    <span className="subtitle">Ýokary derejeli mugallymlar</span>
                                </div>
                            </div>
                            <h1 className="title">Have your dream site in minutes <br /> for
                                <span className="cd-headline slide">
                                    <span className="cd-words-wrapper">
                                        <b className="is-hidden theme-gradient">Online Course.</b>
                                        <b className="is-visible theme-gradient">Like Udemy.</b>
                                        <b className="is-hidden theme-gradient">School.</b>
                                        <b className="is-hidden theme-gradient">University.</b>
                                        <b className="is-hidden theme-gradient">High School.</b>
                                        <b className="is-hidden theme-gradient">Kindergarden.</b>
                                    </span>
                                </span>
                            </h1>
                            <p className="description">The most <strong>powerful</strong> yet the
                                <strong>easiest</strong> template ever.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                        <div className="video-popup-wrapper">
                          {/* duzetmeli */}
                            <img className="w-100 rbt-radius" src="/images/splash/banner-group-image.png" alt="Video Images"/>
                            <a className="rbt-btn rounded-player-2 popup-video position-to-top with-animation d-none" href="https://www.youtube.com/watch?v=nA1Aqp0sPQo">
                                <span className="play-icon"></span>
                            </a>
                            <div className="banner-group-shape">
                                <div className="shape-image scene shape-4">
                                    <span data-depth="2">
                                        <img src="/images/splash/icons/shape-4.png" alt="Shape Images"/>
                                    </span>
                                </div>
                                <div className="shape-image scene shape-5">
                                    <span data-depth="-2">
                                        <img src="/images/splash/icons/shape-5.png" alt="Shape Images"/>
                                    </span>
                                </div>
                                <div className="shape-image scene shape-6">
                                    <span data-depth="5">
                                        <img src="/images/splash/icons/shape-6.png" alt="Shape Images"/>
                                    </span>
                                </div>
                                <div className="shape-image scene shape-7">
                                    <span data-depth="-3">
                                        <img src="/images/splash/icons/shape-7.png" alt="Shape Images"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row">
                        <div className="splash-service-main position-relative">
                            <div className="service-wrapper service-white">
                                <div className="row g-0">
                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src="/images/icons/icons-01.png" alt="Icon Images"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Fast Performance</h4>
                                                <p>Optimized for a smaller build size, faster dev compilation and dozens of
                                                    other improvements.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src="/images/icons/icons-02.png" alt="Icon Images"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Perfect Responsive</h4>
                                                <p>Our template is full perfect for all device. You can visit our template all
                                                    device easily.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src="/images/icons/icons-03.png" alt="Icon Images"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Fast &amp; Friendly Support</h4>
                                                <p>We are provide 24 hours support for all clients.You can purchase without
                                                    hesitation.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                        <div className="service service__style--1">
                                            <div className="icon">
                                                <img src="/images/icons/icons-04.png" alt="Icon Images"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Easy to Use</h4>
                                                <p>Create your own custom template or section by copying, pasting, and assembling.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="shape-wrapper">
            <div className="shape-image shape-1">
                <img src="/images/splash/icons/shape-1.png" alt="Shape Images" />
            </div>
            <div className="shape-image shape-2">
                <img src="/images/splash/icons/shape-2.png" alt="Shape Images"/>
            </div>
            <div className="shape-image shape-3">
                <img src="/images/splash/icons/shape-3.png" alt="Shape Images"/>
            </div>
        </div>
    </div>
        <div className="rbt-banner-area rbt-banner-1">
          <MainDemoBanner />
        </div>

        <div className="rbt-categories-area bg-color-white rbt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    CATEGORIES
                  </span>
                  <h2 className="title">
                    Explore Top Courses Caterories <br /> That Change Yourself
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5 mt--20">
              <CategoryOne />
            </div>
          </div>
        </div>

        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-secondary-opacity">
                    Top Popular Course
                  </span>
                  <h2 className="title">
                    Histudy Course student <br /> can join with us.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row g-5">
              <Card
                col="col-lg-4 col-md-6 col-sm-6 col-12"
                mt="mt--30"
                start={0}
                end={3}
                isDesc={true}
                isUser={true}
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="load-more-btn mt--60 text-center">
                  <Link
                    className="rbt-btn btn-gradient btn-lg btn-mobile hover-icon-reverse"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Load More Course (40)</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
          <div className="container">
            <ParallaxProvider>
              <AboutTwo />
            </ParallaxProvider>
          </div>
        </div>

        {/* <div className="rbt-callto-action-area mt_dec--half">
          <CallToAction />
        </div> */}

        <div className="rbt-counterup-area bg-color-extra2 rbt-section-gapBottom default-callto-action-overlap">
          <div className="container">
            <Counter isDesc={false} />
          </div>
        </div>

        {/* <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
          <div className="wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--10">
                    <span className="subtitle bg-primary-opacity">
                      EDUCATION FOR EVERYONE
                    </span>
                    <h2 className="title">
                      People like histudy education. <br /> No joking - here’s
                      the proof!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TestimonialSeven />
        </div> */}

        <div className="rbt-event-area rbt-section-gap bg-gradient-3">
          <div className="container">
            <div className="row mb--55">
              <div className="section-title text-center">
                <span className="subtitle bg-white-opacity">
                  STIMULATED TO TAKE PART IN?
                </span>
                <h2 className="title color-white">Upcoming Events</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <EventCarouse />
              </div>
            </div>
          </div>
        </div>

        <div className="rbt-team-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row mb--60">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    Our Teacher
                  </span>
                  <h2 className="title">Whose Inspirations You</h2>
                </div>
              </div>
            </div>
            <TeamTwo />
          </div>
        </div>

        {/* <div className="rbt-rbt-blog-area rbt-section-gap bg-color-extra2">
          <div className="container">
            <div className="row g-5 align-items-center mb--30">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="section-title">
                  <span className="subtitle bg-pink-opacity">Blog Post</span>
                  <h2 className="title">Post Popular Post.</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="read-more-btn text-start text-md-end">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse"
                    href="/blog"
                  >
                    <div className="icon-reverse-wrapper">
                      <span className="btn-text">See All Articles</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <BlogGridTop BlogData={blogs} />
          </div>
        </div> */}

        {/* <div className="rbt-newsletter-area newsletter-style-2 bg-color-primary rbt-section-gap">
          <NewsletterTwo />
        </div> */}
      </main>
    </>
  );
};

export default MainDemo;
