import React from "react";
import pdf from "../../image/CV1.pdf";
const CTA = () => {
  return (
    <div className="CTA">
      <a href={pdf} download className="btn">
        DownLoad CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
