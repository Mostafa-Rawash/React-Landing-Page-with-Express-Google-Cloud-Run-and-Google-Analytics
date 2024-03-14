import React from "react";
import Button from "react-bootstrap/Button";

import bannerImage from "../assets/img/Banner.png";
function Banner() {
  return (
    <div className="container banner">
      <div className="row">
        <div className="col d-flex flex-column justify-content-center">
          <h1>سِر نحو الإرتقاء بمهاراتك للأفضل</h1>
          <p>
            خطواتك الأولى و الأهم لتحقيق النجاح أصبحت أسهل مما تتخيل
          </p>
          <Button href="#contact_us" variant="primary">
             سجل بياناتك الآن
          </Button>
        </div>
        <div className="col d-none d-lg-block">
          <img src={bannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
