import Image from "next/image";
import Link from "next/link";

import React from "react";

import awardImg from "../../public/images/icons/card-icon-1.png";


const Biography = ({ checkMatchProfile, source }) => {
  console.log(source?.description)
  return (
    <>
      <div className="col-lg-12 mt--30">
        <div className="profile-content rbt-shadow-box" >
          <h4 className="rbt-title-style-3">Çeşme barada</h4>
          <div className="row g-5">
            <div className="col-lg-12">
              <p className="mt--10 mb--20">
                {source?.description}
              </p>
            </div>
            {/* <div className="col-lg-2 offset-lg-2">
              <div className="feature-sin best-seller-badge text-end h-100">
                <span className="rbt-badge-2 w-100 text-center badge-full-height">
                  <span className="image">
                    <Image
                      src={awardImg}
                      width={50}
                      height={50}
                      priority
                      alt="Best Seller Icon"
                    />
                  </span>
                  Ýokary derejeli
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Biography;
