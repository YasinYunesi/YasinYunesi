import { useState } from "react";
// Modal library
import { Modal } from "react-responsive-modal";

const TabPane = ({ banner, tech, title, subtitle, techPic, images, about, link, github }) => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [bannerLoaded, setBannerLoaded] = useState(false);

  // JSX ///////////////////////////////
  return (
    <>
      {/* Project banner */}
      <div className={`project position-relative p-1 mb-3 mb-lg-0 ${bannerLoaded ? "active_banner" : ""}`}>
        {/* THE MAIN BANNER */}
        <div className="project_banner">
          <img className="col-12 h-100" src={banner} alt="project banner" onLoad={() => setBannerLoaded(true)} />
        </div>

        {/* THE OVERLAY */}
        <div className="project_overlay position-absolute top-0 bottom-0 start-0 end-0 text-center d-flex flex-column justify-content-between">
          <div className="project_text">
            <h4 className="fw-bold">{title}</h4>
            {tech.map((t, i) => {
              return i <= 2 && <span key={t}>{`${t}${i <= 1 ? "/" : ""}`}</span>;
            })}
          </div>

          <div className="project_btn">
            <button className="text-uppercase px-4 py-1 px-xl-5 py-xl-2" onClick={() => setOpen(true)}>
              learn more
            </button>
          </div>
        </div>
      </div>
      {/* Project modal */}
      <Modal
        classNames={{
          modal: "custom_modal p-0 m-0 bg-transparent",
        }}
        open={open}
        onClose={() => setOpen(false)}
        showCloseIcon={false}
        center
      >
        {/* Images Carousel */}
        <div className="carousel slide position-relative" id="projectCarousel" data-bs-ride="carousel" data-bs-interval="false">
          {/* images */}
          <div className={`carousel-inner ${loaded ? "active_img" : ""}`}>
            {images.map((img, i) => {
              return (
                <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={img}>
                  <img className="col-12" src={img} alt="project screenshot" onLoad={() => setLoaded(true)} />
                </div>
              );
            })}
          </div>
          {/* side buttons */}
          <button
            className="carousel_btn position-absolute bottom-0 start-0 px-4 py-3"
            data-bs-target="#projectCarousel"
            data-bs-slide="prev"
            type="button"
          >
            <i className="fas fa-chevron-left fs-5" aria-hidden="true"></i>
          </button>
          <button
            className="carousel_btn position-absolute bottom-0 end-0 px-4 py-3"
            data-bs-target="#projectCarousel"
            data-bs-slide="next"
            type="button"
          >
            <i className="fas fa-chevron-right fs-5" aria-hidden="true"></i>
          </button>
        </div>

        <div className="modal_content p-4">
          {/* Title */}
          <div className="modal_title d-flex justify-content-between align-items-center">
            <div className="fw-bolder mb-4">
              <h3>{title}</h3>
              <span className="text-uppercase">{subtitle}.</span>
            </div>
            <a href={github} title="See code on Github" target="_blank" rel="noreferrer">
              <i className="fab fa-github fs-3"></i>
            </a>
          </div>
          {/* description */}
          <p>{about}</p>
          {/* techs */}
          <div className="techs my-4 pt-1 pb-2 d-grid">
            {techPic.map((pic) => {
              return (
                <div className="col-12 col-md-10 p-2" key={pic}>
                  <img className="col-12" src={pic} alt="tech" />
                </div>
              );
            })}
          </div>
          {/* buttons */}
          <div className="modal_btns d-flex justify-content-between">
            <a href={link} className="site_btn text-uppercase fw-bold px-4 py-2" title={link} target="_blank" rel="noreferrer">
              <i className="fas fa-external-link-alt me-2" /> view site
            </a>
            <button className="close_btn d-flex bg-transparent" onClick={() => setOpen(false)} title="Close">
              <i className="fas fa-times fs-5 my-auto" />
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TabPane;
