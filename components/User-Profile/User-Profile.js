import Image from "next/image";
import React from "react";

import bgImage from "../../public/images/bg/bg-image-22.jpg";

const UserProfile = ({  source }) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="rbt-dashboard-content-wrapper">
          <div className="bg-white height-350">
            <Image 
              src={source?.thumbnail ? source?.thumbnail : bgImage} 
              layout="fill"
              objectFit="cover" 
              alt="" 
            />
          </div>
            <div className="rbt-tutor-information">
              <div className="rbt-tutor-information-left">
                <div className="thumbnail rbt-avatars size-lg">
                  <Image
                    src={source?.icon ? source?.icon : bgImage}
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
