import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4 bg-dark text-white">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="">
            <h5 className="text-uppercase">Relax Zone</h5>
            <p>
              Jl. Raya Kutruk, Jambe, Kabupaten Tangerang. Banten, 15730,
              Indonesia
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a href="https://www.instagram.com/satusore.id/" target="_blank">
          Satu Sore
        </a>
      </div>
    </footer>
  );
};
export default Footer;
