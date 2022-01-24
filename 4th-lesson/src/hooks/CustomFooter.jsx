/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//! <script src="https://kit.fontawesome.com/e77fada65a.js" crossorigin="anonymous"></script>
/*     
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
*/

const CustomFooter = () => {
  return (
    <div className="mt-5">
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://t.me/crisvargas03"
              role="button"
              target="blank"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/_crisvargas03"
              role="button"
              target="blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="mailto:civargas34@gmail.com"
              role="button"
              target="blank"
            >
              <i className="fab fa-google"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://instagram.com/_crisvargas03"
              role="button"
              target="blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/cristian-isaac-vargas-148275195"
              role="button"
              target="blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/CristianVargas34"
              role="button"
              target="blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3">
          <h6>©️ Copyright: 2022</h6>
          <h5>⚡️Cristian Isaac Vargas⚡️</h5>
          {/* <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a> */}
        </div>
      </footer>
    </div>
  );
};

export default CustomFooter;
