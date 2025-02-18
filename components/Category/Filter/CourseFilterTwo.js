
"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";

const CourseFilterTwo = ({
    setSelectedValues, 
    setSelectedLevels,
    setSelectedSources
  }) => {
  const [show, setShow] = useState(true);
  const [show_ces, setShow_ces] = useState(true);
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/category/");
        setCategories(response.data);
        const response_level = await axiosInstance.get("/level/");
        setLevels(response_level.data);
        const response_source = await axiosInstance.get("/source");
        setSources(response_source.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setSelectedValues((prevValues) => [...prevValues, value]);
    } else {
      setSelectedValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxChangeSource = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setSelectedSources((prevValues) => [...prevValues, value]);
    } else {
      setSelectedSources((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxChangeLevel = (event) => {
    const value = event.target.value;

    if (event.target.checked) {
      setSelectedLevels((prevValues) => [...prevValues, value]);
    } else {
      setSelectedLevels((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  return (
    <>
    <div className="d-flex justify-content-end">
      <div className="col-lg-12">
        <div className="rbt-sidebar-widget-wrapper filter-top-2 mt--60">
          <div className="row g-5">
            <div className="col-lg-4">
              <div
                className={`rbt-single-widget rbt-widget-categories ${show ? "has-show-more" : ""
                  }`}
              >
                <div className="inner">
                  <h4 className="rbt-widget-title-2">
                    Kategoriýalar
                  </h4>
                  <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
                    {categories?.length === 0 ? [] :
                      categories?.map((category, index) => {
                        return (
                          <li className="rbt-check-group" key={index}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`checkbox${category?.id}`}
                              style={{
                                width: '3.5em',
                                height: '3.5em',
                                border: '2px solid #007bff',
                                borderRadius: '5px',
                                transition: 'background-color 0.3s, border-color 0.3s',
                              }}
                              value={category?.slug}
                              onChange={handleCheckboxChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkbox${category?.id}`}
                              style={{
                                fontSize: '16px',
                                marginLeft: '10px',
                                cursor: 'pointer',
                              }}
                            >
                              {category?.title}
                            </label>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div
                  className={`rbt-show-more-btn ${show ? "" : "active"}`}
                  onClick={() => setShow(!show)}
                >
                  Giňişleýin
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className={`rbt-single-widget rbt-widget-categories ${show_ces ? "has-show-more" : ""
                  }`}
              >
                <div className="inner">
                  <h4 className="rbt-widget-title-2">
                    Çeşmeler
                  </h4>
                  <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
                    {sources?.length === 0 ? [] :
                      sources?.map((source, index) => {
                        return (
                          <li className="rbt-check-group" key={index}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`checkboxsource${source?.id}`}
                              style={{
                                width: '3.5em',
                                height: '3.5em',
                                border: '2px solid #007bff',
                                borderRadius: '5px',
                                transition: 'background-color 0.3s, border-color 0.3s',
                              }}
                              value={source?.slug}
                              onChange={handleCheckboxChangeSource}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkboxsource${source?.id}`}
                              style={{
                                fontSize: '16px',
                                marginLeft: '10px',
                                cursor: 'pointer',
                              }}
                            >
                              {source?.title}
                            </label>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
                <div
                  className={`rbt-show-more-btn ${show_ces ? "" : "active"}`}
                  onClick={() => setShow_ces(!show_ces)}
                >
                  Giňişleýin
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="rbt-single-widget rbt-widget-lavels">
                <div className="inner">
                  <h4 className="rbt-widget-title-2">Derejeler</h4>
                  <ul className="rbt-sidebar-list-wrapper lavels-list-check">
                    {/* <li className="rbt-check-group" key={""}>
                      <input
                        id="lavels-list-1"
                        type="checkbox"
                        name="lavels-list-1"
                      />
                      <label htmlFor="lavels-list-1">
                        Ähli derejeler
                      </label>
                    </li> */}
                    {
                      levels.length === 0 ? [] : levels.map(
                        (level, index) => {
                          return (
                            <li className="rbt-check-group" key={index}>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`check${level?.id}`}
                                value={level?.slug}
                                onChange={handleCheckboxChangeLevel}
                              />
                              <label
                                className="form-check-label"
                                htmlFor={`check${level?.id}`}
                                style={{
                                  fontSize: '16px',
                                  marginLeft: '10px',
                                  cursor: 'pointer',
                                }}
                              >
                                {level?.title}
                              </label>
                            </li>
                          )
                        }
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default CourseFilterTwo;
