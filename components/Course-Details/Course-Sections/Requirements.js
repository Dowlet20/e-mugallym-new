import React from "react";

const Requirements = ({ description, requirements }) => {
  return (
    <>
      <div className="col-lg-6">
        <div className="section-title">
          <h4 className="rbt-title-style-3 mb--20">
            Gerekli
          </h4>
        </div>
        <div dangerouslySetInnerHTML={{ __html: requirements }} />
      </div>
      <div className="col-lg-6">
        <div className="section-title">
          <h4 className="rbt-title-style-3 mb--20">
            Düşündiriliş
          </h4>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </>
  );
};

export default Requirements;
