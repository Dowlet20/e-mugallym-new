"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const QuizAttempts = ({
    results,
    formattedDate
  }) => {
    
    return (
      <>
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
          <div className="content">
            <div className="section-title">
              <h4 className="rbt-title-style-3">
                Tabşyran testimiň netijeleri
              </h4>
            </div>

            <div className="rbt-dashboard-table table-responsive mobile-table-750 mt--30">
              <table className="rbt-table table table-borderless">
              <thead>
                  <tr>
                    <th>Kurs</th>
                    <th>Test</th>
                    <th>Ball</th>
                    <th>Jemi</th>
                    {/* <th>GB</th> */}
                    <th>Netijesi</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    results.map((result, index) => (
                      <>
                        <tr>
                          <th>
                            <span className="h6 mb--5">
                              {result.quiz.course.title}
                            </span>
                          </th>
                          <th>
                            <span className="h6 mb--5">
                              {result.quiz.title}
                            </span>
                            <p className="b3 mb--5">
                              {formattedDate(result.updated_at)}
                            </p>
                          </th>
                          <td>
                            <p className="b3">{result.score}</p>
                          </td>
                          <td>
                            <p className="b3">{result.quiz.total_score}</p>
                          </td>
                          {/* <td>
                            <p className="b3">{result.pass_score}</p>
                          </td> */}
                          <td>
                            {result.is_passed ? (
                              <span className="rbt-badge-5 bg-color-success-opacity color-success">
                                Geçdi
                              </span>
                            ) : (
                              <span className="rbt-badge-5 bg-color-danger-opacity color-danger">
                                Geçmedi
                              </span>  
                            )}
                          </td>
                        </tr>
                      </>
                    ))
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };

export default QuizAttempts;
