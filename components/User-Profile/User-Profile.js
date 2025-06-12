import Image from "next/image";
import React from "react";

import bgImage from "../../public/images/bg/bg-image-22.jpg";

const UserProfile = ({  source }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  console.log(baseUrl+source?.icon)
  return (
    <>
      <div className="col-lg-12">
        <div className="rbt-dashboard-content-wrapper">
          <div className="bg-white height-350">
            <img 
              src={source?.thumbnail ? baseUrl.replace("/gateway","")+source?.thumbnail : bgImage} 
              // layout="fill"
              // objectFit="cover" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="" 
            />
          </div>
            <div className="rbt-tutor-information">
              <div className="rbt-tutor-information-left">
                <div className="thumbnail rbt-avatars size-lg">
                  <img
                    src={source?.icon ? baseUrl.replace("/gateway","")+source?.icon : bgImage}
                    width={250}
                    height={250}
                    alt="Instructor"
                  />
                </div>
                <div className="tutor-content">
                  <h5 className="title">
                    {source?.title}
                  </h5>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default UserProfile;
